import LogInDetails from '../domains/LogInDetails';
import { LoginActions } from '../domains/ActionTypes';
import TypeKeys from '../domains/TypeKeys';
import { initialLoginDetails } from '../initialStoreStates';

const logInDetails = (state: LogInDetails = initialLoginDetails, action: LoginActions) => {
  switch (action.type) {
    case TypeKeys.SET_LOGIN_EMAIL:
      return { ...state, email: action.payload.email };
    case TypeKeys.SET_LOGIN_PASSWORD:
      return { ...state, password: action.payload.password };
    case TypeKeys.RESET_STORE:
      return initialLoginDetails;
    default:
      return state;
  }
};

export default logInDetails;
