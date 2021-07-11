/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Helmet } from "react-helmet";
import serialize from "serialize-javascript";
import App from '../shared/app';
import { determineUserLang, dir } from "../common/i18n";

export default (req, store) => {
  const context = {};
  const helmet = Helmet.renderStatic();
  const initialData = store.getState();
  const lang = determineUserLang(req.acceptsLanguages(), req.path);
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.path} basename={`/${lang}`}>
        <Route render= {() => <App lang={lang} />} />
      </StaticRouter>
    </Provider>,
  );
  return`
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <link rel="stylesheet" type="text/css" href="../css/main.css" />
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="../bundle.js"></script>
        <script>window.__initialData__ = ${serialize(initialData)}</script>
      </body>
    </html>
  `;
};