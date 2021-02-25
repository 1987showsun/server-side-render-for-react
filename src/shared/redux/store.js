/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default () => createStore(reducers, applyMiddleware(thunk));