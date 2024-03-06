
document.addEventListener("DOMContentLoaded", function() {
    const newToDoForm = document.getElementById("newTodoForm");
    const toDoList = document.getElementById('to-do-list')
    newToDoForm.addEventListener("submit", function (event) {
        let newToDo = document.createElement("li");
        newToDo.innerText = document.getElementById("task").value;
        // console.log(newToDo.innerText);
        toDoList.appendChild(newToDo);
        let removeButton = document.createElement('button');
        removeButton.innerText = "X"
        newToDo.appendChild(removeButton)
        let saveToDos = []
        ///localStorage.setItem('listName', )
    });
    toDoList.addEventListener("click", function(event) {
        const targetTag = event.target.tagName.toLowerCase()
        if (targetTag === 'li') {
            console.log(event.target.style.textDecoration);
            if (event.target.style.textDecoration === "none") {
                
                event.target.style.textDecoration = "line-through"
            } else if (event.target.style.textDecoration === "line-through"){
                event.target.style.textDecoration = "none";
            }   
            
        } else if (targetTag === 'button') {
            event.target.parentElement.remove();
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