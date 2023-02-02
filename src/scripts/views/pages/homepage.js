import RestaurantResource from '../../data/restaurant-source';
// import { createRestaurantItemTemplate } from '../templates/template-creator';
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
    const createCustomTimeout = () => new Promise((resolve) => {
      setTimeout(() => {
        console.log('bla bla');
        resolve();
      }, 3000);
    });
    await createCustomTimeout();
    const restaurants = await RestaurantResource.listRestaurant();
    const listRestaurantsContainer = document.querySelector('restaurant-list');
    listRestaurantsContainer.restaurants = restaurants;
  },
};

export default Homepage;
