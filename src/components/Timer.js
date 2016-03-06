import React from 'react-native';
import moment from 'moment';
import {fonts} from '../theme';
import {px} from '../screen';
const {
  Animated,
  StyleSheet,
  PropTypes,
  TouchableOpacity,
  Text
} = React;

const Timer = React.createClass({
  displayName: 'Timer',
  propTypes: {
    time: PropTypes.number.isRequired,
    isZoomed: PropTypes.bool.isRequired,
    toggleZoom: PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      scale: new Animated.Value(0)
    };
  },
  componentWillReceiveProps({isZoomed}) {
    if (isZoomed && !this.props.isZoomed) {
      Animated.spring(this.state.scale, {toValue: 1}).start();
    }
    else if (!isZoomed && this.props.isZoomed) {
      Animated.spring(this.state.scale, {toValue: 0}).start();
    }
  },
  render() {
    const formatted = moment(new Date(this.props.time)).format('HH:mm:ss');
    const timerZoom = {
      fontSize: this.state.scale.interpolate({
        inputRange: [0, 1],
        outputRange: [px(40), px(200)]
      })
    };

    return (
      <TouchableOpacity
        onPress={this.props.toggleZoom}
        style={styles.timerContainer}
        >
        <Animated.Text style={[styles.timer, timerZoom]}>
          {formatted}
        </Animated.Text>
      </TouchableOpacity>
    );
  }
});

const styles = StyleSheet.create({
  timerContainer: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    left: 0
  },
  timer: {
    ...fonts.small,
    padding: px(40)
  }
});

export default Timer;
