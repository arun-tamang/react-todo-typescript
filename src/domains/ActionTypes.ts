import { Dispatch } from 'redux';
import RootState from './RootState';
import LoginActionReturn from './LoginActionReturn';
import TypeKeys from './TypeKeys';
import { Action, ActionWithPayload } from './ActionCreators';
import {
  AddTodoPayload,
  RemoveTodoPayload,
  EditTodoPayload,
  SetTodoPropsPayload,
  SetMetaDataPayload,
  SetSearchKeywordsPayload,
  SetSearchTagsPayload,
  SetTodoToEditPayload,
  SetTagsPayload,
  SetPopUpEditTitlePayload,
  SetTitleToAddPayload,
  SetExpDateToAddPayload,
  SetTagIdsToAddPayload,
  SetTagNamesToAddPayload,
  ReceiveTokensAndUserDetailsPayload,
  SetAuthenticationPayload,
  SetLoginEmailPayload,
  SetLoginPasswordPayload
} from './payloads';

export type AddTodo = ActionWithPayload<TypeKeys.ADD_TODO, AddTodoPayload>;
export type RemoveTodo = ActionWithPayload<TypeKeys.REMOVE_TODO, RemoveTodoPayload>;
export type EditTodo = ActionWithPayload<TypeKeys.EDIT_TODO, EditTodoPayload>;
export type SetTodoProps = ActionWithPayload<TypeKeys.SET_TODO_PROPS, SetTodoPropsPayload>;
export type SetTodoMetadata = ActionWithPayload<TypeKeys.SET_TODO_META_DATA, SetMetaDataPayload>;
export type SetSearchKeywords = ActionWithPayload<TypeKeys.SET_SEARCH_KEYWORDS, SetSearchKeywordsPayload>;
export type SetSearchTags = ActionWithPayload<TypeKeys.SET_SEARCH_TAGS, SetSearchTagsPayload>;
export type SetTodoToEdit = ActionWithPayload<TypeKeys.SET_TODO_TO_EDIT, SetTodoToEditPayload>;
export type SetTags = ActionWithPayload<TypeKeys.SET_TAGS, SetTagsPayload>;
export type TogglePopUp = Action<TypeKeys.TOGGLE_POPUP>;
export type SetPopUpEditTitle = ActionWithPayload<TypeKeys.SET_POPUP_EDIT_TITLE, SetPopUpEditTitlePayload>;
export type ToggleAddForm = Action<TypeKeys.TOGGLE_ADD_FORM>;
export type SetTitleToAdd = ActionWithPayload<TypeKeys.SET_TITLE_TO_ADD, SetTitleToAddPayload>;
export type SetExpDateToAdd = ActionWithPayload<TypeKeys.SET_EXP_DATE_TO_ADD, SetExpDateToAddPayload>;
export type SetTagIdsToAdd = ActionWithPayload<TypeKeys.SET_TAG_IDS_TO_ADD, SetTagIdsToAddPayload>;
export type SetTagNamesToAdd = ActionWithPayload<TypeKeys.SET_TAG_NAMES_TO_ADD, SetTagNamesToAddPayload>;
export type ResetTodoToAdd = Action<TypeKeys.RESET_TODO_TO_ADD>;

export type ReceiveTokensAndUserDetails =
  ActionWithPayload<TypeKeys.RECEIVE_TOKENS_AND_USERDETAILS, ReceiveTokensAndUserDetailsPayload>;
export type RemoveTokensAndUserDetails = Action<TypeKeys.REMOVE_TOKENS_AND_USERDETAILS>;
export type SetAuthentication = ActionWithPayload<TypeKeys.SET_AUTHENTICATION, SetAuthenticationPayload>;
export type SetLoginEmail = ActionWithPayload<TypeKeys.SET_LOGIN_EMAIL, SetLoginEmailPayload>;
export type SetLoginPassword = ActionWithPayload<TypeKeys.SET_LOGIN_PASSWORD, SetLoginPasswordPayload>;
export type ResetStore = Action<TypeKeys.RESET_STORE>;

export interface LoginReturnType {
  (dispatch: Dispatch<RootState>): Promise<LoginActionReturn | null>;
}

export interface LogoutReturnType {
  (dispatch: Dispatch<RootState>): Promise<void>;
}

export interface FetchTodosReturnType {
  (dispatch: Dispatch<RootState>): Promise<void>;
}

export interface FetchTagsReturnType {
  (dispatch: Dispatch<RootState>): Promise<void>;
}

export interface SearchTodosReturnType {
  (dispatch: Dispatch<RootState>): Promise<void>;
}

export type TodoListActions = 
  | AddTodo
  | RemoveTodo
  | EditTodo
  | SetTodoProps
  | SetTodoMetadata
  | SetSearchKeywords
  | SetSearchTags
  | SetTodoToEdit
  | SetTags
  | TogglePopUp
  | SetPopUpEditTitle
  | ToggleAddForm
  | SetTitleToAdd
  | SetExpDateToAdd
  | SetTagIdsToAdd
  | SetTagNamesToAdd
  | ResetTodoToAdd
  | ResetStore;

export type UserActions = 
  | ReceiveTokensAndUserDetails
  | RemoveTokensAndUserDetails
  | SetAuthentication;

export type LoginActions =
  | SetLoginEmail
  | SetLoginPassword
  | ResetStore;
