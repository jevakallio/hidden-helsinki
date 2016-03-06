/*eslint-disable react/display-name, react/no-multi-comp*/

import React from 'react-native';
import Question from '../../components/Question';

export function getQuestionRoute({levelIndex, levelClue, dispatch}) {
  return {
    renderScene() {
      return (
        <Question
          levelIndex={levelIndex}
          levelClue={levelClue}
          dispatch={dispatch}
        />
      );
    }
  };
}
