import React from "react";
import * as actionsCard from "../Actions/actionCreator";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class AddCardComponent extends React.Component {
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
    const { list } = this.props;
    this.props.actionsCard.addTask(this.state.value, list.listID);
    this.setState({ value: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Add Card</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actionsCard: bindActionCreators(Object.assign({}, actionsCard), dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddCardComponent);
