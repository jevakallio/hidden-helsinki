import React from 'react-native';
import {colors, fonts} from '../theme';
import {px, vw, vh, dpi} from '../screen';
import * as GameState from '../scenes/game/GameState';
import AnswerInputBox from './AnswerInputBox';

const {
  LayoutAnimation,
  TouchableOpacity,
  StyleSheet,
  PropTypes,
  Text,
  View
} = React;

const INPUT_PADDING = vw(10);
const PLACEHOLDER_COLOR = 'rgba(255, 255, 255, 0.4)';

const AnswerInputScreen = React.createClass({
  displayName: 'AnswerInputScreen',
  propTypes: {
    levelIndex: PropTypes.number.isRequired,
    navigateBack: PropTypes.func.isRequired,
    navigateToAnswer: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      value: ''
    };
  },

  onChangeText(value) {
    if (this.state.value.length === 0 || value.length === 0) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }

    this.setState({value});
  },

  attemptAnswer() {
    const answer = this.state.value;
    this.props.dispatch(GameState.attemptAnswer(answer));
    this.props.navigateToAnswer();
  },

  render() {
    const value = this.state.value;
    return (
      <View style={styles.container}>
        <AnswerInputBox
          value={value}
          onChangeText={this.onChangeText}
        />
        {!!value &&
          <TouchableOpacity onPress={this.attemptAnswer}>
            <Text style={styles.answerButton}>
              THIS IS IT
            </Text>
          </TouchableOpacity>
        }
        <TouchableOpacity onPress={this.props.navigateBack}>
          <Text style={styles.backButton}>
            BACK TO CLUE
          </Text>
        </TouchableOpacity>
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
    padding: INPUT_PADDING
  },
  inputContainer: {
    position: 'absolute',
    left: INPUT_PADDING,
    right: INPUT_PADDING,
    top: vh(30)
  },
  backButton: {
    ...fonts.small,
    fontWeight: '100',
    padding: px(40)
  },

  answerButton: {
    ...fonts.medium,
    fontWeight: '200',
    borderColor: colors.white,
    borderWidth: dpi(2),
    padding: px(40),
    marginTop: px(80),
    marginBottom: px(40)
  }
});

export default AnswerInputScreen;
