import React from "react";
import Card from "./Card";
import "./List.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTask } from "../Actions/actionCreator";

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
    const { dispatch, list } = this.props;
    dispatch(addTask(this.state.value, list.listID));
    this.setState({ value: "" });
  }

  render() {
    const { list } = this.props;

    return (
      <div className="myMainContainer">
        <div className="myContainer myList">
          <h3>{list.title}</h3>
          <Card list={list} />
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
  title: PropTypes.string,
  listID: PropTypes.string
};

const mapStateToProps = state => ({
  lists: state.reducer
});

export default connect(mapStateToProps)(List);
