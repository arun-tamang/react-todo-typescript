import * as React from 'react';
import { Link } from 'react-router-dom';

const NavLogInRegister = () => {
  return (
    <ul className="nav navbar-nav navbar-right">
      <li>
        <Link to="/login">
          <i className="fa fa-user" /> Login
        </Link>
      </li>
      <li>
        <Link to="/register">
          <i className="fa fa-user-plus" /> Register
        </Link>
      </li>
    </ul>
  );
};

export default NavLogInRegister;