import { view } from './view.js';



export const model = {
   todosArray: [],
   appendTodo: function(todoName) {
      if (isUniqueName()) {
         this.todosArray.push({
            name: todoName,
            cheked: false,
         })

         view.todoRender(todoName);
      }

      function isUniqueName() {
         return model.todosArray.every(i => i.name !== todoName)
      }
   },
   todoChangeChecked: function(todoName) {
      const todosArrayElement = this.todosArray.find(i => i.name === todoName);

      todosArrayElement.checked = !todosArrayElement.checked;

      view.todoToggleChekedClass(todoName);

      console.log(todosArray);
   }
};