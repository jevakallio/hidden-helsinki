import {Map} from 'immutable';
import * as LevelService from '../../services/LevelService';
import * as TimeService from '../../services/TimeService';

const SET_LEVEL = 'game/set-level';
const ANSWER_ATTEMPT = 'game/answer-attempt';
const ANSWER_RESULT = 'game/answer-result';
const UPDATE_TIMER = 'game/update-timer';
const ZOOM_TIMER = 'game/zoom-timer';
const UNZOOM_TIMER = 'game/unzoom-timer';

const initialState = Map({
  isCheckingAnswer: false,
  isStarted: false,
  isAnswerCorrect: false,
  isTimerZoomed: false,
  answerAttempt: null,
  timeElapsed: 0,
  levelIndex: 0,
  levelName: null,
  levelClue: null,
  levelClueFontSize: null,
  levelWayHint: null,
  levelDetailHint: null,
  levelExplanation: null,
  levelExplanationFontSize: null,
  levelColor: null,
  levelImage: null
});

// reducer

export default function GameReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LEVEL:
      //resets state back to initial
      return initialState
        .set('isStarted', true)
        .set('isTimerZoomed', false)
        .merge(action.payload);
    case ANSWER_ATTEMPT:
      return state
        .set('isCheckingAnswer', true)
        .set('answerAttempt', action.payload);
    case ANSWER_RESULT:
      return state
        .set('isAnswerCorrect', action.payload)
        .set('isCheckingAnswer', false);
    case UPDATE_TIMER:
      return state
        .set('timeElapsed', action.payload);
    case ZOOM_TIMER:
      return state.set('isTimerZoomed', true);
    case UNZOOM_TIMER:
      return state.set('isTimerZoomed', false);
    default:
      return state;
  }
}

export function startGame() {
  TimeService.start();
  const level = LevelService.getLevel(0);
  return {
    type: SET_LEVEL,
    payload: level
  };
}

export function setLevel(levelIndex) {
  TimeService.resume();
  const level = LevelService.getLevel(levelIndex);
  return {
    type: SET_LEVEL,
    payload: level
  };
}

export function updateTimer(elapsed) {
  return {
    type: UPDATE_TIMER,
    payload: elapsed
  };
}

export function zoomTimer() {
  return {
    type: ZOOM_TIMER
  };
}

export function unzoomTimer() {
  return {
    type: UNZOOM_TIMER
  };
}

export function attemptAnswer(answer) {
  return async (dispatch, getState) => {
    dispatch({
      type: ANSWER_ATTEMPT,
      payload: answer
    });
    const levelIndex = getState().getIn(['game', 'levelIndex']);
    const isCorrect = await LevelService.checkAnswer(levelIndex, answer);

    if (isCorrect) {
      TimeService.pause();
      dispatch(zoomTimer());
    }

    dispatch({type: ANSWER_RESULT, payload: isCorrect});
  };
}
