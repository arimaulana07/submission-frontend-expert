import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css'; 
import "@fortawesome/fontawesome-free/css/all.css";
console.log('Hello Coders! :)');

const openNavBtn = document.querySelector('#openNav');
const closeNavBtn = document.querySelector('#closeNav');
const navMenu = document.querySelector('.navMenu');
const mainElement = document.querySelector('main');

openNavBtn.addEventListener('click', () => {
  navMenu.classList.add('open')
})

closeNavBtn.addEventListener('click', () => {
  navMenu.classList.remove('open')
})

mainElement.addEventListener('click', event => {
  navMenu.classList.remove('open');
  event.stopPropagation();
});