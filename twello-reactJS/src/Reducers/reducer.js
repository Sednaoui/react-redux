import shortid from 'shortid';
import { initialState } from './initialConstants';

const reducer = (state = initialState, action) => {
    let newCard;
    let newState;
    let newList;

    switch (action.type) {
    case 'ADD_CARD':
        newCard = {
            text: action.payload.text,
            id: shortid.generate(),
        };
        newState = state.map((list) => {
            if (list.listID === action.payload.listID) {
                return {
                    ...list,
                    cards: [...list.cards, newCard],
                };
            } else {
                return list;
            }
        });

        return newState;

    case 'CLOSE_CARD':
        return state.map((list) => {
            if (list.listID === action.listId) {
                return {
                    ...list,
                    cards: list.cards.filter(
                        (card) => card.id !== action.cardId,
                    ),
                };
            } else {
                return list;
            }
        });

    case 'EDIT_LIST':
        return state.map((list) => {
            if (list.listID === action.listId) {
                return {
                    ...list,
                    title: action.value,
                };
            } else {
                return list;
            }
        });

    case 'EDIT_CARD':
        return state.map((list) => {
            if (list.listID === action.listId) {
                return {
                    ...list,
                    cards: list.cards.map((card) => {
                        if (card.id === action.cardId) {
                            return { ...card, text: action.value };
                        } else {
                            return card;
                        }
                    }),
                };
            } else {
                return list;
            }
        });

    case 'ADD_LIST':
        newList = {
            title: action.payload.title,
            cards: [],
            listID: shortid.generate(),
        };

        return [...state, newList];
    default:
        return state;
    }
};

export default reducer;
