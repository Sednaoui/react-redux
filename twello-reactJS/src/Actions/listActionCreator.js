import {
    ADD_LIST, EDIT_LIST,
} from './Constants';

export const addList = (title, listID) => ({
    type: ADD_LIST,
    payload: { title, listID },
});

export const editList = (listId, value) => ({
    type: EDIT_LIST,
    listId,
    value,
});
