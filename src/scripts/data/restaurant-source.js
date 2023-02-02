import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantResource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    if (responseJson.error) {
      return responseJson;
    }
    return responseJson.restaurant;
  }

  static async postReview(review) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      body: JSON.stringify(review),
      headers: {
        'Content-type': 'application/json; application/x-www-form-urlencoded',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantResource;
