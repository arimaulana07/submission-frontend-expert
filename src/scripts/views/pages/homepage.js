import RestaurantResource from '../../data/restaurant-source';
import '../../components/restaurant-list';

const Homepage = {
  async render() {
    return `
      <section id="listRestaurants" class="listRestaurant">
         <h2>
           Top List Restaurant
         </h2>
        <restaurant-list></restaurant-list>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantResource.listRestaurant();
    const listRestaurantsContainer = document.querySelector('restaurant-list');
    listRestaurantsContainer.restaurants = restaurants;
  },
};

export default Homepage;
