//import { ADD_TASK } from "../Actions/actionCreator";
import shortid from "shortid";
const initial_tasks = [
  {
    id: shortid.generate(),
    text: "Task 1",
  },
  {
    id: shortid.generate(),
    text: "Task 2",
  }
];

const taskReducer = (state = initial_tasks, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ];
    case "CLOSE_TASK":
      return state.filter(eachTask => eachTask.id !== action.id);
    case "EDIT_TODO":
      if (state.text !== action.input) {
        return state;
      }
      return {
        ...state,
        text: action.input
      };
    default:
      return state;
  }
};

export default taskReducer;
