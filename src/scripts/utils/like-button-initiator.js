import FavoriteRestaurant from '../data/favorite-restaurant';
import { createLikeButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonWrapper, restaurant }) {
    this._likeButtonWrapper = likeButtonWrapper;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLikeBtn({ data: id, action: 'deleteRestaurant', className: 'favorited' });
    } else {
      this._renderLikeBtn({ data: this._restaurant, action: 'putRestaurant', className: 'favorite' });
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderLikeBtn({ data, action, className }) {
    this._likeButtonWrapper.innerHTML = createLikeButtonTemplate(className);
    const likeBtn = document.querySelector('.likeBtn');
    likeBtn.addEventListener('click', async () => {
      await FavoriteRestaurant[action](data);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
