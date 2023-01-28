import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '@fortawesome/fontawesome-free/css/all.css';
import data from '../DATA.json';
import additionalData from '../additional-data.json';

console.log('Hello Coders! :)');

const openNav = document.querySelector('#openNav');
const closeNavBtn = document.querySelector('#closeNav');
const navMenu = document.querySelector('.navMenu');
const mainElement = document.querySelector('main');
const closeBtnMenu = document.querySelector('#closePopup');
const popupMenuWrapper = document.querySelector('.popupMenuWrapper');
const body = document.querySelector('body');
const itemWrapper = document.querySelector('.itemWrapper');

const renderPopupMenu = (id) => {
  const menuItemWrapper = document.querySelector('.menuItemWrapper');
  menuItemWrapper.innerHTML = '';
  const restaurantName = data.restaurants.find((item) => item.id === id).name;
  menuItemWrapper.innerHTML = `<h4>${restaurantName}</h4>`;
  additionalData.menu.forEach((item) => {
    menuItemWrapper.innerHTML += `
      <div class="menuItem">
        <span class="menuName">
          ${item.name}
        </span>
        <span class="menuPrice">
          ${item.price}
        </span>
      </div>
    `;
  });
  popupMenuWrapper.classList.add('open');
};

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

const articles = document.querySelectorAll('article');
articles.forEach((article) => {
  const articleAction = document.getElementById(article.id);
  articleAction.addEventListener('keypress', (event) => {
    const btnId = event.target.querySelector('.btnMenu').id;
    if (event.key === 'Enter') {
      renderPopupMenu(btnId);
      body.style.overflow = 'hidden';

      const keyboardfocusableElements = document.querySelectorAll(
        'a[href], input, textarea, select, details, article, button:not(.closePopup)',
      );
      keyboardfocusableElements.forEach((item) => {
        item.setAttribute('tabindex', '-1');
      });

      event.stopPropagation();
    }
  });
});

const btnMenu = document.querySelectorAll('.btnMenu');
btnMenu.forEach((btn) => {
  const btnAction = document.getElementById(btn.id);
  btnAction.addEventListener('click', (event) => {
    renderPopupMenu(event.target.id);
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

openNav?.addEventListener('click', (event) => {
  navMenu.classList.add('open');
  event.stopPropagation();
});

closeNavBtn?.addEventListener('click', (event) => {
  navMenu.classList.remove('open');
  event.stopPropagation();
});

mainElement?.addEventListener('click', (event) => {
  navMenu.classList.remove('open');
  event.stopPropagation();
});

closeBtnMenu?.addEventListener('click', (event) => {
  popupMenuWrapper.classList.remove('open');
  body.style.overflow = 'auto';

  const keyboardfocusableElements = document.querySelectorAll(
    'a[href], input, textarea, select, details, article, button:not(.closePopup)',
  );
  keyboardfocusableElements.forEach((item) => {
    // eslint-disable-next-line no-unused-expressions
    item.tagName === 'ARTICLE' ? item.setAttribute('tabindex', '0') : item.removeAttribute('tabindex');
  });

  event.stopPropagation();
});
