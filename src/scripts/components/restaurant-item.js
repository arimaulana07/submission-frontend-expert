import CONFIG from '../globals/config';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="pictureRating">
        <img src="${CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId}" alt="${this._restaurant.name} restaurant">
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
