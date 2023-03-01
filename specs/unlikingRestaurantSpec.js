/* eslint-disable no-undef */
import FavoriteRestaurant from '../src/scripts/data/favorite-restaurant';
import * as TestFactories from './helpers/testFactories';

const addLikeButttonWrapper = () => {
  document.body.innerHTML = '<div class="likeBtnWrapper"></div>';
};

describe('Unliking a Restaurant', () => {
  beforeEach(async () => {
    addLikeButttonWrapper();
    await FavoriteRestaurant.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurant.deleteRestaurant(1);
  });

  it('Should display unlike button when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 });
    expect(document.querySelector('[aria-label="unlike-restaurant"]')).toBeTruthy();
  });

  it('Should not display like button when restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 });
    expect(document.querySelector('[aria-label="like-restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 });
    document.querySelector('[aria-label="unlike-restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not on the list', async () => {
    await TestFactories.createLikeButtonPresenter({ id: 1 });
    await FavoriteRestaurant.deleteRestaurant(1);
    document.querySelector('[aria-label="unlike-restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
  });
});
