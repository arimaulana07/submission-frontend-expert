class RestaurantCategories extends HTMLElement {
  set categories(categories) {
    this._categories = categories;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._categories.forEach((category) => {
      this.innerHTML += `<span>${category.name}</span> `;
    });
  }
}
customElements.define('restaurant-categories', RestaurantCategories);
