import React from 'react-native';
import {colors, fonts} from '../theme';
import {px} from '../screen';
const {
  StyleSheet,
  PropTypes,
  TouchableOpacity,
  View,
  Text
} = React;

const Question = React.createClass({
  displayName: 'Question',
  propTypes: {
    levelIndex: PropTypes.number.isRequired,
    levelClue: PropTypes.string.isRequired,
    levelClueFontSize: PropTypes.number.isRequired,
    levelColor: PropTypes.string.isRequired,
    navigateToAnswerInputScreen: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  },

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.props.navigateToAnswerInputScreen}
          style={styles.clueContainer}
          >
          <Text style={[styles.clue, {
            backgroundColor: colors[this.props.levelColor],
            fontSize: this.props.levelClueFontSize
          }]}>
            {this.props.levelClue}
          </Text>
          {this.props.levelIndex === 0 &&
           <Text style={styles.subtitle}>
            TAP TO ANSWER
           </Text>
          }
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
    backgroundColor: 'transparent'
  },
  clueContainer: {
    padding: px(80)
  },
  clue: {
    ...fonts.medium,
    fontWeight: 'bold'
  },
  subtitle: {
    ...fonts.small,
    fontWeight: '100'
  }
});

export default Question;
