import React from 'react-native';
import {colors, fonts} from '../../theme';
import {vw, vh} from '../../screen';
import * as GameState from '../game/GameState';
const {
  StyleSheet,
  PropTypes,
  TouchableOpacity,
  Image,
  View,
  Text
} = React;

const HomeView = React.createClass({
  displayName: 'HomeView',
  propTypes: {
    isStarted: PropTypes.bool.isRequired,
    navigateToStart: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  },

  componentWillReceiveProps({isStarted}) {
    if (!this.props.isStarted && isStarted) {
      this.props.navigateToStart();
    }
  },

  render() {
    return (
      <Image
        source={require('../../../images/splash.jpg')}
        style={styles.container}
      >
        <TouchableOpacity onPress={() => this.props.dispatch(GameState.startGame())}>
          <Text style={styles.title}>Hidden Helsinki</Text>
          <Text style={styles.subtitle}>TAP TO PLAY</Text>
        </TouchableOpacity>
      </Image>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: vw(100),
    height: vh(100),
    backgroundColor: 'transparent'
  },
  title: {
    ...fonts.title,
    color: colors.white,
    textAlign: 'center',
    marginBottom: vh(20)
  },
  subtitle: {
    ...fonts.small,
    alignSelf: 'center',
    fontWeight: '100'
  }
});

export default HomeView;
