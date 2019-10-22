import { cardInitialState } from '../Reducers/initialConstants';
import CardConstants from './Constants';

const cardReducer = (state = cardInitialState, action) => {
    const { cards } = state;
    const { payload } = action;

    switch (action.type) {
    case CardConstants.ADD_CARD:

        return { ...state, cards: { ...cards, [payload.cardID]: payload } };

    case CardConstants.CLOSE_CARD:
        delete cards[payload.cardID];
        return { ...state, cards };

    case CardConstants.EDIT_CARD:
        return { ...state,
            cards:
            { ...cards,
                [payload.cardID]:
                { ...cards[payload.payloadcardID], text: payload.value } } };

    case CardConstants.CHANGE_CARD_LIST_LOCATION:
        return { ...state,
            cards:
            { ...cards,
                [payload.draggableId]:
                { ...cards[payload.draggableId], listID: payload.destination.droppableId } } };
    default:
        return state;
    }
};

export default cardReducer;
