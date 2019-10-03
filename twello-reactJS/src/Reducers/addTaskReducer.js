//import { ADD_TASK } from "../Actions/actionCreator";

const initial_tasks = [
  {
    id: 0,
    text: "Task 1",
    closed: false
  },
  {
    id: 1,
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
      return state.filter(eachTask => eachTask.id === action.id);
    default:
      return state;
  }
};

export default addTaskReducer;
