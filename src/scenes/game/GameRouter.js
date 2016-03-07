/*eslint-disable react/display-name, react/no-multi-comp*/

import React, {Navigator} from 'react-native';
import {connect} from 'react-redux';
import Question from '../../components/Question';
import AnswerInputScreen from '../../components/AnswerInputScreen';
import AnswerExplanationScreen from '../../components/AnswerExplanationScreen';

const connectGameState = connect(
  state => state.get('game').toObject()
);
const QuestionContainer = connectGameState(Question);
const AnswerInputScreenContainer = connectGameState(AnswerInputScreen);
const AnswerExplanationScreenContainer = connectGameState(AnswerExplanationScreen);

export function getQuestionRoute() {
  return {
    configureScene() {
      return Navigator.SceneConfigs.FloatFromRight;
    },
    renderScene(navigator) {
      return (
        <QuestionContainer
          navigateToAnswerInputScreen={() => navigator.push(getAnswerInputScreenRoute())}
        />
      );
    }
  };
}

export function getAnswerInputScreenRoute() {
  return {
    configureScene() {
      return Navigator.SceneConfigs.VerticalUpSwipeJump;
    },
    renderScene(navigator) {
      return (
        <AnswerInputScreenContainer
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
      return Navigator.SceneConfigs.FadeAndroid;
    },
    renderScene(navigator) {
      return (
        <AnswerExplanationScreenContainer
          navigateBack={() => navigator.pop()}
          navigateToNextLevel={() => navigator.push(getQuestionRoute())}
        />
      );
    }
  };
}
