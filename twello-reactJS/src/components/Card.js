import React from "react";
import "./card.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { closeTask, editCard } from "../Actions/actionCreator";
import { store } from "../index";
import EditText from "./EditText";

const Card = props => {
  const { list } = props;
  function handleClose(cardId) {
    props.close(list.listID, cardId);
  }

  function onSave(id, val) {
    props.edit(props.list.listID, id, val);
  }

  return (
    <div className="scrollList">
      {list.cards.map(card => (
        <div className="mycard">
          <EditText onSave={onSave} id={card.id} value={card.text} />
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
    edit: (listId, cardId, value) =>
      store.dispatch(editCard(listId, cardId, value))
  };
};

export default connect(mapDispatchToProps)(Card);
