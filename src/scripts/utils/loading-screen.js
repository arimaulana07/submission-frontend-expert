/* eslint-disable spaced-comment */
/* eslint-disable key-spacing */
import NProgress from 'nprogress';

const showRestaurantSkeleton = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="restaurantItemSkeleton">
        <div class="pictureRating">
          <div class="imgSkeleton"></div>
        </div>
        <h4>
          &nbsp;
        </h4>
        <p>
          &nbsp;
        </p>
        <div class="btnMenuSkeleton"> &nbsp; </div>
      </div>
    `;
  }
  return template;
};

const loadingTemplate = {
  '/detail/:id': `
    <div class="loading">
      <div class="lds-dual-ring"></div>
    </loading>
  `,

  '/': `
      <div class="heroSkeleton">
        <h2>
          A Place For All The Food Hunters
        </h2>
        <div class="heroImgSkeleton"></div>
      </div>
      <section id="listRestaurants" class="listRestaurant">
        <h2>
          Top List Restaurant
        </h2>
        <div class="restaurantListSkeleton">
          ${showRestaurantSkeleton(6)}
        </div>
      </section>
  `,

  '/like': `
    <section id="listRestaurants" class="listRestaurant">
      <h2>
        Your Liked Restaurant
      </h2>
      <div class="restaurantListSkeleton">
          ${showRestaurantSkeleton(3)}
      </div>
    </section>
  `,

  ldsRing: `
  <div class="loading">
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
  `,
};

const Loading = {
  init({ template }) {
    this._template = loadingTemplate[template];
    this._createLoadingTemplate();
  },

  _createLoadingTemplate() {
    const templateLoading = document.createElement('div');
    templateLoading.classList.add('skeletonLoading');
    templateLoading.setAttribute('id', 'loading-screen');

    templateLoading.innerHTML = this._template;
    NProgress.configure({
      speed: 200,
      showSpinner: false,
    });
    NProgress.start();
    return templateLoading;
  },

  _startLoading() {
    const body = document.querySelector('body');
    body.appendChild(this._createLoadingTemplate());
  },

  _stopLoading() {
    const loadingScreen = document.querySelector('#loading-screen');
    loadingScreen.remove();
    NProgress.done();
  },

  _stopLoadingWithErrorPopup() {
    const loadingScreen = document.querySelector('#loading-screen');
    loadingScreen.remove();
    NProgress.done();
    this._renderErrorPopup();
  },

  _renderErrorPopup() {
    const createPopup = document.createElement('div');
    createPopup.classList.add('errorPopupWrapper');
    createPopup.innerHTML += `
        <div class="popupError">
          <p>Oops, i think you let name field or review field empty</p> 
          <button> Close </button>
        </div> 
    `;
    const body = document.querySelector('body');
    body.appendChild(createPopup);
    createPopup.addEventListener('click', () => {
      createPopup.remove();
    });
  },
};

export default Loading;
