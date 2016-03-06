import React from 'react-native';
import {colors, fonts} from '../theme';
import {px, vw, vh, dpi} from '../screen';
const {
  LayoutAnimation,
  TouchableOpacity,
  StyleSheet,
  PropTypes,
  TextInput,
  Text,
  View
} = React;

const INPUT_PADDING = vw(10);
const PLACEHOLDER_COLOR = 'rgba(255, 255, 255, 0.4)';

const Question = React.createClass({
  displayName: 'Question',
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

  render() {
    const value = this.state.value;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.answerInput}
            value={value}
            onChangeText={this.onChangeText}
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
        {!!value &&
          <TouchableOpacity>
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
  answerInput: {
    ...fonts.large,
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: vw(100) - INPUT_PADDING * 2,
    height: px(90)
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

export default Question;
