import * as React from 'react';
import { Link } from 'react-router-dom';

interface NavLogoutProps {
  handleLogOut(): void;
}

const NavLogout = (props: NavLogoutProps) => {
  return (
    <ul className="nav navbar-nav navbar-right">
      <li>
        <Link onClick={props.handleLogOut} to="/">
          <i className="fa fa-sign-out" /> Logout
        </Link>
      </li>
    </ul>
  );
};

export default NavLogout;