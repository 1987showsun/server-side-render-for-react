/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import Home from './pages/Home';
import About2 from './pages/about2';
import About from './pages/about';
import App from './App';

export default [{
  ...App,
  routes: [
    {
      component: Home,
      path: '/',
      exact: true,
    },
    {
      component: About,
      path: '/about',
      exact: true,
      routes: [
        {
          component: About2,
          path: '/about/about2'
        }
      ]
    }
  ]
}];
