export const addList = (title, listID) => {
  return {
    type: ADD_LIST,
    payload: { title, listID }
  };
};

export const ADD_LIST = "ADD_LIST";
