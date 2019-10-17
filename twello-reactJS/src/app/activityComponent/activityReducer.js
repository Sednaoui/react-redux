import { initialActivity } from '../Reducers/initialConstants';

const activityReducer = (state = initialActivity, action) => {
    const newState = state.activityList;
    let newCardAdded;
    let newListAdded;
    let editCard;
    let editList;

    switch (action.type) {
    case 'ADD_CARD':
        newCardAdded = action.payload.text;
        newState.push(`You created a new Card: ${newCardAdded}`);
        return { ...state, activityList: newState };
    case 'ADD_LIST':
        newListAdded = action.payload.title;
        newState.push(`You created a new List: ${newListAdded}`);
        return { ...state, activityList: newState };
    case 'EDIT_CARD':
        editCard = action.payload.value;
        newState.push(`You edited your card name to: ${editCard}`);
        return { ...state, activityList: newState };
    case 'EDIT_LIST':
        editList = action.payload.value;
        newState.push(`You edited your list name to: ${editList}`);
        return { ...state, activityList: newState };
    case 'CLOSE_CARD':
        newState.push('You closed your card');
        return { ...state, activityList: newState };
    default:
        return state;
    }
};

export default activityReducer;
