const initialActivity = ['Welcome to new Twello Board'];
const activityReducer = (state = initialActivity, action) => {
    const newState = state;
    const editCard = action.value;
    const editList = action.value;
    switch (action.type) {
    case 'ADD_TASK':
        const newCardAdded = action.payload.text;
        newState.push('You created a new Card: ' + newCardAdded);
        return newState;
    case 'ADD_LIST':
        const newListAdded = action.payload.title;
        newState.push('You created a new List: ' + newListAdded);
        return newState;
    case 'EDIT_CARD':
        newState.push('You edited your card name to: ' + editCard);
        return newState;
    case 'EDIT_LIST':
        newState.push('You edited your list name to: ' + editList);
        return newState;
    case 'CLOSE_TASK':
            newState.push('You closed your card');
        return newState;
    default:
        return state;
    }
};

export default activityReducer;
