/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import React, { Suspense } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import Routes from '../shared/routes';
import createStore from '../shared/redux/store';
import { useSSR } from 'react-i18next';

import "./i18n";

const  InitSSR = ({ initialI18nStore, initialLanguage }) => {
  useSSR(initialI18nStore, initialLanguage);
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Provider store={createStore()}>
        <BrowserRouter>
          {renderRoutes(Routes)}
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

hydrate(
  <InitSSR />,
  document.getElementById('root')
);
