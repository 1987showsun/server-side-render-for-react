/*
 *   Copyright (c) 2021
 *   All rights reserved.
 */
import React, { Suspense } from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
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

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Index />);