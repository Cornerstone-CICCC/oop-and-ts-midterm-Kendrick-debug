import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer = document.createElement("footer");
    footer.innerHTML = `
      <div class="footer-content">
        <div class="footer-section">
          <h3>Information</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Track Order</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Contact Us</h3>
          <form>
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-icons">
            <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <p>&copy; 2023 My Store. All rights reserved.</p>
    `;
    return footer;
  }
}
