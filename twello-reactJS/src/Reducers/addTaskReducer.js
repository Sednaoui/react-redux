//import { ADD_TASK } from "../Actions/actionCreator";

const initial_tasks = [
  {
    id: 0,
    text: "Task 1"
  },
  {
    id: 1,
    text: "Task 2"
  }
];

const addTaskReducer = (state = initial_tasks, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          closed: false
        }
      ];
      default: 
      return state;
  }
};

export default addTaskReducer;
