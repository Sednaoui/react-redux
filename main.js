// close buttom and append to each card
let myNodelist = document.getElementsByTagName("li");
for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to close
let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

//add new card
function newTask() {
  event.preventDefault();
  let task = document.createElement("li");
  let addNewTaskInput = document.getElementById("addTaskID").value;
  let text = document.createTextNode(addNewTaskInput);
  task.className = "mycard";
  task.appendChild(text);
  task.contentEditable = "true";

  if (addNewTaskInput === "") {
    alert("Hey you! Don't try to submit an empty task :@");
  } else {
    document.getElementById("myListOfTasks").appendChild(task);
    addActivity(addNewTaskInput);
  }

  //make add task input to zero after submit
  // document.getElementById("addNewTaskInput").value = "";

  let spanClose = document.createElement("SPAN");
  let txtClose = document.createTextNode("\u00D7");
  spanClose.className = "close";
  spanClose.appendChild(txtClose);
  task.appendChild(spanClose);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }

  //add activity
  function addActivity(addNewTaskInput) {
    let activity = document.createElement("li");
    let textActivity = document.createTextNode(`Card "${addNewTaskInput}" has been created`);
    activity.appendChild(textActivity);
    document.getElementById("myListofActivity").appendChild(activity);

    let spanClose = document.createElement("SPAN");
    let txtClose = document.createTextNode("\u00D7");
    spanClose.className = "close";
    spanClose.appendChild(txtClose);
    activity.appendChild(spanClose);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      };
    }
  }
}
