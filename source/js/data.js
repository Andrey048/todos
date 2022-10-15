export let todosData = {
   todosArray: [],
   todoAppend: function(todoName) {
      this.todosArray.push({
         name: todoName,
         checked: false,
      });
   },
   todoChangeChecked: function(todoName) {
      const searchTodoIndex = this.todosArray.findIndex(i => i.name === todoName);

      this.todosArray[searchTodoIndex].checked = !this.todosArray[searchTodoIndex].checked;
   },
   todoRemove: function(todoName) {
      this.todosArray = this.todosArray.filter(i => i.name !== todoName);
   },
   filterCheckingData: function(checkValue) {
      if (checkValue === null) {
         return this.todosArray;
      } else if (checkValue === false) {
         return this.todosArray
            .filter(i => i.checked === false);
      } else if (checkValue === true) {
         return this.todosArray
            .filter(i => i.checked === true);
      }
   }
}