import { Component } from "../common/Component.js";

export class Header extends Component {
  constructor(cartContext) {
    super();
    this.cartContext = cartContext;
    this.cartContext.subscribe(this.updateCartCount.bind(this));
  }

  updateCartCount() {
    const cartCount = document.querySelector(".cart-count");
    if (cartCount) {
      cartCount.textContent = this.cartContext.getTotalItems();
    }
  }

  toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  }

  render() {
    const header = document.createElement("header");
    header.innerHTML = `
    
        <h1 class="store-name">TARGET</h1>
    
      <nav class="nav-links">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div class="burger-menu" onclick="document.querySelector('.nav-links').classList.toggle('active')">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <div class="cart-container">
        <button class="cart-btn">
          <span class="cart-icon">🛒</span>
          <span class="cart-count">${this.cartContext.getTotalItems()}</span>
        </button>
      </div>
    `;
    return header;
  }
}
