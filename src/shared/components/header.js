/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from "react-intl";

const Header = () => (
  <ul>
    <li>
      <Link to="/"><FormattedMessage id="nav.home"/></Link>
    </li>
    <li>
      <Link to="/about"><FormattedMessage id="nav.about"/></Link>
    </li>
    <li>
      <Link to="/test"><FormattedMessage id="nav.test"/></Link>
    </li>
  </ul>
);

export default Header;
