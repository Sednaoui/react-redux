import React from 'react';
import './card.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeTask, editCard } from '../Actions/actionCreator';
import { store } from '../index';
import EditText from './EditText';

const Card = props => {
    const { list } = props;

    return (
        <div className="scrollList">
            {list.cards.map(card => (
                <div className="mycard">
                    <EditText
                        onSave={val => {
                            props.edit(props.list.listID, card.id, val);
                        }}
                        value={card.text}
                    />
                    <button
                        type="button"
                        onClick={() => props.close(list.listID, card.id)}
                    >
                        X
                    </button>
                </div>
            ))}
        </div>
    );
};

Card.defaultProps = {
    text: 'This is a card'
};
Card.propTypes = {
    text: PropTypes.string
};

const mapDispatchToProps = dispatch => {
    return {
        close: (listId, cardId) => store.dispatch(closeTask(listId, cardId)),
        edit: (listId, cardId, value) =>
            store.dispatch(editCard(listId, cardId, value))
    };
};

export default connect(mapDispatchToProps)(Card);
