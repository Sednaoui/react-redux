import shortid from "shortid";
const initial_tasks = [
  {
    id: shortid.generate(),
    text: "Task 1"
  },
  {
    id: shortid.generate(),
    text: "Task 2"
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

    case "EDIT_TASK":
      const statecopy = [...state]
      const task = statecopy[action.index]
      statecopy[action.index] = {...task,text: action.input}
      console.log(statecopy)
      return statecopy
    default:
      return state;
  }
};

export default taskReducer;
