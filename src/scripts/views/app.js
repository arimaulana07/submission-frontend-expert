import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    openNav, closeNav, navMenu, content,
  }) {
    this._openNav = openNav;
    this._closeNav = closeNav;
    this._navMenu = navMenu;
    this._content = content;
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

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
