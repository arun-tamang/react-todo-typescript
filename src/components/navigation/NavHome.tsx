import * as React from 'react';
import { Link } from 'react-router-dom';

const NavHome = () => {
  return (
    <div className="navbar-header">
      <Link to="/" className="navbar-brand">
        WhatToDo?
      </Link>
    </div>
  );
};

export default NavHome;