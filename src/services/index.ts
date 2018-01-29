import addTodo from './todoListServices/addTodo';
import deleteTodo from './todoListServices/deleteTodo';
import downloadTodos from './todoListServices/downloadTodos';
import editTodo from './todoListServices/editTodo';
import extractTodos from './todoListServices/extractTodos';
import fetchTags from './todoListServices/fetchTags';
import getTodoIndex from './todoListServices/getTodoIndex';
import searchTodos from './todoListServices/searchTodos';

import login from './authServices/login';
import logout from './authServices/logout';
import register from './authServices/register';

import { setTokenInHeader } from './appService/axiosServices';

const SERVICES = {
  addTodo,
  deleteTodo,
  downloadTodos,
  editTodo,
  extractTodos,
  fetchTags,
  getTodoIndex,
  searchTodos,
  
  login,
  logout,
  register,
  
  setTokenInHeader
};

export default SERVICES;