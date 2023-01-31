/* eslint-disable no-param-reassign */
import RestaurantResource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import PostNewReview from '../../utils/post-new-review';
import { createRestaurantDetail } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <section id="restaurantDetail" class="restaurantDetail"></section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantResource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurantDetail');
    restaurantContainer.innerHTML += createRestaurantDetail(restaurant);

    // const favButton = document.querySelector('.favButton');
    // const icLove = document.querySelector('.favButton > i');
    // favButton.addEventListener('click', (e) => e.target.classList.toggle('favorited'));
    // icLove.addEventListener('click', () => favButton.classList.toggle('favorited'));
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

    const collapseElement = (className) => {
      console.log('clicked');
      const icCollapse = className.querySelector('.icCollapse');
      const itemMenu = className.querySelector('.itemMenu');
      className.classList.toggle('active');
      const originHeight = 40;
      if (className.clientHeight <= 90) {
        className.style.height = `${itemMenu.scrollHeight + 60}px`;
        icCollapse.classList.remove('fa-caret-down');
        icCollapse.classList.add('fa-caret-up');
      } else {
        className.style.height = `${originHeight}px`;
        icCollapse.classList.remove('fa-caret-up');
        icCollapse.classList.add('fa-caret-down');
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

    const foodsMenu = document.querySelector('.foodsMenu');
    foodsMenu.addEventListener('click', () => collapseElement(foodsMenu));

    const drinksMenu = document.querySelector('.drinksMenu');
    drinksMenu.addEventListener('click', () => collapseElement(drinksMenu));

    PostNewReview.init({
      formSubmit: document.querySelector('#formSubmit'),
      id: url.id,
      reviewWrapper: document.querySelector('.reviewItemWrapper'),
    });
  },
};

export default Detail;
