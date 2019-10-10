export const initial_Activity = ["Welcome to new Twello Board"];
const activityReducer = (state = initial_Activity, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newCardAdded = action.payload.text;
      let newState = state;
      newState.push(`You created a new Card: ` + newCardAdded);
      return newState;
    case "ADD_LIST":
      const newListAdded = action.payload.title;
      let newStateList = state;
      newStateList.push(`You created a new List: ` + newListAdded);
      return newStateList;
    default:
      return state;
  }
};

export default activityReducer;
