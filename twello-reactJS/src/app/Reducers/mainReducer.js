import { combineReducers } from 'redux';
import activityComponent from '../activityComponent';
import cardComponent from '../cardComponent';
import listComponent from '../listComponent';

const rootReducer = combineReducers({
    cardReducer: cardComponent.cardReducer,
    listReducer: listComponent.listReducer,
    activityReducer: activityComponent.activityReducer,
});

export default rootReducer;
