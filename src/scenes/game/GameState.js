import {Map} from 'immutable';
import * as LevelService from '../../services/LevelService';

const SET_LEVEL = 'game/set-level';
const ANSWER_ATTEMPT = 'game/answer-attempt';
const ANSWER_RESULT = 'game/answer-result';

const initialState = Map({
  isCheckingAnswer: false,
  isStarted: false,
  isAnswerCorrect: false,
  answerAttempt: null,

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
      //resets state back to initial
      return initialState
        .set('isStarted', true)
        .merge(action.payload);
    case ANSWER_ATTEMPT:
      return state
        .set('isCheckingAnswer', true)
        .set('answerAttempt', action.payload);
    case ANSWER_RESULT:
      return state
      .set('isAnswerCorrect', action.payload)
      .set('isCheckingAnswer', false)
    default:
      return state;
  }
}

export function startGame() {
  return setLevel(0);
}

export function attemptAnswer(answer) {
  return async (dispatch, getState) => {
    dispatch({
      type: ANSWER_ATTEMPT,
      payload: answer
    });
    const levelIndex = getState().getIn(['game', 'levelIndex']);
    const isCorrect = await LevelService.checkAnswer(levelIndex, answer);
    dispatch({type: ANSWER_RESULT, payload: isCorrect});
  };
}

// actions
export function setLevel(levelIndex) {
  const level = LevelService.getLevel(levelIndex);
  return {
    type: SET_LEVEL,
    payload: level
  };
}
