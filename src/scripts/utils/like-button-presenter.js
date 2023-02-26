import { createLikeButtonTemplate } from '../views/templates/template-creator';
import Loading from './loading-screen';

const LikeButtonPresenter = {
  async init({ likeButtonWrapper, restaurant, FavoriteRestaurant }) {
    this._likeButtonWrapper = likeButtonWrapper;
    this._restaurant = restaurant;
    this._favoriteRestaurant = FavoriteRestaurant;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderLikeBtn({
        data: id,
        action: 'deleteRestaurant',
        className: 'favorited',
        ariaLabel: 'unlike-restaurant',
      });
    } else {
      this._renderLikeBtn({
        data: this._restaurant,
        action: 'putRestaurant',
        className: 'favorite',
        ariaLabel: 'like-restaurant',
      });
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderLikeBtn({
    data,
    action,
    className,
    ariaLabel,
  }) {
    this._likeButtonWrapper.innerHTML = createLikeButtonTemplate(className, ariaLabel);
    const likeBtn = document.querySelector('.likeBtn');
    likeBtn.addEventListener('click', async () => {
      Loading.init({ template: 'dualRing' });
      Loading._startLoading();
      await this._favoriteRestaurant[action](data);
      Loading._stopLoading();
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
