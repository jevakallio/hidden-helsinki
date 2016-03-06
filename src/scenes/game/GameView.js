import React from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';

import * as GameRouter from './GameRouter';

import {colors} from '../../theme';
import {px} from '../../screen';

const {
  StyleSheet,
  PropTypes,
  View
} = React;

const GameView = React.createClass({
  displayName: 'GameView',
  propTypes: {
    levelIndex: PropTypes.number.isRequired,
    levelName: PropTypes.string.isRequired,
    levelClue: PropTypes.string.isRequired,
    levelWayHint: PropTypes.string.isRequired,
    levelDetailHint: PropTypes.string.isRequired,
    levelExplanation: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  },

  render() {

    return (
      <View style={styles.container}>
        <ExNavigator
          showNavigationBar={false}
          initialRoute={GameRouter.getQuestionRoute({
            levelIndex: this.props.levelIndex,
            levelClue: this.props.levelClue,
            dispatch: this.props.dispatch
          })}
        />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default GameView;
