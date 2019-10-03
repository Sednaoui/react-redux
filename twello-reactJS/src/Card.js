import React from "react";
import "./card.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { closeTask, editTask } from "./Actions/actionCreator";
import { store } from "./index";
import EdiText from "react-editext";

const Card = props => {
  const { id } = props;

  function handleClose() {
    props.close(id);
  }

  function onSave(val) {
    props.edit(val)
  }

  return (
    <div className="scrollList">
      {/* <p className="mycard">{props.text}</p> */}
      <EdiText
        viewProps={{
          className: "mycard",
        }}
        type="text"
        value={props.text}
        onSave={onSave}
      />
      <button type="button" onClick={handleClose}>
        X
      </button>
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
    close: cardtaskid => store.dispatch(closeTask(cardtaskid)),
    edit: cardInput => store.dispatch(editTask(cardInput))
  };
};

export default connect(mapDispatchToProps)(Card);
