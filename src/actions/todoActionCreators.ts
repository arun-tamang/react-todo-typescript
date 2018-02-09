import { Dispatch } from 'redux';
// import TodoPropsItem from '../domains/TodoPropsItem';
import TodoMetaData from '../domains/TodoMetaData';
import TagItem from '../domains/TagItem';
import SearchValue from '../domains/SearchValue';
import SERVICES from '../services/index';
import TodoItem from '../domains/TodoItem';
import TypeKeys from '../domains/TypeKeys';
import * as ActionTypes from '../domains/ActionTypes';
import { Moment } from 'moment';

// add todo

export function addTodo(newTodo: TodoItem): ActionTypes.AddTodo {
  return {
    type: TypeKeys.ADD_TODO,
    payload: {
      newTodo
    }
  };
}

// remove todo

export function removeTodo(index: number): ActionTypes.RemoveTodo {
  return {
    type: TypeKeys.REMOVE_TODO,
    payload: {
      index
    }
  };
}

// edit todo

export function editTodo(title: string, index: number): ActionTypes.EditTodo {
  return {
    type: TypeKeys.EDIT_TODO,
    payload: {
      title,
      index
    }
  };
}

// set todoProps

export function setTodoProps(todos: TodoItem[]): ActionTypes.SetTodoProps {
  return {
    type: TypeKeys.SET_TODO_PROPS,
    payload: {
      todos
    }
  };
}

// set metadata

export function setTodoMetaData(metadata: TodoMetaData): ActionTypes.SetTodoMetadata {
  return {
    type: TypeKeys.SET_TODO_META_DATA,
    payload: {
      metadata
    }
  };
}

// set search keywords

export function setSearchKeywords(keywords: string): ActionTypes.SetSearchKeywords {
  return {
    type: TypeKeys.SET_SEARCH_KEYWORDS,
    payload: {
      keywords
    }
  };
}

// set search tags

export function setSearchTags(newTag: string): ActionTypes.SetSearchTags {
  return {
    type: TypeKeys.SET_SEARCH_TAGS,
    payload: {
      newTag
    }
  };
}

// set todoToEdit

export function setTodoToEdit(todoId: number): ActionTypes.SetTodoToEdit {
  return {
    type: TypeKeys.SET_TODO_TO_EDIT,
    payload: {
      todoId
    }
  };
}

// fetch todos
export function fetchTodos(userId: number, pageNo: number): ActionTypes.FetchTodosReturnType {
  return (dispatch: Dispatch<any>) => {
    return SERVICES.downloadTodos(userId, pageNo).then(
      (downloadedTodos: any) => {
        if (downloadedTodos) {
          let extractedTodos = SERVICES.extractTodos(
            downloadedTodos.data
          );
          dispatch(setTodoProps(extractedTodos));
          dispatch(setTodoMetaData(downloadedTodos.metadata));
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  };
}

// search todos
export function searchTodos(searchValue: SearchValue, userId: number): ActionTypes.SearchTodosReturnType {
  return (dispatch: Dispatch<any>) => {
    return SERVICES.searchTodos(searchValue, userId).then(response => {
      if (response) {
        let extractedTodos = SERVICES.extractTodos(
          response.data.data
        );
        // this.currentNumTodos = extractedTodos.length;
        dispatch(setTodoProps(extractedTodos));
      }
    });
  };
}

// set available tags

export function setTags(tags: TagItem[]): ActionTypes.SetTags {
  return {
    type: TypeKeys.SET_TAGS,
    payload: {
      tags
    }
  };
}

export function fetchTags(userId: number): ActionTypes.FetchTagsReturnType {
  return (dispatch: Dispatch<any>) => {
    return SERVICES.fetchTags(userId).then(
      (fetchedTags: TagItem[]) => {
        // console.log('from fetchTags action');
        if (fetchedTags) {
          dispatch(setTags(fetchedTags));
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  };
}

// toggle popUp

export function togglePopUp(): ActionTypes.TogglePopUp {
  return {
    type: TypeKeys.TOGGLE_POPUP
  };
}

// set popUpEdit title

export function setPopUpEditTitle(title: string): ActionTypes.SetPopUpEditTitle {
  return {
    type: TypeKeys.SET_POPUP_EDIT_TITLE,
    payload: {
      title
    }
  };
}

// toggle addForm

export function toggleAddForm(): ActionTypes.ToggleAddForm {
  return {
    type: TypeKeys.TOGGLE_ADD_FORM
  };
}

// set title to add

export function setTitleToAdd(title: string): ActionTypes.SetTitleToAdd {
  return {
    type: TypeKeys.SET_TITLE_TO_ADD,
    payload: {
      title
    }
  };
}

// set expDate to add

export function setExpDateToAdd(date: Moment): ActionTypes.SetExpDateToAdd {
  return {
    type: TypeKeys.SET_EXP_DATE_TO_ADD,
    payload: {
      date
    }
  };
}

// set tagIds to add

export function setTagIdsToAdd(id: number): ActionTypes.SetTagIdsToAdd {
  return {
    type: TypeKeys.SET_TAG_IDS_TO_ADD,
    payload: {
      id
    }
  };
}

// set tagNames to add

export function setTagNamesToAdd(name: string): ActionTypes.SetTagNamesToAdd {
  return {
    type: TypeKeys.SET_TAG_NAMES_TO_ADD,
    payload: {
      name
    }
  };
}

// reset todoToAdd

export function resetTodoToAdd(): ActionTypes.ResetTodoToAdd {
  return {
    type: TypeKeys.RESET_TODO_TO_ADD
  };
}
