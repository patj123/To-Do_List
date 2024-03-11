//JS is origional

document.addEventListener("DOMContentLoaded", function() {

    const clearTodosButton = document.getElementById('clearTodos');

    const toDoList = document.getElementById('to-do-list');
    let saveToDos = JSON.parse(localStorage.getItem("todos")) || [];
    for (let i = 0; i < saveToDos.length; i++) {
        let newToDo = document.createElement("li"); // creating a 'li' element
        newToDo.innerText = saveToDos[i].task; // setting the value of 'task'
        newToDo.isCompleted = saveToDos[i].isCompleted ? true : false; // setting the value of 'isCompleted'
        toDoList.appendChild(newToDo);
    }

    const newToDoForm = document.getElementById("newTodoForm");
    //submit function
    newToDoForm.addEventListener("submit", function (event) {
        //  This method is particularly useful in form handling, link navigation, and other interactive web behaviors 
        // where the developer wants to define custom functionality without triggering the browser's default behavior.
        // in this case to prevent a form from submitting to the server so that you can perform validation or AJAX requests instead
        event.preventDefault();

        let newToDo = document.createElement("li");
        newToDo.innerText = document.getElementById("task").value;
        // console.log(newToDo.innerText);
        saveToDos.push({task: newToDo.innerText, isCompleted: false});
        localStorage.setItem('todos', JSON.stringify(saveToDos));

        toDoList.appendChild(newToDo);

        // the Remove Button to remove speific things from the list
        //let removeButton = document.createElement('button');
        //removeButton.innerText = "X";
        //newToDo.appendChild(removeButton); // Adding to the List(li)
        //clearing the textbox

        newToDoForm.reset();
    });
    toDoList.addEventListener("click", function(event) {
        const targetTag = event.target.tagName.toLowerCase();
        let clickedListItem = event.target; // This is new code
        // console.log(event.target)
        if (targetTag === 'li') {
            let removeButton = document.createElement('button');        
            removeButton.innerText = "X";
            //console.log(removeButton)
            //console.log(event.target.style.textDecoration);
            if (event.target.style.textDecoration === "" || event.target.style.textDecoration === "none") {
                event.target.style.textDecoration = "line-through";
                 clickedListItem.appendChild(removeButton); 
                // This is to update the localStorage
                for (let i = 0; i < saveToDos.length; i++) {
                    tempClickedListItem = (clickedListItem.innerText).slice(0, -1);  // to remove the 'X' from the end
                    saveToDos = saveToDos.filter(todo => todo.task !== tempClickedListItem);
                    localStorage.setItem('todos', JSON.stringify(saveToDos));
                    // Ends the update of localStorage
                 }
        } else if (event.target.style.textDecoration === "line-through"){
            //removes line through if you click on it again
            event.target.style.textDecoration = "none";
            //when line is removed, then remove button
            console.log(clickedListItem.parentNode);

            clickedListItem.parentNode.remove(); 
            // console.log(clickedListItem.removeElement(removeButton));
            //console.log(JSON.parse(localStorage.getItem('todos')));
        } 
            
        } else if (targetTag === 'button') {
            event.target.parentElement.remove();
            for (let i = 0; i < saveToDos.length; i++) {
                if (saveToDos[i].task === clickedListItem.innerText) {
                    saveToDos.splice(i, 1);
                }
            }
        }
        
        /* if (event.target.style.textDecoration === 'line-through') {
            let removeButton = document.createElement('button');
            removeButton.innerText = "X";
        } else {
            
        } */
    });

        // Event listener for the Clear Todos button
clearTodosButton.addEventListener('click', function() {
    // Clearing localStorage
    localStorage.clear();

    while (toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild);
    }

    // Since localStorage is cleared, the the to-dos array is reset
    saveToDos.length = 0;
    });
});



// addEventListener 
// is a method used in JavaScript 
// to attach an event handler to 
// a specified element without overwriting
// existing event handlers. You can specify the type 
// of event to listen for (e.g., 'click', 'mouseover', etc.),
//  and define a function to be called whenever the specified e
//  vent fires on the element. This allows for more flexible 
//  event handling and is a fundamental part of working with 
//  the Document Object Model (DOM) in web development.