import React from "react";
import Card from "./Card";
import "./List.css";
import { store } from "../index";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTask } from "../Actions/actionCreator";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", listID: this.props.listID };

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
    this.setState({ value: "" });
  }

  render() {
    const { title, cards } = this.props;
    return (
      <div className="myMainContainer">
        <div className="myContainer myList">
          <h3>{title}</h3>
          {cards.map((eachDescription, i) => (
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
  title: "List Name",
  listID: "List ID123"
};
List.propTypes = {
  title: PropTypes.string,
  listID: PropTypes.string
};

const mapStateToProps = state => ({
  cards: state.reducer
});

export default connect(mapStateToProps)(List);
