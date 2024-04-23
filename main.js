import { XTodoList } from './components/x-todo-list';
import { XInput } from './components/x-xinput';

let $root = document.querySelector('#root');

let $input = document.querySelector('x-input');
let $add_button = document.querySelector('button');
let $todo_list = document.querySelector('x-todo-list');

$add_button.onclick = function(e) {
  let value = $input.get_value();
  if(!value) return;
  $todo_list.add_item(value);
  $input.clean();
}