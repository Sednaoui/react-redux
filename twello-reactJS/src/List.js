import React from "react";
import "./List.css";

class List extends React.Component {
  render() {
    return (
      <div class="myMainContainer">
        <div class="myContainer myList">
          <h3> List1</h3>
          <ul id="myListOfTasks" class="scrollList">
            <li class="mycard">task1</li>
            <li class="mycard">task2</li>
            <li class="mycard">task3</li>
            <li class="mycard">task3</li>
            <li class="mycard">task3</li>
            <li class="mycard">task3</li>
            <li class="mycard">task3</li>
            <li class="mycard">task3</li>
            <li class="mycard">task5</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default List;
