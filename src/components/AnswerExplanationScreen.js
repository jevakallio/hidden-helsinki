import React from 'react-native';
import {fonts} from '../theme';
import {px} from '../screen';
const {
  StyleSheet,
  PropTypes,
  View,
  Text
} = React;

const AnswerExplanationScreen = React.createClass({
  displayName: 'AnswerExplanationScreen',
  propTypes: {
    levelIndex: PropTypes.number.isRequired,
    levelExplanation: PropTypes.string.isRequired,
    isAnswerCorrect: PropTypes.bool.isRequired,
    isCheckingAnswer: PropTypes.bool.isRequired,
    navigateBack: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  },

  componentWillReceiveProps({isCheckingAnswer, isAnswerCorrect}) {
    if (this.props.isCheckingAnswer && !isCheckingAnswer && !isAnswerCorrect) {
      this.props.navigateBack();
    }
  },

  renderLoadingIndicator() {
    return (
      <View style={styles.container}>
        <Text style={styles.answer}>
          ...
        </Text>
      </View>
    );
  },

  render() {
    if (this.props.isCheckingAnswer) {
      return this.renderLoadingIndicator();
    }

    if (!this.props.isAnswerCorrect) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.answer}>
          {this.props.levelExplanation}
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    padding: px(40)
  },
  answer: {
    ...fonts.medium,
    fontWeight: 'bold'
  }
});

export default AnswerExplanationScreen;
