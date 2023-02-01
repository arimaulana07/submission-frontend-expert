/* eslint-disable no-param-reassign */
import RestaurantResource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import PostNewReview from '../../utils/post-new-review';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import '../../components/restaurant-categories';
import '../../components/restaurant-menu';
import '../../components/review-list';
import '../../components/review-item';
import { createRestaurantDetail, createLikeButtonTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <section id="restaurantDetail" class="restaurantDetail"></section>
        <div class="likeBtnWrapper"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantResource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurantDetail');
    restaurantContainer.innerHTML += createRestaurantDetail(restaurant);

    document.querySelector('.likeBtnWrapper').innerHTML += createLikeButtonTemplate();
    LikeButtonInitiator.init({
      likeButtonWrapper: document.querySelector('.likeBtnWrapper'),
      restaurant,
    });

    PostNewReview.init({
      formSubmit: document.querySelector('#formSubmit'),
      id: url.id,
      reviewList: document.querySelector('review-list'),
    });

    const RestaurantCategories = document.querySelector('restaurant-categories');
    RestaurantCategories.categories = restaurant.categories;

    const foodsMenu = document.querySelector('.foodsMenu');
    foodsMenu.menus = { menuCategory: 'Foods', listMenu: restaurant.menus.foods };

    const drinksMenu = document.querySelector('.drinksMenu');
    drinksMenu.menus = { menuCategory: 'Drinks', listMenu: restaurant.menus.drinks };

    const reviewList = document.querySelector('review-list');
    reviewList.reviews = restaurant.customerReviews;

    const contentShow = (content) => {
      const restaurantContents = document.querySelectorAll('.restaurantContent');
      restaurantContents.forEach((restaurantContent) => {
        restaurantContent.style.display = 'none';
      });

      if (content === 'menu') {
        restaurantContents[0].style.display = 'block';
      } else if (content === 'description') {
        restaurantContents[1].style.display = 'block';
      } else {
        restaurantContents[2].style.display = 'block';
      }
    };

    const contentNavItems = document.querySelectorAll('.contentNavItem');
    contentNavItems.forEach((navItem) => {
      navItem.addEventListener('click', (e) => {
        contentNavItems.forEach((item) => item.classList.remove('active'));
        e.target.classList.add('active');
        contentShow(e.target.id);
      });
    });
  },
};

export default Detail;
