//generate a short random id
const shortid = require("shortid");

// Action addTask
export const addTask = text => ({
  type: ADD_TASK,
  id: shortid.generate(),
  text
});

//close task 
export const closeTask = text => ({
    type: CLOSE_TASK,
    text
})

// action type add a task
export const ADD_TASK = "ADD_TASK";
export const CLOSE_TASK = "CLOSE_TASK";
