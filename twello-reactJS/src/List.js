import React from "react";
import Card from "./Card";
import "./List.css";
import { store } from "./index";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTask } from "./Actions/actionCreator";

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const shortid = require("shortid");
    let input;
    return (
      <div className="myMainContainer">
        <div className="myContainer myList">
          <h3>List Name</h3>
          {this.props.list.map(eachDescription => (
            <Card key={eachDescription.id} task={eachDescription.text} delete={this.props.delete}/>
          ))}
          <form
            onSubmit={e => {
              e.preventDefault();
              console.log(this.input);
              if (!this.input.value.trim()) {
                return;
              }
              store.dispatch(addTask(this.input.value));
              this.input.value = "";
            }}
          >
            <input ref={node => (this.input = node)} />
            <button
              type="submit">
              Add Card
            </button>
          </form>
        </div>
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

const mapStateToProps = state => ({
  list: state.addTaskReducers,
});

export default connect(mapStateToProps)(List);
