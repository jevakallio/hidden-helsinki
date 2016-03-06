import {Map} from 'immutable';
import * as LevelService from '../../services/LevelService';

const SET_LEVEL = 'game/set-level';

const initialState = Map({
  isStarted: false,
  levelIndex: 0,
  levelName: null,
  levelClue: null,
  levelWayHint: null,
  levelDetailHint: null,
  levelExplanation: null
});

// reducer

export default function GameReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LEVEL:
      return state
        .set('isStarted', true)
        .merge(action.payload);
    default:
      return state;
  }
}

export function startGame() {
  return setLevel(0);
}

// actions
export function setLevel(levelIndex) {
  const level = LevelService.getLevel(levelIndex);
  return {
    type: SET_LEVEL,
    payload: level
  };
}
