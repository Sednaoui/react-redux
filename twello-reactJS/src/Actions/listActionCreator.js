export const addList = (title, listID) => {
  return {
    type: ADD_LIST,
    payload: { title, listID }
  };
};

export const editList = (listId, value) => ({
  type: EDIT_LIST,
  listId,
  value
});

export const ADD_LIST = 'ADD_LIST';
export const EDIT_LIST = 'EDIT_LIST';
