import React from 'react';
import './card.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Draggable } from 'react-beautiful-dnd';
import {
    closeTask, editCard,
} from './actionCreator';
import EditText from '../EditTextComponent/EditText';

const Card = (props) => {
    const { list, cards } = props;
    const cardListIds = Object.keys(cards).filter((cardId) => list.cards.includes(cardId));

    return (
        <div className="scrollList">
            {cardListIds.map((cardId, index) => (
                <Draggable
                    draggableId={cardId}
                    index={index}
                    key={cardId}>
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="mycard"
                            key={cardId}>
                            <EditText
                                onSave={(val) => {
                                    props.cardActions.editCard(
                                        props.list.listID, cardId.cardID, val
                                    );
                                }}
                                value={cards[cardId].text} />
                            <button
                                type="button"
                                onClick={() => props.cardActions.closeTask(list.listID, cardId)}>
                        X
                            </button>
                        </div>
                    )}
                </Draggable>
            ))}
        </div>
    );
};

Card.defaultProps = {
    text: 'This is a card',
    cardActions: {},
    list: {},
    cards: {},
};
Card.propTypes = {
    text: PropTypes.string,
    cardActions: PropTypes.objectOf(PropTypes.any),
    list: PropTypes.objectOf(PropTypes.any),
    cards: PropTypes.objectOf(PropTypes.any),
};

const mapStateToProps = (state) => ({
    cards: state.cardReducer.cards,
});

const mapDispatchToProps = (dispatch) => ({
    cardActions: bindActionCreators({ closeTask, editCard }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
