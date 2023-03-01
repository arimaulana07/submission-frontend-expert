/* eslint-disable no-undef */
const assert = require('assert');

Feature('Posting New Review');

Before(({ I }) => {
  I.amOnPage('/');
  I.wait(3);
  I.seeElement('restaurant-item a');
  const firstRestaurant = locate('restaurant-item a').first();
  I.click(firstRestaurant);
});

Scenario('Submit new review with empty name field and empty review text field should showing error popup', async ({ I }) => {
  I.waitForElement('#name', 3);
  I.seeElement('#name');
  I.fillField('#name', '');
  I.seeElement('#reviewText');
  I.fillField('#reviewText', '');

  I.seeElement('.btnSubmitReview');
  I.click('.btnSubmitReview');

  I.waitForElement('.errorPopupWrapper', 2);
  I.seeElement('.errorPopupWrapper');
  I.see('Oops, i think you let name field or review field empty', '.popupError p');
});

Scenario('Submit new review with empty name field should showing error popup', async ({ I }) => {
  I.waitForElement('#name', 3);
  I.seeElement('#name');
  I.fillField('#name', '');
  I.seeElement('#reviewText');
  I.fillField('#reviewText', 'Delicious!');

  I.seeElement('.btnSubmitReview');
  I.click('.btnSubmitReview');

  I.waitForElement('.errorPopupWrapper', 2);
  I.seeElement('.errorPopupWrapper');
  I.see('Oops, i think you let name field or review field empty', '.popupError p');
});

Scenario('Submit new review with empty text review field should showing error popup', async ({ I }) => {
  I.waitForElement('#name', 3);
  I.seeElement('#name');
  I.fillField('#name', 'Ari Maulana');
  I.seeElement('#reviewText');
  I.fillField('#reviewText', '');

  I.seeElement('.btnSubmitReview');
  I.click('.btnSubmitReview');

  I.waitForElement('.errorPopupWrapper', 2);
  I.seeElement('.errorPopupWrapper');
  I.see('Oops, i think you let name field or review field empty', '.popupError p');
});

Scenario('Submitting New Review', async ({ I }) => {
  I.waitForElement('#name', 3);
  I.seeElement('#name');
  I.fillField('#name', 'Ari Maulana');
  const nameField = await I.grabValueFrom('#name');

  I.seeElement('#reviewText');
  I.fillField('#reviewText', 'Delicious!');
  const reviewText = await I.grabValueFrom('#reviewText');

  I.seeElement('.btnSubmitReview');
  I.click('.btnSubmitReview');

  I.wait(2);

  I.seeElement('review-item');
  const nameFieldNew = await I.grabTextFrom(locate('review-item .reviewerName').last());
  const reviewTextNew = await I.grabTextFrom(locate('review-item .review').last());

  assert.strictEqual(nameField, nameFieldNew);
  assert.strictEqual(reviewText, reviewTextNew);
});
