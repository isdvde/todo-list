import { $create } from '../lib/utils';

export class XTodoList extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    `;

    this.$checkbox_template = `
      <td>
        <input type="checkbox">
      </td>
    `;

    this.$p_template = `
    <td>
    <p></p>
    </td>
    `;
    this.button_template = `
    <td>
    <button>Eliminar</button>
    </td>
     `;
    this.todo = [];
  }

  create_item() {
    return document.createElement("li");
  }

  td_wrap(el) {
    let $td = $create("td");
    $td.appendChild(el);
    return $td;
  }

  create_checkbox() {
    let $checkbox = $create("input");
    $checkbox.setAttrbute("type", "checkbox");
    return this.td_wrap($checkbox);
  }

  create_p() {
    let $p = $create('p');
    return this.td_wrap($p);
  }

  create_button() {
    let $button = $create('button');
    $button.textContent = 'Eliminar';
    return this.td_wrap($button);
  }

  add_item(item) {
    let $tr = $create('tr');
    $tr.appendChild(this.create_checkbox());
  }

  render() {
    if (!this.todo) return;
  }

  connectedCallback() {
    this.$list = this.querySelector(".todo-list");
    this.create_checkbox();
  }
}

customElements.define('x-todo-list', XTodoList), {extends: "table"};