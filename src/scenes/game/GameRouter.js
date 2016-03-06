/*eslint-disable react/display-name, react/no-multi-comp*/

import React, {Navigator} from 'react-native';
import {connect} from 'react-redux';
import Question from '../../components/Question';
import AnswerInput from '../../components/AnswerInput';
import AnswerExplanation from '../../components/AnswerExplanation';

const connectGameState = connect(
  state => state.get('game').toObject()
);
const QuestionContainer = connectGameState(Question);
const AnswerInputContainer = connectGameState(AnswerInput);
const AnswerExplanationContainer = connectGameState(AnswerExplanation);

export function getQuestionRoute() {
  return {
    renderScene(navigator) {
      return (
        <QuestionContainer
          navigateToAnswerInput={() => navigator.push(getAnswerInputRoute())}
        />
      );
    }
  };
}

export function getAnswerInputRoute() {
  return {
    configureScene() {
      return Navigator.SceneConfigs.VerticalUpSwipeJump;
    },
    renderScene(navigator) {
      return (
        <AnswerInputContainer
          navigateBack={() => navigator.pop()}
          navigateToAnswer={() => navigator.push(getExplanationRoute())}
        />
      );
    }
  };
}

export function getExplanationRoute() {
  return {
    configureScene() {
      return Navigator.SceneConfigs.VerticalUpSwipeJump;
    },
    renderScene(navigator) {
      return (
        <AnswerExplanationContainer
          navigateBack={() => navigator.pop()}
        />
      );
    }
  };
}
