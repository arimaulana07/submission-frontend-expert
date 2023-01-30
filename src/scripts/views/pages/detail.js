import RestaurantResource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
        <h1>Detail Page <h1>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resturant = await RestaurantResource.detailRestaurant(url.id);
    console.log(resturant);
  },
};

export default Detail;
