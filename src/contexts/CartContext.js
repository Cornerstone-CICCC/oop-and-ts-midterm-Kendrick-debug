export class CartContext {
  constructor() {
    this.cartItems = [];
    this.subscribers = [];
  }

  subscribe(callback) {
    this.subscribers.push(callback);
  }

  notify() {
    this.subscribers.forEach((callback) => callback(this.cartItems));
  }

  addProduct(product) {
    const existingProduct = this.cartItems.find(
      (item) => item.id === product.id
    );
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.notify();
  }

  removeProduct(productId) {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    this.notify();
  }

  getCartItems() {
    return this.cartItems;
  }

  getTotalItems() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
