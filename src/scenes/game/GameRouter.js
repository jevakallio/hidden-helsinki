/*eslint-disable react/display-name, react/no-multi-comp*/

import React, {Navigator} from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import Question from '../../components/Question';
import AnswerInput from '../../components/AnswerInput';

export function getQuestionRoute({levelIndex, levelClue, dispatch}) {
  return {
    renderScene(navigator) {
      return (
        <Question
          levelIndex={levelIndex}
          levelClue={levelClue}
          navigateToAnswerInput={() => navigator.push(getAnswerInputRoute({
            levelIndex,
            dispatch
          }))}
          dispatch={dispatch}
        />
      );
    }
  };
}

export function getAnswerInputRoute({levelIndex, dispatch}) {
  return {
    configureScene() {
      return Navigator.SceneConfigs.VerticalUpSwipeJump;
    },
    renderScene(navigator) {
      return (
        <AnswerInput
          levelIndex={levelIndex}
          navigateBack={() => navigator.pop()}
          navigateToAnswer={() => navigator.push(getExplanationRoute())}
          dispatch={dispatch}
        />
      );
    }
  };
}

export function getExplanationRoute() {

};
