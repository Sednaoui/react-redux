import React from "react";
import Card from './Card'
import "./List.css";

class List extends React.Component {
  render() {
    return (
      <div class="myMainContainer">
        <div class="myContainer myList">
          <h3> List1</h3>
            <Card />
        </div>
      </div>
    );
  }
}

export default List;
