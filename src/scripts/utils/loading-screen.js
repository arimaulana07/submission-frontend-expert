import NProgress from 'nprogress';

const loadingTemplate = {
  dualRing: `
    <div class="lds-dual-ring"></div>
  `,
  ldsRing: `
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  `,
};

const Loading = {
  init({ template }) {
    this._template = loadingTemplate[template];
    this._createLoadingTemplate();
  },

  _createLoadingTemplate() {
    const templateLoading = document.createElement('div');
    templateLoading.classList.add('loading');
    templateLoading.setAttribute('id', 'loading-screen');
    if (this._customStyle) {
      templateLoading.style.opacity = this._customStyle.val;
    }

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
