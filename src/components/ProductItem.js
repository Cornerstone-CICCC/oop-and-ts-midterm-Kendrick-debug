import { Component } from "../common/Component.js";

export class ProductListItem extends Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.handleReadMore = this.handleReadMore.bind(this);
  }

  handleAddToCart() {
    this.props.cartContext.addProduct(this.props.product);
  }

  handleRemoveFromCart(event) {
    const cartItem = event.target.closest(".cart-item");
    cartItem.remove();
    this.props.cartContext.removeProduct(this.props.product.id);
  }

  handleReadMore(event) {
    event.preventDefault();
    const fullText = event.target.parentElement.getAttribute("data-full-text");
    event.target.parentElement.innerHTML = fullText;
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

  render() {
    const product = document.createElement("div");
    product.className = "product-item";
    const truncatedDescription = this.truncateText(
      this.props.product.description,
      100
    );
    product.innerHTML = `
      <img src="${this.props.product.image}" alt="${this.props.product.title}" />
      <h3>${this.props.product.title}</h3>
      <p>$${this.props.product.price}</p>
      <p data-full-text="${this.props.product.description}">${truncatedDescription}</p>
      <button class="add-cart-btn">Add to Cart</button>
    `;

    product
      .querySelector(".add-cart-btn")
      .addEventListener("click", this.handleAddToCart);
    product
      .querySelector(".read-more")
      ?.addEventListener("click", this.handleReadMore);

    return product;
  }
}
