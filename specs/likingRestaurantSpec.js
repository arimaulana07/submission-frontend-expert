/* eslint-disable no-undef */
import FavoriteRestaurant from '../src/scripts/data/favorite-restaurant';
import * as TestFactories from './helpers/testFactories';

describe('Liking A restaurant', () => {
  const addLikeButttonWrapper = () => {
    document.body.innerHTML = '<div class="likeBtnWrapper"></div>';
  };

  beforeEach(() => {
    addLikeButttonWrapper();
  });

  it('should show the like button if the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 });
    expect(document.querySelector('[aria-label="like-restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button if the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 });
    expect(document.querySelector('[aria-label="unlike-restaurant"]')).toBeFalsy();
  });

  it('should be able to like restaurant', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 });

    document.querySelector('#likeBtn').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurant.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurant.deleteRestaurant(1);
  });

  it('should not add a restaurant again when it\'s already liked', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 });
    await FavoriteRestaurant.putRestaurant({ id: 1 });
    document.querySelector('#likeBtn').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([{ id: 1 }]);
    FavoriteRestaurant.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenter({});
    document.querySelector('#likeBtn').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
  });
});
