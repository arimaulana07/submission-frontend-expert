/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('Showing empty liked Restaurant', ({ I }) => {
  I.see('You didn\'t have any favorite restaurant yet!', '.restaurantNotFound');
});

Scenario('Liking one Restaurant', async ({ I }) => {
  I.see('You didn\'t have any favorite restaurant yet!', '.restaurantNotFound');

  I.amOnPage('/');
  I.wait(3);

  I.seeElement('restaurant-item a');
  const firstRestaurant = locate('restaurant-item a').first();
  const firstRestaurantTitle = await I.grabTextFrom(locate('restaurant-item h4').first());
  I.click(firstRestaurant);

  I.waitForElement('#likeBtn', 3);
  I.seeElement('#likeBtn');
  I.click('#likeBtn');

  I.amOnPage('/#/like');
  I.seeElement('restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('restaurant-item h4');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one Restaurant', async ({ I }) => {
  I.see('You didn\'t have any favorite restaurant yet!', '.restaurantNotFound');

  I.amOnPage('/');
  I.wait(3);

  I.seeElement('restaurant-item a');
  const firstRestaurant = locate('restaurant-item a').first();
  I.click(firstRestaurant);

  I.waitForElement('#likeBtn', 3);
  I.seeElement('#likeBtn');
  I.click('#likeBtn');

  I.amOnPage('/#/like');
  I.seeElement('restaurant-item');
  I.click('restaurant-item a');

  I.waitForElement('#likeBtn', 3);
  I.seeElement('#likeBtn');
  I.click('#likeBtn');

  I.amOnPage('/#/like');
  I.see('You didn\'t have any favorite restaurant yet!', '.restaurantNotFound');
});
