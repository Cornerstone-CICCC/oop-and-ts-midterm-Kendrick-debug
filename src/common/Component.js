export class Component {
  constructor(props = {}) {
    this.props = props;
    this.element = null;
  }

  render() {
    throw new Error("Component should have a render() method!");
  }

  mount(container) {
    this.element = this.render();
    if (!(this.element instanceof Node)) {
      throw new Error("render() must return a DOM node");
    }
    container.appendChild(this.element);
  }

  update() {
    if (this.element) {
      this.element.replaceWith(this.render());
    }
  }
}
