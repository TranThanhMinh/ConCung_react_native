/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { createStore,combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';

AppRegistry.registerComponent(appName, () => App);
