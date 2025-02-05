import { Component } from "../common/Component.js";

export class ProductList extends Component {
  constructor(cartContext) {
    super();
    this.cartContext = cartContext;
    this.state = {
      products: [],
    };
  }

  async fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      this.state.products = products;
      this.update();
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return (
        text.substring(0, maxLength) +
        '... <a href="#" class="read-more">Read more</a>'
      );
    }
    return text;
  }

  handleReadMore(event) {
    event.preventDefault();
    const fullText = event.target.parentElement.getAttribute("data-full-text");
    event.target.parentElement.innerHTML = fullText;
  }

  render() {
    const productList = document.createElement("div");
    productList.className = "product-list";

    this.state.products.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.className = "product-item";
      const truncatedDescription = this.truncateText(product.description, 100);
      productItem.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p data-full-text="${product.description}">${truncatedDescription}</p>
        <p>$${product.price}</p>
        <button class="add-cart-btn">Add to Cart</button>
      `;
      productItem
        .querySelector(".add-cart-btn")
        .addEventListener("click", () => {
          this.cartContext.addProduct(product);
        });
      productItem
        .querySelector(".read-more")
        ?.addEventListener("click", this.handleReadMore);
      productList.appendChild(productItem);
    });

    return productList;
  }

  mount(container) {
    super.mount(container);
    this.fetchProducts();
  }
}
