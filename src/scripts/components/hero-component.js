class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2>
        A Place For All The Food Hunters
      </h2>
      <picture>
        <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
        <source media="(max-width: 800px)" srcset="./images/heros/hero-image_2-medium.jpg">
        <img src="./images/heros/hero-image_2-large.jpg" alt="banner">
      </picture>
    `;
  }
}

customElements.define('hero-component', HeroComponent);
