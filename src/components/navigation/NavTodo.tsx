import * as React from 'react';
import { Link } from 'react-router-dom';

const NavTodo = () => {
  return (
    <ul className="nav navbar-nav">
      <li>
        <Link to="/todo">Todos</Link>
      </li>
    </ul>
  );
};

export default NavTodo;