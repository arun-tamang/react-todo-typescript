import LocalUser from '../domains/LocalUser';
import { ResetStore, SetAuthentication } from '../domains/ActionTypes';
import RootState from '../domains/RootState';
import LogInDetails from '../domains/LogInDetails';
import LoginActionReturn from '../domains/LoginActionReturn';
import RegisterDetails from './RegisterDetails';

export default interface AppProps {
  logInDetails: LogInDetails;
  registerDetails: RegisterDetails;
  user: LocalUser;

  forcedLogout(): void;
  login(loginDetails: LogInDetails): Promise<LoginActionReturn>;
  logout(): Promise<void>;
  receiveTokensAndUserDetails(): void;
  removeTokensAndUserDetails(): void;
  resetStore(defaultState: RootState): ResetStore;
  setAuthentication(isAuthenticated: boolean): SetAuthentication;
  setLoginEmail(email: string): void;
  setLoginPassword(password: string): void;
  setRegisterFName(fName: string): void;
  setRegisterLName(lName: string): void;
  setRegisterEmail(email: string): void;
  setRegisterPassword(password: string): void;
  register(registerDetails: RegisterDetails): Promise<any>;
}