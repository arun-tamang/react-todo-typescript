import { combineReducers } from 'redux';
import user from './user';
import todoList from './todoList';
import logInDetails from './logInDetails';
import registerDetails from './registerDetails';

const rootReducer = combineReducers({logInDetails, registerDetails, todoList, user});

export default rootReducer;
