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
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.value.trim()) {
      return;
    }
    store.dispatch(addTask(this.state.value));
    this.setState({ value: ""})
  }

  render() {
    return (
      <div className="myMainContainer">
        <div className="myContainer myList">
          <h3>{this.props.title}</h3>
          {this.props.cardReducer.map((eachDescription, i) => (
            <Card {...eachDescription} key={eachDescription.id} index={i} />
          ))}
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button type="submit">Add Card</button>
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
  cardReducer: state.taskReducer
});

export default connect(mapStateToProps)(List);
