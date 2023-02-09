class RestaurantMenu extends HTMLElement {
  set menus(menus) {
    this._menus = menus;
    this.render();
  }

  collapseElement() {
    const icCollapse = this.querySelector('.icCollapse');
    const itemMenu = this.querySelector('.itemMenu');
    this.classList.toggle('active');
    const originHeight = 40;
    if (this.clientHeight <= 90) {
      this.style.height = `${itemMenu.scrollHeight + 60}px`;
      icCollapse.classList.remove('fa-caret-down');
      icCollapse.classList.add('fa-caret-up');
    } else {
      this.style.height = `${originHeight}px`;
      icCollapse.classList.remove('fa-caret-up');
      icCollapse.classList.add('fa-caret-down');
    }
  }

  render() {
    const listMenu = document.createElement('ul');
    this._menus.listMenu.forEach((menu) => {
      listMenu.innerHTML += `<li>${menu.name}</li>`;
    });
    this.innerHTML = `
          <div class="menuBtn">
              <button>${this._menus.menuCategory}</button> <i class="icCollapse fa-solid fa-caret-down"></i>
          </div>
          <div class="itemMenu">
              ${listMenu.outerHTML}
          </div>
    `;
    this.addEventListener('click', () => this.collapseElement());
  }
}

customElements.define('restaurant-menu', RestaurantMenu);
