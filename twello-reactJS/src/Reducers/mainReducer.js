import {combineReducers} from 'redux'
import addTaskReducers from "./addTaskReducer"

const twelloApp = combineReducers({
    addTaskReducers,
})

export default twelloApp