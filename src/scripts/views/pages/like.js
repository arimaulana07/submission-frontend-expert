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
    if (restaurants.length < 1) {
      listRestaurantsContainer.innerHTML += '<h3 class="restaurantNotFound"> You didn\'t have any favorite restaurant yet! </h3>';
      return;
    }
    listRestaurantsContainer.restaurants = restaurants;
  },
};

export default Like;
