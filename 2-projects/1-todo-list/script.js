
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  while (list.hasChildNodes()) {
    list.removeChild(list.lastChild);
  }
  // console.log(list);
  todos.forEach( (theToDos) => {
  console.log("the to do list", theToDos);
  let el = elementsOfList(theToDos);
    list.appendChild(el);
  });

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}
 function elementsOfList(theToDos){
  let span = document.createElement("span");
  span.className="badge bg-primary rounded-pill"
  let CompletedButton= document.createElement("i");
  CompletedButton.className = "fa fa-check"
  CompletedButton.onclick = function(){
    todos.forEach( (getToDos) => {
      if(getToDos.task === theToDos.task){
        getToDos.completed = !getToDos.com
      }
      populateTodoList(todos);
    });
  }
 }
// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
// let todos = [
//   { task: "Wash the dishes", completed: false },
//   { task: "Do the shopping", completed: false },
// ];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
