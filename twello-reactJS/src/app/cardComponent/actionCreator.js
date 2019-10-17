import shortid from 'shortid';
import Constants from './Constants';

// Action addTask
export const addTask = (text, listID) => ({
    type: Constants.ADD_CARD,
    payload: { text, listID, cardID: shortid.generate() },
});

// close task
export const closeTask = (listID, cardID) => ({
    type: Constants.CLOSE_CARD,
    payload: { cardID, listID },
});

export const editCard = (listID, cardID, value) => ({
    type: Constants.EDIT_CARD,
    payload: { listID, cardID, value },
});

