/* eslint-disable react/prop-types */
/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import Header from './components/header';
import { defaultLang } from '../common/i18n';
import messages from '../common/i18n/messages';

// Stylesheets
import './public/stylesheets/style.scss';

function App({ lang = '' }) {
  return (
    <IntlProvider
      locale="en"
      messages={messages[lang]}
      defaultLocale={defaultLang}
    >
      <Header />
      <Outlet />
    </IntlProvider>
  );
}

App.prototype = {
  lang: PropTypes.string,
};

export default App;
