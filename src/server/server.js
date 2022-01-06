/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import express from 'express';
import cors from "cors";
import logger from "morgan";
import { matchRoutes } from 'react-router-config';
import Routes from '../shared/routes';
import renderer from './render';
import createStore from '../shared/redux/store';
import path from 'path';
import { determineUserLang, dir } from "../common/i18n";

const app = express();

const port = process.env.PORT || 5001;
app.use(cors());
app.use(logger('dev'));
app.use(express.static('dist'));
app.set('view engine', 'ejs');
app.set('/server/views', path.join(__dirname, 'views'));

app.get('*', (req, res) => {
  
  const store = createStore();
  const { dispatch } = store;
  const lang = determineUserLang(req.acceptsLanguages(), req.path);
  const routes = matchRoutes(Routes, req.path.replace(`/${lang}`,''));
  const promises = routes.map(({route} ) => {
      return route.component.loadData!=undefined? route.component.loadData(dispatch):null;
    },
  );

  if (req.path.trim() === "/") {
    res.redirect(`${lang}`);
  }

  Promise.all(promises).then(() => {
    const content = renderer(req, store);
    res.send(content);
  });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});