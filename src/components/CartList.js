import { Component } from "../common/Component.js";

export class CartList extends Component {
  constructor(cartContext) {
    super();
    this.cartContext = cartContext;
    this.cartContext.subscribe(this.updateCart.bind(this));
  }

  updateCart(cartItems) {
    this.render();
  }

  render() {
    const cartList = document.createElement("div");
    cartList.className = "cart-list";
    cartList.innerHTML = ""; // Clear previous content

    const cartItems = this.cartContext.getCartItems();
    cartItems.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>$${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <button class="remove-from-cart-button">Remove</button>
      `;
      cartItem
        .querySelector(".remove-from-cart-button")
        .addEventListener("click", () => {
          this.cartContext.removeProduct(item.id);
        });
      cartList.appendChild(cartItem);
    });

    const totalItems = document.createElement("div");
    totalItems.className = "total-items";
    totalItems.textContent = `Total Items: ${this.cartContext.getTotalItems()}`;

    const totalPrice = document.createElement("div");
    totalPrice.className = "total-price";
    totalPrice.textContent = `Total Price: $${this.cartContext
      .getTotalPrice()
      .toFixed(2)}`;

    cartList.appendChild(totalItems);
    cartList.appendChild(totalPrice);

    return cartList;
  }
}
