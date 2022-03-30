/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React from 'react';
import { Routes, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import Header from './components/header';
import routes from './routes';
import { defaultLang } from '../common/i18n';
import messages from '../common/i18n/messages';

// Stylesheets
import './public/stylesheets/style.scss';

const App = ({ lang }) => {
  return(
    <>
      <IntlProvider
        locale={lang}
        messages={messages[lang]}
        defaultLocale={defaultLang}
      >
        <Header />
        <Outlet/>
      </IntlProvider>
    </>
  )
};

App.prototype = {
  lang: PropTypes.string,
};

export default App;
