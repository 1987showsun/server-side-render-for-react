/*
 *   Copyright (c) 2021
 *   All rights reserved.
 */
import React from 'react';
import { Navigate } from 'react-router-dom';

import App from './App';
import Home from './pages/Home';
import About from './pages/about';
import Test from './pages/test';
import Test1 from './pages/test/test1';
import Test1_1 from './pages/test/test1-1';

const forSPARouters = (lang) => [
  {
    path: '/*',
    element: <App lang={lang} />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'test',
        element: <Test />,
        children: [
          {
            path: 'test1',
            element: <Test1 />,
            children: [
              {
                path: ':id',
                element: <Test1_1 />,
              },
            ],
          },
          {
            path: '*',
            element: <Navigate to="/test/test1" replace="true" />,
          },
        ],
      },
      {
        path: '*',
        element: <Navigate to="/" replace="true" />,
      },
    ],
  },
];

const forSSRRouters = [
  {
    component: Home,
    path: '/',
  },
  {
    component: About,
    path: '/about',
  },
  {
    component: Test,
    path: '/test',
  },
  {
    component: Test1,
    path: '/test/test1',
  },
];

export default { forSPARouters, forSSRRouters };
