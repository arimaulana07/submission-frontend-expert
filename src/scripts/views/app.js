import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import Loading from '../utils/loading-screen';
import urlChangeEvent from '../utils/url-change-event';
import '../components/hero-component';
import '../components/nav-menu-large';

class App {
  constructor({
    openNav, closeNav, navMenu, content, skipToContent,
  }) {
    this._openNav = openNav;
    this._closeNav = closeNav;
    this._navMenu = navMenu;
    this._content = content;
    this._skipToContent = skipToContent;
    this._initialAppshell();
  }

  _initialAppshell() {
    DrawerInitiator.init({
      openNav: this._openNav,
      closeNav: this._closeNav,
      navMenu: this._navMenu,
      content: this._content,
      skipToContent: this._skipToContent,
    });

    this._skipToContent.addEventListener('click', (e) => {
      e.preventDefault();
      this._skipToContent.style.top = '-100px';
      this._content.scrollIntoView();
    });
  }

  async renderPage() {
    Loading.init({ template: 'dualRing' });
    Loading._startLoading();
    const url = UrlParser.parseActiveUrlWithCombiner();
    urlChangeEvent.url(url);
    try {
      const page = (routes[url] || routes.NotFound);
      this._content.innerHTML = await page.render();
      await page.afterRender();
      Loading._stopLoading();
    } catch (e) {
      const page = routes.NotFound;
      this._content.innerHTML = await page.render(e.message);
      Loading._stopLoading();
    }
  }
}

export default App;
