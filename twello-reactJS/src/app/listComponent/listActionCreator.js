import shortid from 'shortid';
import Constants from './Constants';

export const addList = (title) => ({
    type: Constants.ADD_LIST,
    payload: { title, listID: shortid.generate(), cards: [], activityID: shortid.generate() },
});

export const editList = (listID, value) => ({
    type: Constants.EDIT_LIST,
    payload: { listID,
        value,
        activityID: shortid.generate() },
});

export const reorderCards = (destination, source, draggableId) => ({
    type: Constants.REORDER_CARDS,
    payload: { destination, source, draggableId },
});