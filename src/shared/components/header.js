/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">Other page</Link>
    </li>
  </ul>
);

export default Header;
