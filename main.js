function newTask() {
    event.preventDefault();
    let task = document.createElement('li');
    let addNewTaskInput = document.getElementById("addTaskID").value;
    let text = document.createTextNode(addNewTaskInput);
    task.className = "mycard"
    task.appendChild(text);
    
    if (addNewTaskInput === '') {
        alert("Hey you! Don't try to submit an empty task :@");
      } else {
    document.getElementById("myListOfTasks").appendChild(task);
      }
    
    //make add task input to zero after submit
    document.getElementById("addNewTaskInput").value = "";
}