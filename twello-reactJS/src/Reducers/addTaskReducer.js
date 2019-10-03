//import { ADD_TASK } from "../Actions/actionCreator";
import shortid from 'shortid';
const initial_tasks = [
  {
    id: shortid.generate(),
    text: "Task 1",
    closed: false
  },
  {
    id: shortid.generate(),
    text: "Task 2",
    closed: false
  }
];

const addTaskReducer = (state = initial_tasks, action) => {
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
    //   console.log(state);
      return state.filter(eachTask => eachTask.text !== state.text);
    default:
      return state;
  }
};

export default addTaskReducer;
