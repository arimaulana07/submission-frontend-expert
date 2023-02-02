import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import Loading from '../utils/loading-screen';
import '../components/hero-component';

class App {
  constructor({
    openNav, closeNav, navMenu, content, hero,
  }) {
    this._openNav = openNav;
    this._closeNav = closeNav;
    this._navMenu = navMenu;
    this._content = content;
    this._hero = hero;
    this._initialAppshell();
  }

  _initialAppshell() {
    DrawerInitiator.init({
      openNav: this._openNav,
      closeNav: this._closeNav,
      navMenu: this._navMenu,
      content: this._content,
    });
  }

  _renderHeroComponent() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    if (url === '/') {
      const body = document.querySelector('header').parentNode;
      const main = document.querySelector('main');
      body.insertBefore(this._hero, main);
    } else {
      document.querySelector('body > hero-component')?.remove();
    }
  }

  async renderPage() {
    Loading.init({ template: 'dualRing' });
    Loading._startLoading();
    const url = UrlParser.parseActiveUrlWithCombiner();
    const ahref = document.querySelector('#skipToContent');
    ahref.addEventListener('click', (e) => {
      e.preventDefault();
      this._content.scrollIntoView();
    });
    try {
      const page = routes[url];
      this._renderHeroComponent();
      this._content.innerHTML = await page.render();
      await page.afterRender();
      Loading._stopLoading();
    } catch (e) {
      const page = routes.NotFound;
      if (e instanceof TypeError) {
        this._content.innerHTML = await page.render('Page Not Found');
      } else {
        this._content.innerHTML = await page.render(e.message);
      }
      Loading._stopLoading();
    }
  }
}

export default App;
