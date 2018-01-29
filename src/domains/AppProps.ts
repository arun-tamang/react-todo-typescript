import LocalUser from '../domains/LocalUser';
import { ResetStore, SetAuthentication } from '../domains/ActionTypes';
import RootState from '../domains/RootState';
import LogInDetails from '../domains/LogInDetails';
import LoginActionReturn from '../domains/LoginActionReturn';

export default interface AppProps {
  logInDetails: LogInDetails;
  user: LocalUser;

  login(loginDetails: LogInDetails): Promise<LoginActionReturn>;
  logout(): Promise<void>;
  receiveTokensAndUserDetails(): any;
  register(): any;
  removeTokensAndUserDetails(): any;
  resetStore(defaultState: RootState): ResetStore;
  setAuthentication(isAuthenticated: boolean): SetAuthentication;
  setLoginEmail(email: string): any;
  setLoginPassword(password: string): any;
}