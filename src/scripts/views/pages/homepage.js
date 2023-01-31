import RestaurantResource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Homepage = {
  async render() {
    return `
      <section id="listRestaurants" class="listRestaurant">
        <h2>
          Top List Restaurant
        </h2>
        <div class="itemWrapper"></div>
      </section>
    `;
  },

  async afterRender() {
    const hero = document.createElement('div');
    hero.classList.add('hero');
    hero.innerHTML = `
      <h2>
        A Place For All The Food Hunters
      </h2>
      <img src="./images/heros/hero-image_2.jpg" alt="banner">
    `;

    const body = document.querySelector('header').parentNode;
    const main = document.querySelector('main');
    body.insertBefore(hero, main);
    const restaurants = await RestaurantResource.listRestaurant();
    const listRestaurantsContainer = document.querySelector('#listRestaurants > .itemWrapper');
    restaurants.forEach((restaurant) => {
      listRestaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    const btnMenus = document.querySelectorAll('.btnMenu');
    btnMenus.forEach((btnMenu) => {
      btnMenu.addEventListener('click', () => {
        hero.remove();
      });
    });
  },
};

export default Homepage;
