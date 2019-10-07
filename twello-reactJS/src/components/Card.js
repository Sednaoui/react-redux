import React from "react";
import "./card.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { closeTask, editTask } from "../Actions/actionCreator";
import { store } from "../index";
import EdiText from "react-editext";

const Card = props => {
  const { id, index, text } = props;

  function handleClose() {
    props.close(id);
  }

  function onSave(val) {
    props.edit(val, index);
  }

  return (
    <div className="scrollList">
      <div className="mycard">
        <EdiText
          type="text"
          value={text}
          onSave={onSave}
          editOnViewClick={true}
          showButtonsOnHover={true}
        />
      </div>
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
    edit: (cardInput, index) => store.dispatch(editTask(cardInput, index))
  };
};

export default connect(mapDispatchToProps)(Card);
