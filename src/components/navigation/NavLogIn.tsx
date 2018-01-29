import * as React from 'react';
import { Link } from 'react-router-dom';

const NavLogIn = () => {
  return (
    <ul className="nav navbar-nav navbar-right">
      <li>
        <Link to="/login">
          <i className="fa fa-user" /> Login
        </Link>
      </li>
    </ul>
  );
};

export default NavLogIn;