import { createTodo } from './create-todo';
import { blankProjectLoad } from './black-project';
import { displayDefaultProject, displayForm, addItemToCheckList, clearForm } from './dom-man.js'
// import './styles.css';
//Call a blank project on load
blankProjectLoad();

//Call DOM Manipulation module to control UI
// displayDefaultProject();

//Click event module HERE for todo and project creations
let clickEventModule = (function () {
    
    //Click event to display the form
    const todoForm = document.querySelector(".add-todo-btn");
    todoForm.addEventListener("click", displayForm);

    //Click event to add item to the checklist of the form
    const addItem = document.querySelector(".add-to-checklist");
    addItem.addEventListener("click", addItemToCheckList);

    //Click event to reset form
    const resetForm = document.querySelector(".reset-btn");
    resetForm.addEventListener("click", clearForm);

})();


//Call create-todo.js module file and apply some objects/properties 
const myToDo = createTodo();
const myToDo2 = createTodo();
console.log();
console.log();