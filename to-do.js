//JS is origional

document.addEventListener("DOMContentLoaded", function () {
    let todoForm = document.getElementById("newTodoForm");
    let todoList = document.getElementById("todoList"); // Corrected ID name
    let clearCacheButton = document.getElementById("clearCache");

    // Function to update localStorage with current to-do list
    function updateLocalStorage() {
        let todos = [];
        todoList.querySelectorAll('li').forEach(todoItem => {
            let todoText = todoItem.querySelector('span').innerText;
            let completed = todoItem.querySelector('span').style.textDecoration === "line-through";
            let files = [];
            todoItem.querySelectorAll('.file-link').forEach(fileLink => {
                files.push(fileLink.href);
            });
            todos.push({ text: todoText, completed: completed, files: files });
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    // Function to load todos from localStorage
    function loadTodos() {
        let storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            storedTodos.forEach(todo => {
                addTodoItem(todo.text, todo.completed, todo.files);
            });
        }
    }

    // Function to add a new todo item
    function addTodoItem(todoText, completed, files) {
        let newTodoText = document.createElement("span");
        newTodoText.innerText = todoText;
        if (completed) {
            newTodoText.style.textDecoration = "line-through";
        }

        let newTodo = document.createElement("li");
        newTodo.appendChild(newTodoText);

        // Attach files to the todo item
        if (files && files.length > 0) {
            files.forEach(file => {
                let fileLink = document.createElement("a");
                fileLink.classList.add('file-link');
                fileLink.href = file;
                fileLink.textContent = file.split('/').pop(); // Display file name instead of full path
                newTodo.appendChild(document.createElement("br")); // Add line break for better separation
                newTodo.appendChild(fileLink);
            });
        }

        // Create remove button but don't append it yet
        let removeButton = document.createElement("button");
        removeButton.innerText = "X";
        removeButton.style.display = completed ? "inline" : "none"; // Show remove button if completed

        // Function to toggle remove button visibility based on todo text decoration
        function toggleRemoveButtonVisibility() {
            removeButton.style.display = newTodoText.style.textDecoration === "line-through" ? "inline" : "none";
            updateLocalStorage(); // Update localStorage after todo text decoration changes
        }

        // Toggle remove button visibility when todo text decoration changes
        newTodoText.addEventListener("click", function() {

            if (newTodoText.style.textDecoration === "line-through") {
                newTodoText.style.textDecoration = "none";
            } else {
                newTodoText.style.textDecoration = "line-through";
            }
            toggleRemoveButtonVisibility()
        });

        // Add event listener for remove button to remove the todo item
        removeButton.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent the click event from bubbling up to the todo item
            newTodo.remove(); // Remove the todo item from the list
            updateLocalStorage(); // Update localStorage after an item is removed
        });

        // Append todo text and remove button to the todo item
        newTodo.appendChild(removeButton);

        // Append the new todo item to the todo list
        todoList.appendChild(newTodo);
    }

    // Function to handle form submission
    todoForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let todoText = document.getElementById("task").value.trim();
        if (todoText !== "") {
            addTodoItem(todoText, false, null); // Add new todo item with completed flag set to false and no attached files
            updateLocalStorage(); // Update localStorage after adding a new todo item
            todoForm.reset(); // Reset the form
        }
    });

    // Event listener for the 'Clear Cache' button
    clearCacheButton.addEventListener("click", function () {
        localStorage.clear(); // Clear localStorage
        todoList.innerHTML = ''; // Clear all todo list items from the DOM
    });

    // Load todos from localStorage when the page loads
    loadTodos();
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