let todoList = [];

function addToDo() {
  let input = document.getElementById("todoInput");
  let todoItem = input.value;

  if (todoItem.trim() !== "") {
    todoList.push(todoItem);
    alert("Task added: " + todoItem);

    // Clear the input field
    input.value = "";
  }
}

function deleteLastEntry() {
  if (todoList.length > 0) {
    todoList.pop();
    alert("Last entry deleted.");
  }
}

function displayList() {
  let displayDiv = document.getElementById("todoList");
  displayDiv.innerHTML = ""; // Clear the existing content

  if (todoList.length > 0) {
    let listHtml = "<ol>";

    todoList.forEach((item, index) => {
      listHtml += "<li>" + item + "</li>";
    });

    listHtml += "</ol>";
    displayDiv.innerHTML = listHtml;
  }
}
