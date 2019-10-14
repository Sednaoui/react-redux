import { combineReducers } from 'redux';
import reducer from './reducer';
import activityReducer from './activityReducer';

const rootReducer = combineReducers({
    reducer,
    activityReducer,
});

export default rootReducer;
