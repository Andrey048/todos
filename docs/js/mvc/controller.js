import { model } from './model.js';



export const controller = {
   onClickAdd: function(evt) {
      evt.preventDefault();

      const todoName = controller.getTodoName();

      model.appendTodo(todoName);
   },
   getTodoName: function() {
      const todoField = document.querySelector('#todoField');
      const todoFieldValue = todoField.value;

      todoField.value = '';

      return todoFieldValue;
   },
   todoToggleCheck: function(todoName) {
      console.log(todoName);

      model.todoChangeChecked(todoName);
   },
};