import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';
import Tokens from '../domains/Tokens';
import SERVICES from '../services/index';
import TypeKeys from '../domains/TypeKeys';
import RootState from '../domains/RootState';
import LogInDetails from '../domains/LogInDetails';
import RegisterDetails from '../domains/RegisterDetails';
import FetchedUsrDetails from '../domains/FetchedUsrDetails';
import LogInResponseData from '../domains/LogInResponseData';
import { getAction, getActionWithPayload } from '../domains/ActionCreators';
import {
  ForcedLogoutReturnType,
  LoginReturnType,
  LogoutReturnType,
  SetAuthentication,
  SetLoginEmail,
  SetLoginPassword,
  SetRegisterFName,
  SetRegisterLName,
  SetRegisterEmail,
  SetRegisterPassword,
  ReceiveTokensAndUserDetails,
  RemoveTokensAndUserDetails,
  ResetStore,
  RegisterReturnType
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

export function forcedLogout(): ForcedLogoutReturnType {
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

// register
export function register(newUserDetails: RegisterDetails): RegisterReturnType {
  return (dispatch: Dispatch<RootState>) => {
    return SERVICES.register(newUserDetails).then((response) => {
      return response;
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

export function setRegisterFName(fName: string): SetRegisterFName {
  return getActionWithPayload(TypeKeys.SET_REGISTER_F_NAME, {fName});
}

export function setRegisterLName(lName: string): SetRegisterLName {
  return getActionWithPayload(TypeKeys.SET_REGISTER_L_NAME, {lName});
}
export function setRegisterEmail(email: string): SetRegisterEmail {
  return getActionWithPayload(TypeKeys.SET_REGISTER_EMAIL, {email});
}
export function setRegisterPassword(password: string): SetRegisterPassword {
  return getActionWithPayload(TypeKeys.SET_REGISTER_PASSWORD, {password});
}
