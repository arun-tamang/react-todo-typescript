import {
  ReceiveTokensAndUserDetails,
  RemoveTokensAndUserDetails,
  ResetStore,
  SetAuthentication,
  SetLoginEmail,
  SetLoginPassword,
  LoginReturnType,
  LogoutReturnType
} from './ActionTypes';
import RootState from './RootState';
import LogInDetails from './LogInDetails';
import Tokens from './Tokens';
import FetchedUsrDetails from './FetchedUsrDetails';

export default interface MappedAppActions {
  login(loginDetails: LogInDetails): LoginReturnType;
  logout(): LogoutReturnType;
  receiveTokensAndUserDetails(tokens: Tokens, userDetails: FetchedUsrDetails): ReceiveTokensAndUserDetails;
  removeTokensAndUserDetails(): RemoveTokensAndUserDetails;
  resetStore(defaultState: RootState): ResetStore;
  setAuthentication(isAuthenticated: boolean): SetAuthentication;
  setLoginEmail(email: string): SetLoginEmail;
  setLoginPassword(password: string): SetLoginPassword;
}