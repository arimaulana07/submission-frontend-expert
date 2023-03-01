import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import swRegister from './utils/sw-register';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  openNav: document.querySelector('#openNav'),
  closeNav: document.querySelector('#closeNav'),
  navMenu: document.querySelector('.navMenu'),
  content: document.querySelector('main'),
  skipToContent: document.querySelector('#skipToContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
