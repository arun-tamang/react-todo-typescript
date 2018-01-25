import SERVICES from '../services/index';
import FetchedUsrDetails from '../domains/FetchedUsrDetails';
import { getAction } from '../domains/ActionCreators';
import TypeKeys from '../domains/TypeKeys';
import RootState from '../domains/RootState';
import LogInDetails from '../domains/LogInDetails';
import RegisterDetails from '../domains/RegisterDetails';
import { Dispatch } from 'redux';
import Tokens from '../domains/Tokens';
// import { ReceiveTokensAndUserDetails } from '../domains/ActionTypes';

export function receiveTokensAndUserDetails(tokens: Tokens, userDetails: FetchedUsrDetails) {
  return getAction(TypeKeys.RECEIVE_TOKENS_AND_USERDETAILS, { userDetails });
}

export function removeTokensAndUserDetails() {
  return getAction(TypeKeys.REMOVE_TOKENS_AND_USERDETAILS);
}

export function setAuthentication(authenticated: boolean = false) {
  return getAction(TypeKeys.SET_AUTHENTICATION, { authenticated });
}

export function setLoginEmail(email: string) {
  return getAction(TypeKeys.SET_LOGIN_EMAIL, { email });
}

export function setLoginPassword(password: string) {
  return getAction(TypeKeys.SET_LOGIN_PASSWORD, { password });
}

// login
export function login(userInfo: LogInDetails) {
  return (dispatch: Dispatch<RootState>) => {
    // dispatch(requestTokens(userInfo));
    SERVICES.login(userInfo)
      .then(
      (response) => {
        if (response) {
          let { tokens } = response.data.data;
          let userDetails = response.data.data.userInfo;
          SERVICES.setTokenInHeader(tokens);
          dispatch(receiveTokensAndUserDetails(tokens, userDetails));
          dispatch(setAuthentication(true));
          // return { tokens, userDetails };
        }
        // return { tokens: {}, userDetails: {}};
      },
      (err) => console.log(err)
      )
      .catch((err) => console.log(err));
    // It's a bad idea to use catch(acc to docs) but this prevents from app crashing because
    // services.login throws an error.
  };
}

// register
export function register(newUserDetails: RegisterDetails) {
  console.log('from register', newUserDetails);
  return (dispatch: Dispatch<RootState>) => {
    SERVICES.register(newUserDetails).then((response) => {
      console.log('response from register', response);
      // return response;
    });
  };
}

export function resetStore(defaultState: RootState) {
  return getAction(TypeKeys.RESET_STORE, { defaultState });
}
