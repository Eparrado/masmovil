import { combineReducers } from 'redux'
import { mainReducer } from './reducers-index'

const rootReducer = combineReducers({
    mobile: mainReducer
});


export default rootReducer;