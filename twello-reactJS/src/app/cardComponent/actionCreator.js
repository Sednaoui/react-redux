import shortid from 'shortid';
import Constants from './Constants';

// Action addTask
export const addTask = (text, listID) => ({
    type: Constants.ADD_CARD,
    payload: { text, listID, cardID: shortid.generate(), activityID: shortid.generate() },
});

// close task
export const closeTask = (listID, cardID) => ({
    type: Constants.CLOSE_CARD,
    payload: { cardID, listID, activityID: shortid.generate() },
});

export const editCard = (listID, cardID, value) => ({
    type: Constants.EDIT_CARD,
    payload: { listID, cardID, value, activityID: shortid.generate() },
});

export const changeCardLocation = (destination, source, draggableId) => ({
    type: Constants.CHANGE_CARD_LIST_LOCATION,
    payload: { destination, source, draggableId },
});
