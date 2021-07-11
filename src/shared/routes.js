/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import Home from './pages/Home';
import About from './pages/about';

export default [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    component: About,
    path: '/about',
    exact: true
  }
];
