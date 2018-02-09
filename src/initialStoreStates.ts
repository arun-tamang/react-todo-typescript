import LocalUser from './domains/LocalUser';
import RootState from './domains/RootState';
import * as moment from 'moment';

// import default data
let CURRENT_USER: LocalUser = {
  authenticated: false,
  userDetails: {
    email: '',
    id: -10
  }
};

if (localStorage.currentUser) {
  CURRENT_USER = JSON.parse(localStorage.currentUser);
}

export const initialUser = {
  authenticated: CURRENT_USER.authenticated || false,
  userDetails: CURRENT_USER.userDetails || ''
};

export const initialTodoList = {
  showPopUp: false,
  title: 'Your Todos:',
  todos: [],
  popUpEditTitle: '',
  todoToEdit: -1,
  searchValue: {
    tags: [],
    keywords: ''
  },
  addFormHeight: 0,
  todoToAdd: {
    title: '',
    tagIds: [],
    tagNames: [],
    expiresAt: moment().add(2, 'days')
  },
  availableTags: [],
  metadata: {
    page: 1,
    pageSize: 1,
    rowCount: 1,
    pageCount: 1
  }
};

export const initialLoginDetails = {
  email: '',
  password: ''
};

export const initialRegisterDetails = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

export const defaultState: RootState = {
  todoList: initialTodoList,
  user: initialUser,
  logInDetails: initialLoginDetails,
  registerDetails: initialRegisterDetails
};