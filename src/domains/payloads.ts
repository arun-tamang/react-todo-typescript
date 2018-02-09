import TodoItem from './TodoItem';
// import TodoPropsItem from './TodoPropsItem';
import TodoMetaData from './TodoMetaData';
import TagItem from './TagItem';
import FetchedUsrDetails from './FetchedUsrDetails';
// import RootState from './RootState';
import Tokens from './Tokens';
import { Moment } from 'moment';

export interface AddTodoPayload {
  newTodo: TodoItem;
}

export interface RemoveTodoPayload {
  index: number;
}

export interface EditTodoPayload {
  title: string;
  index: number;
}

export interface SetTodoPropsPayload {
  todos: TodoItem[];
}

export interface SetMetaDataPayload {
  metadata: TodoMetaData;
}

export interface SetSearchKeywordsPayload {
  keywords: string;
}

export interface SetSearchTagsPayload {
  newTag: string;
}

export interface SetTodoToEditPayload {
  todoId: number;
}

export interface SetTagsPayload {
  tags: TagItem[];
}

export interface SetPopUpEditTitlePayload {
  title: string;
}

export interface SetTitleToAddPayload {
  title: string;
}

export interface SetExpDateToAddPayload {
  date: Moment;
}

export interface SetTagIdsToAddPayload {
  id: number;
}

export interface SetTagNamesToAddPayload {
  name: string;
}

export interface ReceiveTokensAndUserDetailsPayload {
  tokens: Tokens;
  userDetails: FetchedUsrDetails;
}

export interface SetAuthenticationPayload {
  authenticated: boolean;
}

export interface SetLoginEmailPayload {
  email: string;
}

export interface SetLoginPasswordPayload {
  password: string;
}

export interface SetRegisterFNamePayload {
  fName: string;
}

export interface SetRegisterLNamePayload {
  lName: string;
}

export interface SetRegisterEmailPayload {
  email: string;
}

export interface SetRegisterPasswordPayload {
  password: string;
}

// export interface ResetStorePayload {
//   defaultState: RootState;
// }