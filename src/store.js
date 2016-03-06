import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux-immutablejs';
import {Map} from 'immutable';
import createLogger from 'redux-logger';
import app from './scenes/app/AppState';

// register middleware

const createStoreWithMiddleware = applyMiddleware(
  createLogger()
)(createStore);

// combine reducers

const reducer = combineReducers({
  app
});

// create store

const initialState = reducer(Map());
export default createStoreWithMiddleware(reducer, initialState);
