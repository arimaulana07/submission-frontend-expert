/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurant from '../../src/scripts/data/favorite-restaurant';

const createLikeButtonPresenter = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonWrapper: document.querySelector('.likeBtnWrapper'),
    restaurant,
    FavoriteRestaurant,
  });
};

export { createLikeButtonPresenter };
