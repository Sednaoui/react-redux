import React from "react";
import Card from "./Card";
import "./List.css";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../Actions/actionCreator";
import EditText from "./EditText";

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
    this.props.listActions.addTask(this.state.value, list.listID);
    this.setState({ value: "" });
  }

  onSave(id, val) {
    this.props.listActions.editList(id, val);
  }

  render() {
    const { list } = this.props;
    return (
      <div className="myMainContainer">
        <div className="myContainer myList">
          <EditText
            onSave={this.onSave.bind(this)}
            id={list.listID}
            value={list.title}
          />
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

List.propTypes = {
  listID: PropTypes.string
};

const mapStateToProps = state => ({
  lists: state.reducer
});

const mapDispatchToProps = dispatch => {
  return {
    listActions: bindActionCreators(Object.assign({}, actions), dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
