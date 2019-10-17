import Constants from './Constants';
import CardConstants from '../cardComponent/Constants';
import { listInitialState } from '../Reducers/initialConstants';

const listReducer = (state = listInitialState, action) => {
    const { lists } = state;
    let newCard;

    switch (action.type) {
    case Constants.ADD_LIST:
        return ({ ...state,
            lists: { ...state.lists, [action.payload.listID]: action.payload } });

    case Constants.EDIT_LIST:
        return { ...state,
            lists: { ...lists,
                [action.payload.listID]:
                { ...lists[action.payload.listID], title: action.payload.value } } };

    case CardConstants.ADD_CARD:
        newCard = lists[action.payload.listID].cards;

        newCard.push(action.payload.cardID);

        return { ...state,
            lists: { ...lists,
                [action.payload.listID]:
                { ...lists[action.payload.listID], cards: newCard } } };

    case CardConstants.CLOSE_CARD:
        return { ...state,
            lists: { ...lists,
                [action.payload.listID]:
                { ...lists[action.payload.listID],
                    cards: lists[action.payload.listID].cards.filter((card) =>
                        !(card.cardID === action.payload.cardID)) } } };
    default:
        return state;
    }
};

export default listReducer;
