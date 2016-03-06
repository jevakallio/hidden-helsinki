import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux-immutablejs';
import {Map} from 'immutable';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import game from './scenes/game/GameState';

// register middleware
const logger = createLogger({
  collapsed: true,
  predicate: (getState, action) => {
    return action && action.type !== 'game/update-timer';
  }
});
const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger
)(createStore);

// combine reducers

const reducer = combineReducers({
  game
});

// create store

const initialState = reducer(Map());
export default createStoreWithMiddleware(reducer, initialState);
