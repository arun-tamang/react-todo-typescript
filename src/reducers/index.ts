import { combineReducers } from 'redux';
import user from './user';
import todoList from './todoList';
import logInDetails from './logInDetails';

const rootReducer = combineReducers({logInDetails, todoList, user});

export default rootReducer;
