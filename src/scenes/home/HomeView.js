import React from 'react-native';
import {colors, fonts} from '../../theme';
import * as GameState from '../game/GameState';
const {
  StyleSheet,
  PropTypes,
  TouchableOpacity,
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
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.dispatch(GameState.startGame())}>
          <Text style={styles.title}>Hidden Helsinki</Text>
          <Text style={styles.subtitle}>TAP TO PLAY</Text>
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
    backgroundColor: colors.magenta
  },
  title: {
    ...fonts.title,
    textAlign: 'center'
  },
  subtitle: {
    ...fonts.small,
    alignSelf: 'center',
    fontWeight: '100'
  }
});

export default HomeView;
