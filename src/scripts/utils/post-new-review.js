import RestaurantResource from '../data/restaurant-source';
import { createDetailRestaurantReviewTemplate } from '../views/templates/template-creator';

const PostNewReview = {
  async init({ formSubmit, id, reviewWrapper }) {
    this._formSubmit = formSubmit;
    this._reviewWrapper = reviewWrapper;
    this._id = id;
    await this._postReview();
  },

  async _postReview() {
    this._formSubmit.addEventListener('submit', async (e) => {
      e.preventDefault();
      const review = {
        id: this._id,
        name: document.querySelector('#name').value,
        review: document.querySelector('#reviewText').value,
      };
      const reviewResponse = await RestaurantResource.postReview(review);
      if (!reviewResponse.error) {
        this._renderNewPost(reviewResponse);
        console.log('success', reviewResponse);
      } else {
        console.log('error', reviewResponse);
      }
    });
  },

  _renderNewPost(review) {
    const lastReview = review.customerReviews[review.customerReviews.length - 1];
    const newReview = createDetailRestaurantReviewTemplate(lastReview);
    this._reviewWrapper.innerHTML += newReview;
  },
};

export default PostNewReview;
