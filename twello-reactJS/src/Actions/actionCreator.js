import { statement } from "@babel/template";

//generate a short random id
const shortid = require("shortid");

// Action addTask
export const addTask = text => ({
  type: ADD_TASK,
  id: shortid.generate(),
  text
});

//close task 
export const closeTask = id => ({
    type: CLOSE_TASK,
    id
})

export const editTask = id => ({
    type: EDIT_TASK,
    id 
})

// action type add a task
export const ADD_TASK = "ADD_TASK";
export const CLOSE_TASK = "CLOSE_TASK";
export const EDIT_TASK = "EDIT_TASK";