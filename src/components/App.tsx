import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import '../styles/App.css';
import TodoListContainer from '../containers/TodoListContainer';
import Home from './HomePage';
import Login from './forms/Login';
import NavBar from './navigation/NavBar';
import { setTokenInHeader } from '../services/appService/axiosServices';
import AppProps from '../domains/AppProps';
import LogInDetails from '../domains/LogInDetails';
import LoginActionReturn from '../domains/LoginActionReturn';

const App = (props: AppProps) => {

  const handleLogIn = async (event: any, loginDetails: LogInDetails) => {
    let data: LoginActionReturn = await props.login(loginDetails || props.logInDetails);
    if (data) {
      localStorage.setItem(
        'currentUser',
        JSON.stringify({
          refreshToken: data.tokens.refreshToken,
          userDetails: {
            email: data.userDetails.email,
            id: data.userDetails.id
          },
          authenticated: true
        })
      );
      setTokenInHeader(data.tokens.accessToken);
    } else {
      console.log('login unsuccessful');
    }
  };

  return (
    <Router>
      <div className="App">
        <NavBar authenticated={props.user.authenticated} handleLogOut={props.logout} />
        <Route exact={true} path="/" component={Home} />
        <Route
          path="/login"
          render={routerProps =>
            Login(
              routerProps,
              {
                setLoginEmail: props.setLoginEmail,
                setLoginPassword: props.setLoginPassword,
                authenticated: props.user.authenticated,
                handleLogClick: handleLogIn
              }
            )
          }
        />
        <Route
          path="/todo"
          render={(routerProps) => {
            return (
              props.user.authenticated ? (
                <TodoListContainer />
              ) : (
                  <Redirect
                    to={{
                      pathname: '/login',
                      state: { from: routerProps.location }
                    }}
                  />
                )
            );
          }
          }
        />
      </div>
    </Router>
  );
};

export default App;
