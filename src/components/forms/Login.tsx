import * as React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';

const Login = (routerProps: RouteComponentProps<any>, { ...props }) => {
  const redirect = () => {
    const { from } = routerProps.location.state || { from: { pathname: '/' } };
    return <Redirect to={from} />;
  };

  const handleRegisterClick = () => {
    routerProps.history.push('/register');
  };

  const handleEmailChange = (e: any) => {
    props.setLoginEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    props.setLoginPassword(e.target.value);
  };

  return props.authenticated ? (
    redirect()
  ) : (
    <div className="container">
      <div className="row">
        <form style={{ margin: '0 auto', width: '40%' }}>
          <div className="form-group">
            <label htmlFor="inputEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              onChange={handleEmailChange}
              placeholder="user@mail.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              className="form-control"
              id="inputPassword"
              type="password"
              onChange={handlePasswordChange}
              placeholder="password"
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-block btn-primary btn-lg"
              onClick={props.handleLogClick}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
      <div className="row">
        <div style={{ margin: '0 auto', width: '40%' }}>
          <p>Not registered yet? Register Now</p>
          <button
            type="button"
            onClick={handleRegisterClick}
            className="btn btn-default btn-info btn-lg"
          >
            {' '}
            Register{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
