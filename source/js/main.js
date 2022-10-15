import { todosData } from './data.js';
import { todoRender, setClickAddBtn, getTodoName, todosRemove, setClickFilters, changeStatistics } from './todo-item.js';


setClickAddBtn(() => {
   const todoName = getTodoName();

   todosData.todoAppend(todoName);
   showStatistics();

   todoRender(
      todoName,
      false, 
      todoName => {
         todosData.todoChangeChecked(todoName);
         showStatistics();
      }, 
      todoName => {
         todosData.todoRemove(todoName);
         showStatistics();
      }
   );
});

setClickFilters((checkValue) => {
   todosRemove();

   const newTodos = todosData.filterCheckingData(checkValue)

   newTodos.forEach(i => {
      todoRender(
         i.name,
         i.checked, 
         todoName => {
            todosData.todoChangeChecked(todoName);
            showStatistics();            
         }, 
         todoName => {
            todosData.todoRemove(todoName);
            showStatistics();            
         }
      );
   })
});

function showStatistics() {
   const todoActiveCount = todosData.todosArray.filter(i => i.checked === false).length;
   const todoCheckedCount = todosData.todosArray.filter(i => i.checked === true).length;

   changeStatistics(todoActiveCount, todoCheckedCount);
}
