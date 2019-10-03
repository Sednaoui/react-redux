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
          text: action.text,
          closed: false
        }
      ];
    case "CLOSE_TASK":
      return state.map(eachTask => (eachTask.id === action.id)
        ? { ...eachTask, closed: !eachTask.closed }
        : eachTask)
    default:
      return state;
  }
};

export default addTaskReducer;
