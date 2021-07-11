/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import React, { Suspense } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { determineUserLang } from "../common/i18n";
import createStore from '../shared/redux/store';

// Components
import App from '../shared/app';

const lang = determineUserLang(
  navigator.languages || [],
  window.location.pathname,
);

const  Index = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Provider store={createStore()}>
        <BrowserRouter basename={`/${lang}`}>
          <Route render={() => <App lang={lang} />} />
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

hydrate(
  <Index />,
  document.getElementById('root')
);
