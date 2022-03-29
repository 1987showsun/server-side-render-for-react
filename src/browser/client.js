/*
 *   Copyright (c) 2021
 *   All rights reserved.
 */
import React, { Suspense } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { determineUserLang } from '../common/i18n';
import createStore from '../shared/redux/store';

// Components
import App from '../shared/App';

const lang = determineUserLang(
  navigator.languages || [],
  window.location.pathname,
);

const Index = () => (
  <Suspense fallback={<span>Loading...</span>}>
    <Provider store={createStore()}>
      <BrowserRouter basename={`/${lang}`}>
        <Routes>
          <Route path="/*" element={<App lang={lang} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </Suspense>
);

hydrate(
  <Index />,
  document.getElementById('root'),
);
