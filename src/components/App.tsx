import * as React from 'react';
import '../styles/App.css';
import Home from './HomePage';
import About from './About';
import LocalUser from '../domains/LocalUser';
import LogInDetails from '../domains/LogInDetails';
import Test from './Test';

export interface AppProps {
  logInDetails: LogInDetails;
  user: LocalUser;
  fetchTags(): any;
  fetchTodos(): any;
  login(): any;
  receiveTokensAndUserDetails(): any;
  register(): any;
  removeTokensAndUserDetails(): any;
  resetStore(): any;
  setAuthentication(): any;
  setLoginEmail(email: string): any;
  setLoginPassword(password: string): any;
}

const abc = (): void => {
  console.log('hello');
};

const App: any = (props: AppProps) => {

  console.log(props.logInDetails);
  console.log(props.user.authenticated);
  props.user.authenticated = true;
  console.log(props.user.authenticated);
  // props.setLoginPassword('me');
  // props.login();
  // props.fetchTags();
  // props.fetchTodos();

  abc();

  return (
    <div className="App">
      <Home />
      <About />
      <Test keyA={'adsf'} keyB={1} />
    </div>
  );
};

export default App;