import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
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
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._renderHeroComponent();
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
