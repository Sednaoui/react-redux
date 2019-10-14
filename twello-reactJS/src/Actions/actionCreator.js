import {
    ADD_TASK, CLOSE_TASK, EDIT_CARD,
} from './Constants';

// generate a short random id
const shortid = require('shortid');

// Action addTask
export const addTask = (text, listID) => ({
    type: ADD_TASK,
    id: shortid.generate(),
    payload: { text, listID },
});

// close task
export const closeTask = (listId, cardId) => ({
    type: CLOSE_TASK,
    listId,
    cardId,
});

export const editCard = (listId, cardId, value) => ({
    type: EDIT_CARD,
    listId,
    cardId,
    value,
});

