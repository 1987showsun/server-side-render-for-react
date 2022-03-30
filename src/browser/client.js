/*
 *   Copyright (c) 2021
 *   All rights reserved.
 */
import React, { Suspense } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router, useRoutes, Outlet, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { determineUserLang } from '../common/i18n';
import createStore from '../shared/redux/store';

// Components
import App from '../shared/App';

import test from '../shared/routes';

const lang = determineUserLang(
  navigator.languages || [],
  window.location.pathname,
);

const Component1 = () => {
  return <>Component 1</>;
};

const Component2 = () => {
  return <>Component 2</>;
};

const App1 = ({lang}) => {
  return useRoutes(test.forSPARouters(lang));
}

const Index = () => {
  return(
    <Suspense fallback={<span>Loading...</span>}>
      <Provider store={createStore()}>
        <Router basename={`/${lang}`}>
          <App1 lang={lang}/>
        </Router>
      </Provider>
    </Suspense>
  );
};

hydrate(
  <Index />,
  document.getElementById('root'),
);
