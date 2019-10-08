//generate a short random id
const shortid = require("shortid");

// Action addTask
export const addTask = (text, listID) => ({
  type: ADD_TASK,
  id: shortid.generate(),
  payload: { text, listID }
});

//close task
export const closeTask = (listId, cardId) => {
  return {
    type: CLOSE_TASK,
    listId,
    cardId
  };
};

export const editList = (listId, value) => ({
  type: EDIT_TASK,
  listId,
  value
});

export const editCard = (listId, cardId, value) => ({
  type: EDIT_CARD,
  listId,
  cardId,
  value
});

// action type add a task
export const ADD_TASK = "ADD_TASK";
export const CLOSE_TASK = "CLOSE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const EDIT_CARD = "EDIT_CARD";
