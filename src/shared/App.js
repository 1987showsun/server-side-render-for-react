import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './components/header';
import routes from './routes';
import { IntlProvider } from "react-intl";
import { defaultLang } from "../common/i18n";
import messages from "../common/i18n/messages";

// Stylesheets
import './public/stylesheets/style.scss';

const App = ({ lang }) => (
    <IntlProvider
        locale={lang}
        messages={messages[lang]}
        defaultLocale={defaultLang}
    >
        <Header />
        <Switch>
            { 
                routes.map((item, i) => {
                    const { exact=false, path, component } = item;
                    return <Route key={i} exact={exact} path={`${path}`} component={component}/>
                }) 
            }
        </Switch>
    </IntlProvider>
);

App.prototype = {
    lang: PropTypes.string
}

export default App;