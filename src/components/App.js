import { Component } from "../common/Component.js";
import { Header } from "../components/Header.js";
import { ProductList } from "../components/ProductList.js";
import { Footer } from "../components/Footer.js";
import { CartContext } from "../contexts/CartContext.js";
import { CartList } from "../components/CartList.js";

export class App extends Component {
  constructor(props) {
    super(props);
    this.cartContext = new CartContext();
  }

  render() {
    const app = document.createElement("div");
    app.className = "app";
    app.innerHTML = `
      <div class="container">
        <header></header>
        <main></main>
        <footer></footer>
      </div>
      <div id="cart-modal" class="modal">
        <div class="modal-content">
          <span class="close-btn">&times;</span>
          <div class="cart-list"></div>
        </div>
      </div>
    `;

    const header = new Header(this.cartContext);
    const productList = new ProductList(this.cartContext);
    const footer = new Footer();
    const cartList = new CartList(this.cartContext);

    app.querySelector("header").appendChild(header.render());
    productList.mount(app.querySelector("main"));
    app.querySelector("footer").appendChild(footer.render());
    app.querySelector(".cart-list").appendChild(cartList.render());

    document.body.appendChild(app);

    // Modal functionality
    const modal = document.getElementById("cart-modal");
    const closeBtn = document.querySelector(".close-btn");

    // Open modal when cart button is clicked
    document.querySelector(".cart-btn").addEventListener("click", () => {
      modal.style.display = "block";
      // Re-render the cart list to ensure it shows the latest items
      app.querySelector(".cart-list").innerHTML = "";
      app.querySelector(".cart-list").appendChild(cartList.render());
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    return app;
  }
}
