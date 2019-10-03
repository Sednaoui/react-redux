import React from "react";
import "./card.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { closeTask } from "./Actions/actionCreator";
import { store } from "./index";


const Card = props => {
  const { task, key } = props;
  function handleClose(e) {
    e.preventDefault();
    props.close(key)
    console.log("props.delete", props.close(props.key))
  }
  return (
    <div className="scrollList">
      <p className="mycard">{task}</p>
      <button onClick={handleClose}>X</button> 
    </div>
  );
};

Card.defaultProps = {
  task: "This is a card"
};
Card.propTypes = {
  task: PropTypes.string,
  key: PropTypes.string,
};

const mapDispatchToProps = dispatch => {
    return {
      close: cardtaskid => store.dispatch(closeTask(cardtaskid))
    }
}

export default connect(mapDispatchToProps)(Card);
