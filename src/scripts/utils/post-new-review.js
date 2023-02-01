import RestaurantResource from '../data/restaurant-source';
// import { createDetailRestaurantReviewTemplate } from '../views/templates/template-creator';

const PostNewReview = {
  async init({ formSubmit, id, reviewList }) {
    this._formSubmit = formSubmit;
    this._reviewList = reviewList;
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
        this._formSubmit.reset();
        console.log('success', reviewResponse);
      } else {
        console.log('error', reviewResponse);
      }
    });
  },

  _renderNewPost(review) {
    const newReview = review.customerReviews[review.customerReviews.length - 1];
    const renderNewReview = document.querySelector('review-item');
    renderNewReview.review = newReview;
    this._reviewList.appendChild(renderNewReview);
  },
};

export default PostNewReview;
