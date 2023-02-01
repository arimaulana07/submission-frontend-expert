import './review-item';

class ReviewtList extends HTMLElement {
  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._reviews.forEach((review) => {
      const reviewItem = document.createElement('review-item');
      reviewItem.review = review;
      this.appendChild(reviewItem);
    });
  }
}

customElements.define('review-list', ReviewtList);
