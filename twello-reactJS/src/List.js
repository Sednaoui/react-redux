import React from "react";
import Card from "./Card";
import "./List.css";
import { store } from "./index";
import { ADD_TASK } from "./Actions/actionCreator";
import PropTypes from "prop-types";
import addTaskReducer from "../src/Reducers/addTaskReducer";
import { connect } from "react-redux";
import { addTask } from "./Actions/actionCreator";

class List extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   title: this.props.title,
    //   cardDescription: ["Task1", "Task2"]
    // };
  }

  render() {
    const shortid = require("shortid");
    let input;
    return (
      <div className="myMainContainer">
        <div className="myContainer myList">
          <h3>List Name</h3>
          <Card task="Task 1" />
          {this.props.addTaskReducer.map(eachDescription => (
            <Card key={eachDescription.id} task={eachDescription.text} />
          ))}
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            store.dispatch(addTask(input.value));
            input.value = "";
          }}
        >
          <input ref={node => (this.input = node)} />
          <button
            //   onClick={() => {
            //     store.dispatch({
            //       type: ADD_TASK,
            //       text: this.input.value,
            //       id: shortid.generate()
            //     });
            //     this.input.value = ""
            //   }}
            type="submit"
          >
            Add Card
          </button>
        </form>
      </div>
    );
  }
}

List.defaultProps = {
  title: "List Name"
};
List.propTypes = {
  title: PropTypes.string
};

export default connect()(List);
