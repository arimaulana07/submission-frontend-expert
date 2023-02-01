import RestaurantResource from '../../data/restaurant-source';
// import { createRestaurantItemTemplate } from '../templates/template-creator';
import '../../components/restaurant-list';

const Homepage = {
  async render() {
    // return `
    //   <section id="listRestaurants" class="listRestaurant">
    //     <h2>
    //       Top List Restaurant
    //     </h2>
    //     <div class="itemWrapper"></div>
    //   </section>
    // `;
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

    // const listRestaurantsContainer = document.querySelector('#listRestaurants > .itemWrapper');
    // restaurants.forEach((restaurant) => {
    //   listRestaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    // });
  },
};

export default Homepage;
