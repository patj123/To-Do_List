//JS is origional

// game plan

// make a function to
document.addEventListener("DOMContentLoaded", function() {
    let todoForm = document.getElementById("newTodoForm"); // This is getting hold on form
    function updateLocalStorage() {
        let todos = [];
        todoList.querySelectorAll('span').forEach(todo => {
            todos.push(todo.innerText);
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function loadTodos() {
        let storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            storedTodos.forEach(todoText => {
                addTodoItem(todoText);
            });
        }
    }

    // Function to add a new todo item
    function addTodoItem(todoText) {
        let removeButton = document.createElement("button");
        removeButton.innerText = "X";

        let newTodoText = document.createElement("span");
        newTodoText.innerText = todoText;

        let newTodo = document.createElement("li");
        newTodo.appendChild(newTodoText);
        newTodo.appendChild(removeButton);

        todoList.appendChild(newTodo);
    }

    // Function to handle click events on todo items and remove buttons
    todoForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let todoText = document.getElementById("task").value.trim();
        if (todoText !== "") {
            addTodoItem(todoText);
            updateLocalStorage(); // Update localStorage after adding a new item
            todoForm.reset();
        }
    });

    // Function to handle click events on todo items and remove buttons
    todoList.addEventListener("click", function (event) {
        if (event.target.tagName.toLowerCase() === "li" || event.target.tagName.toLowerCase() === "span") {
            let listItem = event.target.tagName.toLowerCase() === "li" ? event.target : event.target.parentNode;
            let todoText = listItem.children[0];
            todoText.style.textDecoration = todoText.style.textDecoration === "line-through" ? "none" : "line-through";
            let removeButton = listItem.children[1];
            removeButton.style.display = todoText.style.textDecoration === "line-through" ? "inline" : "none";
            updateLocalStorage(); // Update localStorage after a todo item is clicked
        } else if (event.target.tagName.toLowerCase() === "button") {
            event.target.parentNode.remove();
            updateLocalStorage(); // Update localStorage after an item is removed
        }
    });

    // Event listener for the 'Clear Cache' button
    clearCacheButton.addEventListener("click", function () {
        localStorage.clear(); // Clear localStorage
        todoList.innerHTML = ''; // Clear all todo list items from the DOM
    });
    loadTodos()
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