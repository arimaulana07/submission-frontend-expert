const urlChangeEvent = {
  url(currentUrl) {
    this._currentUrl = currentUrl;
    this._renderElements();
  },

  _renderElements() {
    this._renderNavActive();
    this._renderHeroComponent();
  },

  _renderHeroComponent() {
    const hero = document.createElement('hero-component');
    if (this._currentUrl === '/') {
      const body = document.querySelector('header').parentNode;
      const main = document.querySelector('main');
      body.insertBefore(hero, main);
    } else {
      document.querySelector('body > hero-component')?.remove();
    }
  },

  _renderNavActive() {
    const likePage = document.getElementById('favorite');
    const homePage = document.getElementById('homepage');

    if (this._currentUrl === '/') {
      likePage.classList.remove('active');
      homePage.classList.add('active');
    } else if (this._currentUrl === '/like') {
      homePage.classList.remove('active');
      likePage.classList.add('active');
    } else {
      homePage.classList.remove('active');
      likePage.classList.remove('active');
    }
  },
};

export default urlChangeEvent;
