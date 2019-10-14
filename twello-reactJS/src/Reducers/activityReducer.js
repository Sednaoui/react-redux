const initialActivity = ['Welcome to new Twello Board'];
const activityReducer = (state = initialActivity, action) => {
    switch (action.type) {
    case 'ADD_TASK':
        const newCardAdded = action.payload.text;
        const newState = state;
        newState.push('You created a new Card: ' + newCardAdded);
        return newState;
    case 'ADD_LIST':
        const newListAdded = action.payload.title;
        const newStateList = state;
        newStateList.push('You created a new List: ' + newListAdded);
        return newStateList;
    case 'EDIT_CARD':
        const editCard = action.value;
        const newStateEditCard = state;
        newStateEditCard.push('You edited your card name to: ' + editCard);
        return newStateEditCard;
    case 'EDIT_LIST':
        const editList = action.value;
        const newStateEditList = state;
        newStateEditList.push('You edited your list name to: ' + editList);
        return newStateEditList;
    case 'CLOSE_TASK':
        const newStateCloseTask = state;
        newStateCloseTask.push('You closed your card');
        return newStateCloseTask;
    default:
        return state;
    }
};

export default activityReducer;
