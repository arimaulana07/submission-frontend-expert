import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css'; 
import "@fortawesome/fontawesome-free/css/all.css";
import data from '../DATA.json';
import AdditionalData from '../additional-data.json';
console.log('Hello Coders! :)');

const openNav = document.querySelector('#openNav');
const closeNavBtn = document.querySelector('#closeNav');
const navMenu = document.querySelector('.navMenu');
const mainElement = document.querySelector('main');
const closeBtnMenu = document.querySelector('#closePopup')
const popupMenuWrapper = document.querySelector('.popupMenuWrapper');
const body = document.querySelector('body');
const itemWrapper = document.querySelector('.itemWrapper')

data.restaurants.forEach((item, index) => {
  itemWrapper.innerHTML += `
    <div class="item" id="${index}">
      <div class="pictureRating">
        <img src="${item.pictureId}" alt="">
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
      <button id="${item.id}" class="btnMenu">MENU</button>
    </div>
  `
});

const btnMenu = document.querySelectorAll('.btnMenu')
btnMenu.forEach(btn => {
  const btnAction = document.getElementById(btn.id);
  btnAction.addEventListener('click', event => {
    popupMenuWrapper.classList.add('open')
    body.style.overflow = "hidden";
    console.log(event.target.id) 
    event.stopPropagation();
  });
});

openNav?.addEventListener('click', event => {
  navMenu.classList.add('open')
  event.stopPropagation();
})

closeNavBtn?.addEventListener('click', event => {
  navMenu.classList.remove('open')
  event.stopPropagation();
})

mainElement?.addEventListener('click', event => {
  navMenu.classList.remove('open');
  event.stopPropagation();
});

closeBtnMenu?.addEventListener('click', event => {
  popupMenuWrapper.classList.remove('open')
  body.style.overflow = "auto"; 
  event.stopPropagation();
});

