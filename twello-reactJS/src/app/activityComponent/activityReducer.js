import { initialActivity } from '../Reducers/initialConstants';

const activityReducer = (state = initialActivity, action) => {
    const { activities } = state;
    let newCardAdded;
    let newListAdded;
    let editCard;
    let editList;

    switch (action.type) {
    case 'ADD_CARD':
        newCardAdded = action.payload.text;
        return { ...state,
            activities: { ...activities,
                [action.payload.activityID]:
                { activityName: `You created a new Card: ${newCardAdded}`, activityID: action.payload.activityID } } };

    case 'ADD_LIST':
        newListAdded = action.payload.title;
        return { ...state,
            activities: {
                ...activities,
                [action.payload.activityID]:
            { activityName: `You created a new List: ${newListAdded}`, activityID: action.payload.activityID },
            } };
    case 'EDIT_CARD':
        editCard = action.payload.value;
        return { ...state,
            activities: {
                ...activities,
                [action.payload.activityID]:
            { activityName: `You edited your card name to: ${editCard}`, activityID: action.payload.activityID },
            } };

    case 'EDIT_LIST':
        editList = action.payload.value;
        return { ...state,
            activities: {
                ...activities,
                [action.payload.activityID]:
            { activityName: `You edited your list name to: ${editList}`, activityID: action.payload.activityID },
            } };

    case 'CLOSE_CARD':
        return { ...state,
            activities: {
                ...activities,
                [action.payload.activityID]:
            { activityName: 'You deleted your card', activityID: action.payload.activityID },
            } };
    default:
        return state;
    }
};

export default activityReducer;
