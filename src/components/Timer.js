import React from 'react-native';
import moment from 'moment';
import {fonts} from '../theme';
import {px} from '../screen';
const {
  StyleSheet,
  PropTypes,
  TouchableOpacity,
  Text
} = React;

const Timer = React.createClass({
  displayName: 'Timer',
  propTypes: {
    time: PropTypes.number.isRequired
  },
  render() {
    const formatted = moment(new Date(this.props.time)).format('HH:mm:ss');
    return (
        <TouchableOpacity style={styles.timerContainer}>
          <Text style={styles.timer}>
            {formatted}
          </Text>
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
