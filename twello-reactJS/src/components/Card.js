import React from "react";
import "./card.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { closeTask, editTask } from "../Actions/actionCreator";
import { store } from "../index";
import EdiText from "react-editext";

const Card = props => {
  const { list } = props;
  function handleClose(cardId) {
    props.close(list.listID, cardId);
  }

  function onSave(val, cardId) {
    props.edit(val, list.listId, cardId);
  }

  return (
    <div className="scrollList">
      {list.cards.map(card => (
        <div className="mycard">
          <EdiText
            type="text"
            value={card.text}
            onSave={onSave.bind(this, card.id)}
            editOnViewClick={true}
            showButtonsOnHover={true}
          />
          <button type="button" onClick={handleClose.bind(this, card.id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

Card.defaultProps = {
  text: "This is a card"
};
Card.propTypes = {
  text: PropTypes.string,
  key: PropTypes.string
};

const mapDispatchToProps = dispatch => {
  return {
    close: (taskId, cardId) => store.dispatch(closeTask(taskId, cardId)),
    edit: (cardInput, index) => store.dispatch(editTask(cardInput, index))
  };
};

export default connect(mapDispatchToProps)(Card);
