import React from "react";
import "./List.css";
import "./activity.css";

const Activity = () => {
  return (
    <div className="myContainer myActivity">
      <div className="addList" action=""></div>
      <h3>My activity</h3>
      <ul id="myListofActivity" className="scrollList">
        <li>Task 1 has been created</li>
        <li>Task 2 has been created</li>
        <li>Task 3 has been created</li>
      </ul>
    </div>
  );
};

export default Activity;
