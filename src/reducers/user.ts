import LocalUser from '../domains/LocalUser';
import { UserActions } from '../domains/ActionTypes';
import TypeKeys from '../domains/TypeKeys';
import { initialUser } from '../initialStoreStates';

const user = (state: LocalUser = initialUser, action: UserActions) => {
  switch (action.type) {
    case TypeKeys.SET_AUTHENTICATION:
      return {
        ...state,
        authenticated: action.payload.authenticated
      };
    case TypeKeys.RECEIVE_TOKENS_AND_USERDETAILS:
      return {
        ...state,
        tokens: action.payload.tokens,
        userDetails: {
          email: action.payload.userDetails.email,
          id: action.payload.userDetails.id
        }
      };
    case TypeKeys.REMOVE_TOKENS_AND_USERDETAILS:
      return {
        ...state,
        tokens: '',
        userDetails: ''
      };
    default:
      return state;
  }
};

export default user;
