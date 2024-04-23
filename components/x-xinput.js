export class XInput extends HTMLElement {
  constructor(opts){
    super();

    this.innerHTML = `
      <input type="text" placeholder="Ingrese un item" autofocus>
    `

  }

  clean() {
    this.$input.value = '';
  }

  get_value() {
    return this.$input.value;
  }

  connectedCallback() {
    this.$input = this.querySelector('input');
  }
}
customElements.define('x-input', XInput);