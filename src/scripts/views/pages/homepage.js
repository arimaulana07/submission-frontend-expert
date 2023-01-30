import RestaurantResource from '../../data/restaurant-source';

const Homepage = {
  async render() {
    return `
        <h1>Home Page <h1>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantResource.listRestaurant();
    console.log(restaurants);
  },
};

export default Homepage;
