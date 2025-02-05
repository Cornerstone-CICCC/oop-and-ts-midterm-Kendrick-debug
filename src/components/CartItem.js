import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(cartContext) {
    super();
    this.cartContext = cartContext;
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  handleRemoveFromCart(event) {
    const cartItem = event.target.closest(".cart-item");
    const productId = cartItem.getAttribute("data-product-id");
    cartItem.remove();
    this.cartContext.removeProduct(productId);
  }

  render() {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h2>Your Cart</h2>
        <div class="cart-list">
          ${this.cartContext.products
            .map(
              (product) => `
            <div class="cart-item" data-product-id="${product.id}">
              <img src="${product.image}" alt="${product.title}" />
              <h3>${product.title}</h3>
              <p>$${product.price}</p>
              <button class="remove-from-cart-button">Remove from Cart</button>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;

    modal.querySelectorAll(".remove-from-cart-button").forEach((button) => {
      button.addEventListener("click", this.handleRemoveFromCart);
    });

    modal.querySelector(".close-btn").addEventListener("click", () => {
      modal.style.display = "none";
    });

    return modal;
  }
}
