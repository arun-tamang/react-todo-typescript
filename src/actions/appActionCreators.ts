import SERVICES from '../services/index';
import FetchedUsrDetails from '../domains/FetchedUsrDetails';
import { getAction, getActionWithPayload } from '../domains/ActionCreators';
import TypeKeys from '../domains/TypeKeys';
import RootState from '../domains/RootState';
import LogInDetails from '../domains/LogInDetails';
import { Dispatch } from 'redux';
import Tokens from '../domains/Tokens';
import { AxiosResponse } from 'axios';
import LogInResponseData from '../domains/LogInResponseData';
import {
  LoginReturnType,
  LogoutReturnType,
  SetAuthentication,
  SetLoginEmail,
  SetLoginPassword,
  ReceiveTokensAndUserDetails,
  RemoveTokensAndUserDetails,
  ResetStore
} from '../domains/ActionTypes';

// login
export function login(userInfo: LogInDetails): LoginReturnType {
  return (dispatch: Dispatch<RootState>) => {
    return SERVICES.login(userInfo)
      .then((response: AxiosResponse<LogInResponseData>) => {
        if (response) {
          let { tokens } = response.data;
          let userDetails: FetchedUsrDetails = response.data.userInfo;
          SERVICES.setTokenInHeader(tokens.accessToken);
          dispatch(receiveTokensAndUserDetails(tokens, userDetails));
          dispatch(setAuthentication(true));
          return { tokens, userDetails };
        }
        return null;
      });
  };
}

export function forcedLogout() {
  return (dispatch: Dispatch<RootState>) => {
    dispatch(setAuthentication(false));
    dispatch(removeTokensAndUserDetails());
    localStorage.setItem(
      'currentUser',
      JSON.stringify({
        userEmail: '',
        authenticated: false
      })
    );
    dispatch(resetStore());
  };
}

export function logout(): LogoutReturnType {
  return (dispatch: Dispatch<RootState>) => {

    return SERVICES.logout()
      .then((data) => {
        if (data) {
          dispatch(setAuthentication(false));
          dispatch(removeTokensAndUserDetails());
          localStorage.setItem(
            'currentUser',
            JSON.stringify({
              userEmail: '',
              authenticated: false
            })
          );
          dispatch(resetStore());
        } else {
          console.log('can\'t seem to logout');
        }
      });
  };
}

export function receiveTokensAndUserDetails(tokens: Tokens, userDetails: FetchedUsrDetails)
  : ReceiveTokensAndUserDetails {
  return getActionWithPayload(TypeKeys.RECEIVE_TOKENS_AND_USERDETAILS, { tokens, userDetails });
}

export function removeTokensAndUserDetails(): RemoveTokensAndUserDetails {
  return getAction(TypeKeys.REMOVE_TOKENS_AND_USERDETAILS);
}

export function resetStore(): ResetStore {
  return getAction(TypeKeys.RESET_STORE);
}

export function setAuthentication(authenticated: boolean = false): SetAuthentication {
  return getActionWithPayload(TypeKeys.SET_AUTHENTICATION, { authenticated });
}

export function setLoginEmail(email: string): SetLoginEmail {
  return getActionWithPayload(TypeKeys.SET_LOGIN_EMAIL, { email });
}

export function setLoginPassword(password: string): SetLoginPassword {
  return getActionWithPayload(TypeKeys.SET_LOGIN_PASSWORD, { password });
}
