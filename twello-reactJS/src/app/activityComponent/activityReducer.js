import { initialActivity } from '../Reducers/initialConstants';

const activityReducer = (state = initialActivity, action) => {
    const newState = state.activities;
    const {activities} = state
    let newCardAdded;
    let newListAdded;
    let editCard;
    let editList;

    switch (action.type) {
     case 'ADD_CARD': 
        newCardAdded = action.payload.text;
        return { ...state, activities: {
            ...activities, [action.payload.activityID]: 
                {activityName: `You created a new Card: ${newCardAdded}`, activityID:action.payload.activityID } } };
    
    case 'ADD_LIST':
        newListAdded = action.payload.title;
        return { ...state, activities: {
            ...activities, [action.payload.activityID]:
            {activityName: `You created a new List: ${newListAdded}`, activityID:action.payload.activityID}
        } };
    case 'EDIT_CARD':
        editCard = action.payload.value;
        return { ...state, activities: {
            ...activities, [action.payload.activityID]: 
            {activityName:`You edited your card name to: ${editCard}`, activityID:action.payload.activityID}
        } };

    // case 'EDIT_LIST':
    //     editList = action.payload.value;
    //     newState.push(`You edited your list name to: ${editList}`);
    //     return { ...state, activityList: newState };
    // case 'CLOSE_CARD':
    //     newState.push('You closed your card');
    //     return { ...state, activityList: newState };
    default:
        return state;
    }
};

export default activityReducer;
