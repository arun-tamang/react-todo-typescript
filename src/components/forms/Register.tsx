import * as React from 'react';
import { Redirect } from 'react-router-dom';

export interface RegisterProps {
  isAuthenticated: boolean;
  handleSubmit(): void;
  setRegisterFName(fName: string): void;
  setRegisterLName(lName: string): void;
  setRegisterEmail(email: string): void;
  setRegisterPassword(password: string): void;
}

const Register = (props: RegisterProps) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.handleSubmit();
  };

  const handleFNameChange = (e: any) => {
    props.setRegisterFName(e.target.value);
  };

  const handleLNameChange = (e: any) => {
    props.setRegisterLName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    props.setRegisterEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    props.setRegisterPassword(e.target.value);
  };

  return props.isAuthenticated ? (
    <Redirect to="/" />
  ) : (
      <div className="container">
        <form style={{ margin: '0 auto', width: '40%' }} onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <div>
              <input
                className="form-control"
                name="firstName"
                type="text"
                placeholder="First Name"
                required={true}
                onChange={handleFNameChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <div>
              <input
                className="form-control"
                name="lastName"
                type="text"
                placeholder="Last Name"
                required={true}
                onChange={handleLNameChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <div>
              <input
                className="form-control"
                name="email"
                type="email"
                placeholder="Email"
                required={true}
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <div>
              <input
                className="form-control"
                name="password"
                type="password"
                placeholder="Password"
                required={true}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-block btn-primary btn-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
};

export default Register;
