import { combineReducers } from 'redux';
import adviceReducer from './adviceReducer';
import userReducer from './userReducer';

export default combineReducers({
    advice: adviceReducer,
    user: userReducer
});