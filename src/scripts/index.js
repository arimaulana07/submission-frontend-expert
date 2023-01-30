import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '@fortawesome/fontawesome-free/css/all.css';
import data from '../DATA.json';
import App from './views/app';

const body = document.querySelector('body');
const itemWrapper = document.querySelector('.itemWrapper');

data.restaurants.forEach((item, index) => {
  itemWrapper.innerHTML += `
    <article class="item" tabindex="0" id="article-${index}">
      <div class="pictureRating">
        <img src="${item.pictureId}" alt="picture of ${item.name} restaurant">
        <div class="rating">
          <i class="fa-solid fa-star"></i>&nbsp; ${item.rating}
        </div>
      </div>
      <h4>
        ${item.name}
      </h4>
      <p>
        <i class="fa-solid fa-location-dot"></i> ${item.city}
      </p>
      <button id="${item.id}" class="btnMenu">DETAIL</button>
    </article>
  `;
});

const btnMenu = document.querySelectorAll('.btnMenu');
btnMenu.forEach((btn) => {
  const btnAction = document.getElementById(btn.id);
  btnAction.addEventListener('click', (event) => {
    body.style.overflow = 'hidden';

    const keyboardfocusableElements = document.querySelectorAll(
      'a[href], input, textarea, select, details, article, button:not(.closePopup)',
    );
    keyboardfocusableElements.forEach((item) => {
      item.setAttribute('tabindex', '-1');
    });

    event.stopPropagation();
  });
});

const app = new App({
  openNav: document.querySelector('#openNav'),
  closeNav: document.querySelector('#closeNav'),
  navMenu: document.querySelector('.navMenu'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
