import { cardInitialState } from '../Reducers/initialConstants';

const cardReducer = (state = cardInitialState, action) => {
    const { cards } = state;
    const { payload } = action;

    switch (action.type) {
    case 'ADD_CARD':

        return { ...state, cards: { ...cards, [payload.cardID]: payload } };

    case 'CLOSE_CARD':
        delete cards[payload.cardID];
        return { ...state, cards };

    case 'EDIT_CARD':
        return { ...state,
            cards:
            { ...cards,
                [payload.cardID]:
                { ...cards[payload.payloadcardID], text: payload.value } } };
    default:
        return state;
    }
};

export default cardReducer;
