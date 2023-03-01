import CONFIG from '../globals/config';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="pictureRating">
        <picture>
          <source media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_URL_SMALL + this._restaurant.pictureId}">
          <source media="(max-width: 800px)" data-srcset="${CONFIG.BASE_IMAGE_URL_MEDIUM + this._restaurant.pictureId}">
          <img class="lazyload" data-sizes: auto; data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + this._restaurant.pictureId}" alt="${this._restaurant.name} restaurant">
        </picture>
        <div class="rating">
          <i class="fa-solid fa-star"></i>&nbsp; ${this._restaurant.rating}
        </div>
    </div>
    <h4>
        ${this._restaurant.name}
    </h4>
    <p>
        <i class="fa-solid fa-location-dot"></i> ${this._restaurant.city}
    </p>
    <a href="/#/detail/${this._restaurant.id}" id="${this._restaurant.id}" class="btnMenu">DETAIL</a>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
