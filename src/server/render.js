/*
 *   Copyright (c) 2021
 *   All rights reserved.
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Routes, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import serialize from 'serialize-javascript';
import App from '../shared/App';
import { determineUserLang } from '../common/i18n';

export default (req, store) => {
  const context = {};
  const initialData = store.getState();
  const lang = determineUserLang(req.acceptsLanguages(), req.path);
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.path} basename={`/${lang}`}>
        <Routes>
          <Route path="/*" element={<App lang={lang} />} />
        </Routes>
      </StaticRouter>
    </Provider>,
  );

  const helmet = Helmet.renderStatic();
  const helmetToString = Object.keys(helmet)
    .filter(key => helmet[key].toString() !== '')
    .map(item => helmet[item].toString());

  return (`
    <html>
      <head>
        ${helmetToString.join('\n')}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no,email=no" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" type="text/css" href="../css/main.css" />
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="../../../../../main.js"></script>
        <script>window.__initialData__ = ${serialize(initialData)}</script>
      </body>
    </html>
  `);
};
