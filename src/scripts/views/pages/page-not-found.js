const NotFound = {
  async render(message = 'Page Not Found') {
    return `
      <div class="pageNotFound" style="text-align: center;">
        <h1 class="pageNotFOund">${message}</h1>
      </div>
    `;
  },

  async afterRender() {
    return '';
  },
};

export default NotFound;
