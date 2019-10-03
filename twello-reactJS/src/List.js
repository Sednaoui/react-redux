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
    let input;
    return (
      <div className="myMainContainer">
        <div className="myContainer myList">
          <h3>List Name</h3>
          {this.props.cardReducer.map(eachDescription => (
            <Card key={eachDescription.id} task={eachDescription.text}/>
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
  cardReducer: state.addTaskReducers,
});

export default connect(mapStateToProps)(List);
