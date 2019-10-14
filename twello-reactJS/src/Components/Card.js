import React from 'react';
import './card.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    closeTask, editCard,
} from '../Actions/actionCreator';
import EditText from './EditText';

const Card = (props) => {
    const { list } = props;

    return (
        <div className="scrollList">
            {list.cards.map((card) => (
                <div className="mycard">
                    <EditText
                        onSave={(val) => {
                            props.cardActions.editCard(props.list.listID, card.id, val);
                        }}
                        value={card.text} />
                    <button
                        type="button"
                        onClick={() => props.cardActions.closeTask(list.listID, card.id)}>
                        X
                    </button>
                </div>
            ))}
        </div>
    );
};

Card.defaultProps = {
    text: 'This is a card',
};
Card.propTypes = {
    text: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
    cardActions: bindActionCreators({ closeTask, editCard }, dispatch),
});

export default connect(null, mapDispatchToProps)(Card);
