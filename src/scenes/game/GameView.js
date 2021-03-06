import React from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import Timer from '../../components/Timer';

import * as GameRouter from './GameRouter';
import * as GameState from './GameState';
import * as TimeService from '../../services/TimeService';

import {colors} from '../../theme';
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
    levelColor: PropTypes.string.isRequired,
    timeElapsed: PropTypes.number.isRequired,
    isTimerZoomed: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  },

  componentDidMount() {
    TimeService.timer.addListener('tick', this.updateTimer);
  },

  componentWillUnmount() {
    TimeService.timer.removeListener('tick', this.updateTimer);
  },

  updateTimer(elapsed) {
    this.props.dispatch(GameState.updateTimer(elapsed));
  },

  render() {
    const backgroundColor = colors[this.props.levelColor];
    return (
      <View style={[styles.container, {backgroundColor}]}>
        <ExNavigator
          sceneStyle={{backgroundColor: 'transparent'}}
          showNavigationBar={false}
          initialRoute={GameRouter.getQuestionRoute()}
        />
        <Timer
          time={this.props.timeElapsed}
          isZoomed={this.props.isTimerZoomed}
          toggleZoom={() => {
            this.props.dispatch(this.props.isTimerZoomed
              ? GameState.unzoomTimer()
              : GameState.zoomTimer());
          }}
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
