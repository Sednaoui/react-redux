import React from "react";
import "./card.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { closeTask } from "./Actions/actionCreator";
import { store } from "./index";


const Card = props => {
  const { task } = props;
  function handleClose(e) {
    e.preventDefault();
    props.delete(props.id)
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
  task: PropTypes.string
};

const mapDispatchToProps = dispatch => {
    return {
      delete: cardtask => store.dispatch({type: 'CLOSE_TASK', id: cardtask })
    }
}

export default connect(mapDispatchToProps)(Card);
