import * as moment from 'moment';
import { Reducer } from 'redux';
import TodoList from '../domains/TodoList';
import {
  TodoListActions,
  SetSearchKeywords,
  SetSearchTags,
  EditTodo,
  SetTitleToAdd,
  SetExpDateToAdd,
  SetTagIdsToAdd,
  SetTagNamesToAdd
} from '../domains/ActionTypes';
import TypeKeys from '../domains/TypeKeys';
import SearchValue from '../domains/SearchValue';
import TodoItem from '../domains/TodoItem';
import TodoToAdd from '../domains/TodoToAdd';
import { initialTodoList, defaultState } from '../initialStoreStates';

const editTodo = (state: TodoItem[], action: EditTodo) => {
  let newState = [...state];
  newState[action.payload.index].title = action.payload.title;
  return newState;
};

const setSearchKeywords = (state: SearchValue, action: SetSearchKeywords) => {
  return {
    ...state,
    keywords: action.payload.keywords
  };
};

const setSearchTags = (state: SearchValue, action: SetSearchTags) => {
  let stateCopy = { ...state };
  let tagCopy = [...state.tags];
  let index = tagCopy.indexOf(action.payload.newTag);
  if (index === -1) {
    // stateCopy.tags.push(action.payload.newTag);
    tagCopy.push(action.payload.newTag);
  } else {
    // stateCopy.tags.splice(index,1);
    tagCopy.splice(index, 1);
  }
  stateCopy.tags = tagCopy;
  // console.log('stateCopy', stateCopy);
  // console.log('state', state);
  return stateCopy;
};

const toggleHeight = (state: number) => {
  if (state === 0) {
    return 60;
  }
  return 0;
};

const setTitleToAdd = (todoToAdd: TodoToAdd, action: SetTitleToAdd) => {
  todoToAdd.title = action.payload.title;
  return todoToAdd;
};

const setExpDateToAdd = (todoToAdd: TodoToAdd, action: SetExpDateToAdd) => {
  todoToAdd.expiresAt = action.payload.date;
  return todoToAdd;
};

const setTagIdsToAdd = (todoToAdd: TodoToAdd, action: SetTagIdsToAdd) => {
  let tagIdsCopy = [...todoToAdd.tagIds];
  let index = tagIdsCopy.indexOf(action.payload.id);
  if (index === -1) {
    tagIdsCopy.push(action.payload.id);
  } else {
    tagIdsCopy.splice(index, 1);
  }
  todoToAdd.tagIds = tagIdsCopy;

  return todoToAdd;
};

const setTagNamesToAdd = (todoToAdd: TodoToAdd, action: SetTagNamesToAdd) => {
  let tagNamesCopy = [...todoToAdd.tagNames];
  let index = tagNamesCopy.indexOf(action.payload.name);
  if (index === -1) {
    tagNamesCopy.push(action.payload.name);
  } else {
    tagNamesCopy.splice(index, 1);
  }
  todoToAdd.tagNames = tagNamesCopy;

  return todoToAdd;
};

const resetTodoToAdd = (todoToAdd: TodoToAdd) => {
  todoToAdd.title = '';
  todoToAdd.tagIds = [];
  todoToAdd.tagNames = [];
  todoToAdd.expiresAt = moment().add(2, 'days');

  return todoToAdd;
};

const todoList: Reducer<TodoList> = (state: TodoList = initialTodoList, action: TodoListActions) => {
  switch (action.type) {
    case TypeKeys.ADD_TODO:
      return {
        ...state,
        todos: [action.payload.newTodo, ...state.todos]
      };
    case TypeKeys.REMOVE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.payload.index),
          ...state.todos.slice(action.payload.index + 1)
        ]
      };
    case TypeKeys.EDIT_TODO:
      return {
        ...state,
        todos: editTodo(state.todos, action)
      };
    case TypeKeys.SET_TODO_PROPS:
      return {
        ...state,
        todos: action.payload.todos
      };
    case TypeKeys.SET_TODO_META_DATA:
      return {
        ...state,
        metadata: action.payload.metadata
      };
    case TypeKeys.SET_TAGS:
      return {
        ...state,
        availableTags: action.payload.tags
      };
    case TypeKeys.SET_SEARCH_KEYWORDS:
      return {
        ...state,
        searchValue: setSearchKeywords(state.searchValue, action)
      };
    case TypeKeys.SET_SEARCH_TAGS:
      return {
        ...state,
        searchValue: setSearchTags(state.searchValue, action)
      };
    case TypeKeys.SET_TODO_TO_EDIT:
      return {
        ...state,
        todoToEdit: action.payload.todoId
      };
    case TypeKeys.TOGGLE_POPUP:
      return {
        ...state,
        showPopUp: !state.showPopUp
      };
    case TypeKeys.SET_POPUP_EDIT_TITLE:
      return {
        ...state,
        popUpEditTitle: action.payload.title
      };
    case TypeKeys.TOGGLE_ADD_FORM:
      return {
        ...state,
        addFormHeight: toggleHeight(state.addFormHeight)
      };
    case TypeKeys.SET_TITLE_TO_ADD:
      return {
        ...state,
        todoToAdd: setTitleToAdd({ ...state.todoToAdd }, action)
      };
    case TypeKeys.SET_EXP_DATE_TO_ADD:
      return {
        ...state,
        todoToAdd: setExpDateToAdd({ ...state.todoToAdd }, action)
      };
    case TypeKeys.SET_TAG_IDS_TO_ADD:
      return {
        ...state,
        todoToAdd: setTagIdsToAdd({ ...state.todoToAdd }, action)
      };
    case TypeKeys.SET_TAG_NAMES_TO_ADD:
      return {
        ...state,
        todoToAdd: setTagNamesToAdd({ ...state.todoToAdd }, action)
      };
    case TypeKeys.RESET_TODO_TO_ADD:
      return {
        ...state,
        todoToAdd: resetTodoToAdd({ ...state.todoToAdd })
      };
    case TypeKeys.RESET_STORE:
      console.log('reset store from todoList reducer');
      return defaultState.todoList;
    default:
      return state;
  }
};

export default todoList;
