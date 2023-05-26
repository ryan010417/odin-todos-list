import { blankProjectLoad } from "./black-project";

//DOM manipulation to display the UI components
export function displayDefaultProject () {

    //DOM for the heading 
    const contentDiv = document.querySelector("#content");
    
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to my To-Do List App";
    // heading.classList.add("bold-text");
    contentDiv.appendChild(heading);

    //DOM for the body
    const projectInfoDiv = document.createElement("div");
    projectInfoDiv.textContent = blankProjectLoad().projectTitle;
    contentDiv.appendChild(projectInfoDiv);
    
}

//Module to display Form
export function displayForm () {
    document.querySelector("#add-todo-form").style.display = "block";
}

//Module to add item to checklist in the form
export function addItemToCheckList () {
    const addItem = document.querySelector("#add-to-checklist").value;
    
    if( addItem !== ""){
        const ul = document.querySelector(".todo-ul");
        const li = document.createElement("li");
        li.textContent = addItem;
        const span = document.createElement("span");
        span.className = "remove-checklist-item";
        const removeIcon = document.createTextNode("\u00D7");
        li.appendChild(span);
        span.appendChild(removeIcon);
        ul.appendChild(li);
        document.querySelector("#add-to-checklist").value = "";

        //Check for existing check list items
        if(document.querySelectorAll("li").length > 0){
            console.log("INSIDE MODULE IF.....", document.querySelectorAll("li").length);
            const nodeListCheckList = document.querySelectorAll("li");
            console.log(nodeListCheckList);

            //DOM to bind click event to each node in nodelist and remove node if clicked
            nodeListCheckList.forEach(checkListItem => {
                checkListItem.addEventListener("click", function removeItemFromCheckList() {
                    checkListItem.remove();
                });
            })
        }
    } else return;
}

export function clearForm () {
    const nodeListCheckList = document.querySelectorAll("li");
    for( let i =0; 1 < nodeListCheckList.length; i++){
        nodeListCheckList[i].remove();
    }
    document.querySelector("#add-todo").reset();
}