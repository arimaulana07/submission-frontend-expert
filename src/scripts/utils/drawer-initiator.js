const DrawerInitiator = {
  init({
    openNav, closeNav, navMenu, content,
  }) {
    openNav.addEventListener('click', (e) => {
      this._toggleDrawer(e, navMenu);
    });
    closeNav.addEventListener('click', (e) => {
      this._closeDrawer(e, navMenu);
    });
    content.addEventListener('click', (e) => {
      this._closeDrawer(e, navMenu);
    });
  },

  _toggleDrawer(event, navMenu) {
    event.stopPropagation();
    navMenu.classList.toggle('open');
  },
  _closeDrawer(event, navMenu) {
    event.stopPropagation();
    navMenu.classList.remove('open');
  },
};

export default DrawerInitiator;
