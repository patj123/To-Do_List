//const toDoList2 = document.getElementById('to-do-list');
 const saveToDos = JSON.parse(localStorage.getItem("todos")) || [];

document.addEventListener("DOMContentLoaded", function() {

    const newToDoForm = document.getElementById("newTodoForm");
    const toDoList = document.getElementById('to-do-list');
    //submit function
    newToDoForm.addEventListener("submit", function (event) {
        for (let i = 0; i < saveToDos.length; i++) {
        let newToDo = document.createElement("li");
        newToDo.innerText = saveToDos[i].task;
        newToDo.isCompleted = saveToDos[i].isCompleted ? true : false
        toDoList.appendChild(newToDo);
    }
        let newToDo = document.createElement("li");
        newToDo.innerText = document.getElementById("task").value;
        // console.log(newToDo.innerText);
        saveToDos.push({task: newToDo.innerText, isCompleted: false});
        toDoList.appendChild(newToDo);
        let removeButton = document.createElement('button');
        removeButton.innerText = "X";
        newToDo.appendChild(removeButton);
        
        localStorage.setItem('todos', JSON.stringify(saveToDos))
    });
    toDoList.addEventListener("click", function(event) {
        const targetTag = event.target.tagName.toLowerCase();
        let clickedListItem = event.target
        if (targetTag === 'li') {
            console.log(event.target.style.textDecoration);
            if (event.target.style.textDecoration === "" || event.target.style.textDecoration === "none") {
               event.target.style.textDecoration = "line-through"
            } else if (event.target.style.textDecoration === "line-through"){
                event.target.style.textDecoration = "none";
                console.log(localStorage.getItem('todos').parse);
            }   
            
        } else if (targetTag === 'button') {
            event.target.parentElement.remove();
        }
        for (let i in saveToDos) {
            if (saveToDos[i].task === event.target.innerText) {
                saveToDos[i].isCompleted = !saveToDos[i].isCompleted
                localStorage.setItem('todos', JSON.stringify(saveToDos))
            }
        }
    })

})

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