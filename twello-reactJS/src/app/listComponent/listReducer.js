import Constants from './Constants';
import CardConstants from '../cardComponent/Constants';
import { listInitialState } from '../Reducers/initialConstants';

const listReducer = (state = listInitialState, action) => {
    const { lists } = state;
    let newCard;
    let list;
    let newCards;
    let newSrcCards;

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
                    cards: lists[action.payload.listID].cards.filter((cardId) =>
                        !(cardId === action.payload.cardID)) } } };

    case Constants.REORDER_CARDS:
        list = lists[action.payload.source.droppableId];
        newCards = list.cards;

        newCards.splice(action.payload.source.index, 1);
        newCards.splice(action.payload.destination.index, 0, action.payload.draggableId);

        return {
            ...state,
            lists: {
                ...lists,
                [action.payload.destination.droppableId]: {
                    ...lists[action.payload.destination.droppableId],
                    cards: newCards,
                },
            },
        };

    case CardConstants.CHANGE_CARD_LIST_LOCATION:
        list = lists[action.payload.destination.droppableId];
        newCards = list.cards;

        newCards.splice(action.payload.destination.index, 0, action.payload.draggableId);

        newSrcCards = state.lists[action.payload.source.droppableId].cards.filter(
            (cardId) => cardId !== action.payload.draggableId
        );

        return {
            ...state,
            lists: {
                ...lists,
                [action.payload.source.droppableId]: {
                    ...lists[action.payload.source.droppableId],
                    cards: newSrcCards,
                },
                [action.payload.destination.droppableId]: {
                    ...lists[action.payload.destination.droppableId],
                    cards: newCards,
                },
            },
        };

    default:
        return state;
    }
};

export default listReducer;
