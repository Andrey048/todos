export function todoRender(todoName, todoCheck, cb1, cb2) {
   const todoTmp = document.querySelector('#todoItemTemplate').content;
   const todoElement = todoTmp.cloneNode(true).querySelector('.item-todos');

   const todoElementName = todoElement.querySelector('.item-todos__name');
   const todoElementCheckBox = todoElement.querySelector('.item-todos__check-icon');
   const todoElementDelete = todoElement.querySelector('.item-todos__delete-btn');

   todoElementName.textContent = todoName;
   if (todoCheck) {
      onTodoCheck();
   }

   todoElementName.addEventListener('click', evt => {
      evt.preventDefault();

      cb1(todoName);
      onTodoCheck();
   });
   todoElementCheckBox.addEventListener('click', evt => {
      evt.preventDefault();

      cb1(todoName);
      onTodoCheck();
   });   
   todoElementDelete.addEventListener('click', evt => {
      evt.preventDefault();

      cb2(todoName);
      onTodoDelete();
   });

   function onTodoCheck() {
      const TODO_CHECKED_CLASS = 'item-todos--checked';

      todoElement.classList.toggle(TODO_CHECKED_CLASS);
   }
   function onTodoDelete() {
      todoElement.remove();
   }

   const todosContainer = document.querySelector('#todos-list-items');

   todosContainer.appendChild(todoElement);
}

export function setClickAddBtn(cb) {
   const todoAddBtn = document.querySelector('#todoAddBtn');

   todoAddBtn.addEventListener('click', (evt) => {
      evt.preventDefault();

      cb();
   });
}

export function getTodoName() {
   const todoField = document.querySelector('#todoField');
   const todoFieldValue = todoField.value;

   todoField.value = '';

   return todoFieldValue;
}

export function todosRemove() {
   const todosContainer = document.querySelector('#todos-list-items');

   todosContainer.innerHTML = '';
}

export function setClickFilters(cb) {
   const filtersElements = document.querySelectorAll('.filter-items__item');
   const CURRENT_FILTER_CLASS = 'filter-items__item--current';

   filtersElements.forEach(i => {
      i.addEventListener('click', (evt) => {
         evt.preventDefault();

         removeCurrentFilterClass();
         i.classList.add(CURRENT_FILTER_CLASS);

         if (i.dataset.type === 'all') {
            cb(null);
         } else if (i.dataset.type === 'active') {
            cb(false);
         } else if (i.dataset.type === 'done') {
            cb(true);
         }
      })
   })

   function removeCurrentFilterClass() {
      const currentFilterElement = document.querySelector(`.${CURRENT_FILTER_CLASS}`);

      currentFilterElement.classList.remove(CURRENT_FILTER_CLASS);
   }
}

export function changeStatistics(todoActiveCount, todoCheckedCount) {
   const activeCountElement = document.querySelector('.statistics__todo--active');
   activeCountElement.innerHTML = String(todoActiveCount);

   const checkingCountElement = document.querySelector('.statistics__todo--checked');
   checkingCountElement.innerHTML = String(todoCheckedCount);
}
