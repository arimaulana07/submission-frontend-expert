import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '@fortawesome/fontawesome-free/css/all.css';
import swRegister from './utils/sw-register';
import App from './views/app';

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
