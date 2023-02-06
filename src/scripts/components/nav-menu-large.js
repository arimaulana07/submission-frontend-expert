class NavMenuLarge extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML += `
        <ul>
            <li>
              <a id="homepage" class="home" href="#/"> HOME </a>
            </li>
            <li>
              <a id="favorite" class="fav" href="#/like"> FAVORITE </a>
            </li>
            <li class="about">
              <a id="about" class="about" href="https://www.instagram.com/__arimaulana/?hl=id"> ABOUT ME </a>
            </li>
        </ul>
    `;
  }
}

customElements.define('nav-menu-large', NavMenuLarge);
