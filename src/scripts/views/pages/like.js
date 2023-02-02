import FavoriteRestaurant from '../../data/favorite-restaurant';

const Like = {
  async render() {
    return `
    <section id="listRestaurants" class="listRestaurant">
        <h2>
          Your Liked Restaurant
        </h2>
        <restaurant-list></restaurant-list>
    </section>
  `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllRestaurant();
    const listRestaurantsContainer = document.querySelector('restaurant-list');
    listRestaurantsContainer.restaurants = restaurants;
  },
};

export default Like;
