/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import Header from './components/header';
import routes from './routes';
import { defaultLang } from '../common/i18n';
import messages from '../common/i18n/messages';

// Stylesheets
import './public/stylesheets/style.scss';

const App = ({ lang }) => (
  <IntlProvider
    locale={lang}
    messages={messages[lang]}
    defaultLocale={defaultLang}
  >
    <Header />
    <Routes>
      {
        routes.map((item, i) => {
          const { path, component } = item;
          const Component = component;
          // eslint-disable-next-line react/no-array-index-key
          return <Route key={i} path={`${path}`} element={<Component />} />;
        })
      }
    </Routes>
  </IntlProvider>
);

App.prototype = {
  lang: PropTypes.string,
};

export default App;
