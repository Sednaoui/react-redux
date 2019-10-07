import shortid from "shortid";

export const initial_state = [
  {
    title: "List Name 1",
    listID: shortid.generate(),
    cards: [
      {
        id: shortid.generate(),
        text: "Task1"
      },
      {
        id: shortid.generate(),
        text: "Task 2"
      }
    ]
  },
  {
    title: "List Name 2",
    listID: shortid.generate(),
    cards: [
      {
        id: shortid.generate(),
        text: "Task3"
      },
      {
        id: shortid.generate(),
        text: "Task 4"
      }
    ]
  }
];

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newCard = {
        text: action.payload.text,
        id: shortid.generate()
      };
      console.log(state);
      const newState = state.map(list => {
        if (list.listID === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });

      return newState;

    case "CLOSE_TASK":
      return state.filter(eachTask => eachTask.id !== action.payload.id);

    case "EDIT_TASK":
      const statecopy = [...state];
      const task = statecopy[action.index];
      statecopy[action.index] = { ...task, text: action.input };
      console.log(statecopy);
      return statecopy;

    case "ADD_LIST":
      const newList = {
        title: action.payload.title,
        cards: [],
        listID: shortid.generate()
      };
      return [...state, newList];
    default:
      return state;
  }
};

export default reducer;
