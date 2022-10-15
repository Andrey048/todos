import { controller } from './controller.js';



const app = {
   init: function() {
      this.main();
      this.event();
   },
   main: function() {},
   event: function() {
      const todoAddBtn = document.querySelector('#todoAddBtn');

      todoAddBtn.addEventListener('click', controller.onClickAdd);
   },
};

app.init();