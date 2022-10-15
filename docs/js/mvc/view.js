import { controller } from './controller.js';



export const view = {
   todoRender: function(name) {
      const todoTmp = document.querySelector('#todoItemTemplate').content;
      const todoElement = todoTmp.cloneNode(true);

      const todoElementName = todoElement.querySelector('.item-todos__name');
      const todoElementCheckBox = todoElement.querySelector('.item-todos__check-icon');
      const todoElementDelete = todoElement.querySelector('.item-todos__delete-btn');

      todoElementName.textContent = name;
      todoElement.querySelector('.item-todos').addEventListener('click', (evt) => {
         if (evt.target === todoElementName || evt.target === todoElementCheckBox) {
            controller.todoToggleCheck(name);
         }
      });

      const todosContainer = document.querySelector('#todos-list-items');

      todosContainer.appendChild(todoElement);
   },
   todoToggleChekedClass: function(todo) {
      const checkedClass = 'item-todos--checked';

      todo.classList.toggle(checkedClass);
   }
};