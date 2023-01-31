import FavoriteRestaurant from '../../data/favorite-restaurant';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <section id="listRestaurants" class="listRestaurant">
        <h2>
          Your Liked Restaurant
        </h2>
        <div class="itemWrapper"></div>
    </section>
  `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllRestaurant();
    const restaurantsContainer = document.querySelector('.itemWrapper');

    restaurants.forEach((movie) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(movie);
    });
  },
};

export default Like;
