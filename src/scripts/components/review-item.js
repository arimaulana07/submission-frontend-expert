class ReviewItem extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `
        <h2 class="reviewerName"> ${this._review.name} </h2>
        <p class="review">
            ${this._review.review}
        </p>
        <p class="reviewDate">
            ${this._review.date}
        </p>
    `;
  }
}

customElements.define('review-item', ReviewItem);
