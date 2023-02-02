const NotFound = {
  async render(message) {
    return `
      <div class="pageNotFound">
        <h1 class="pageNotFOund">${message}</h1>
      </div>
    `;
  },
};

export default NotFound;
