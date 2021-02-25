/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Header from './components/header';

// Images
import test_img from './public/images/980x.jpg';

// Stylesheets
import './public/stylesheets/style.scss';

const App = ({ route }) => (
  <div>
    <Header />
    {renderRoutes(route.routes)}
  </div>
);

App.propTypes = {
  route: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
  route: null,
};

export default { component: App };