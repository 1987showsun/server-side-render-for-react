/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { Helmet } from "react-helmet";
import Routes from '../shared/routes';
import serialize from "serialize-javascript";

export default (req, store) => {
  const helmet = Helmet.renderStatic();
  const initialData = store.getState();
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>,
  );
  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <link rel="stylesheet" type="text/css" href="./css/main.css" />
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="./bundle.js"></script>
        <script>window.__initialData__ = ${serialize(initialData)}</script>
      </body>
    </html>
  `;
};