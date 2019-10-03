import React from "react";
import "./card.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { closeTask } from "./Actions/actionCreator";
import { store } from "./index";

const Card = props => {
  const { id } = props;
  
  function handleClose() {
    props.close(id);
  }

  function handleEdit() {
    console.log("Hello World")
  }

  return (
    <div className="scrollList">
      <p className="mycard" >{props.text}</p>
      <button type="button" onClick={handleClose}>X</button>
      <button type="button" onClick={handleEdit}>Edit Card</button>
    </div>
  );
};

Card.defaultProps = {
  text: "This is a card"
};
Card.propTypes = {
  task: PropTypes.string,
  key: PropTypes.string
};

const mapDispatchToProps = dispatch => {
  return {
    close: cardtaskid => store.dispatch(closeTask(cardtaskid))
  };
};

export default connect(mapDispatchToProps)(Card);
