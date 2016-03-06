import React from 'react-native';
import {fonts, colors} from '../theme';
import {px, vw, vh, dpi} from '../screen';
const {
  StyleSheet,
  PropTypes,
  TextInput,
  View
} = React;

const INPUT_PADDING = vw(10);
const PLACEHOLDER_COLOR = 'rgba(255, 255, 255, 0.4)';

const AnswerInputBox = React.createClass({
  displayName: 'AnswerInputBox',
  propTypes: {
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired
  },

  render() {
    const {value} = this.props;
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.answerInput}
          value={value}
          onChangeText={this.props.onChangeText}
          placeholder='Your answer'
          placeholderTextColor={PLACEHOLDER_COLOR}
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='default'
          returnKeyType='done'
          autoFocus={true}
          />
        <View style={[styles.border, value === '' && styles.placeholderBorder]} />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  inputContainer: {
    position: 'absolute',
    left: INPUT_PADDING,
    right: INPUT_PADDING,
    top: vh(30)
  },
  answerInput: {
    ...fonts.large,
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: vw(100) - INPUT_PADDING * 2,
    height: px(90)
  },
  border: {
    marginTop: px(40),
    width: vw(100) - INPUT_PADDING * 2,
    backgroundColor: colors.white,
    height: dpi(2)
  },
  placeholderBorder: {
    backgroundColor: PLACEHOLDER_COLOR
  }
});

export default AnswerInputBox;
