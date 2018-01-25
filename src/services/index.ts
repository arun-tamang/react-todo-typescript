import addTodo from './todoListServices/addTodo';
import deleteTodo from './todoListServices/deleteTodo';
import downloadTodos from './todoListServices/downloadTodos';
import editTodo from './todoListServices/editTodo';
import extractTodos from './todoListServices/extractTodos';
import fetchTags from './todoListServices/fetchTags';
import searchTodos from './todoListServices/searchTodos';

import login from './authServices/login';
import register from './authServices/register';

import { setTokenInHeader } from './appService/axiosService';

const SERVICES = {
  addTodo,
  deleteTodo,
  downloadTodos,
  editTodo,
  extractTodos,
  fetchTags,
  searchTodos,
  
  login,
  register,
  
  setTokenInHeader
};

export default SERVICES;