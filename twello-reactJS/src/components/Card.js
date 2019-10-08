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
    // const { listID, id } = inputProps;
    console.log(val);
    props.edit(val, list.listID, cardId);
  }

  return (
    <div className="scrollList">
      {list.cards.map(card => (
        <div className="mycard">
          <EdiText
            type="text"
            value={card.text}
            onSave={onSave}
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
    close: (listId, cardId) => store.dispatch(closeTask(listId, cardId)),
    edit: cardInput => store.dispatch(editTask(cardInput))
  };
};

export default connect(mapDispatchToProps)(Card);
