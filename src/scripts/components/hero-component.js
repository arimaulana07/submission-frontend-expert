class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2>
        A Place For All The Food Hunters
      </h2>
      <img src="./images/heros/hero-image_2.jpg" alt="banner">
    `;
  }
}

customElements.define('hero-component', HeroComponent);
