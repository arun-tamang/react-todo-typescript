import * as React from 'react';
import NavHome from './NavHome';
import NavTodo from './NavTodo';
import NavLogInRegister from './NavLogInRegister';
import NavLogout from './NavLogout';
import NavBarProps from '../../domains/NavBarProps';

const NavBar = (props: NavBarProps) => {
  const handleLogOut = () => {
    props.handleLogOut();
  };
  return (
    <nav className="navbar navbar-inverse">
      <div className="container">
        <NavHome />
        <NavTodo />
        {
          (props.authenticated === false) ? (
            <NavLogInRegister />
          ) : (
            <NavLogout handleLogOut={handleLogOut} />
          )
        }
      </div>
    </nav>
  );
};

export default NavBar;
