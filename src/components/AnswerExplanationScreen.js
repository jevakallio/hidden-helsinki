import React from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as GameState from '../scenes/game/GameState';
import {getLevelImage} from '../util/levelImages';
import {fonts, colors, transparent} from '../theme';
import {px, vw, vh, screenHeight} from '../screen';
const {
  StyleSheet,
  PropTypes,
  Image,
  View,
  Animated,
  ScrollView,
  TouchableOpacity,
  Text
} = React;

const AnswerExplanationScreen = React.createClass({
  displayName: 'AnswerExplanationScreen',
  propTypes: {
    levelIndex: PropTypes.number.isRequired,
    levelExplanation: PropTypes.string.isRequired,
    levelColor: PropTypes.string.isRequired,
    levelImage: PropTypes.string.isRequired,
    levelExplanationFontSize: PropTypes.number.isRequired,
    isAnswerCorrect: PropTypes.bool.isRequired,
    isTimerZoomed: PropTypes.bool.isRequired,
    isCheckingAnswer: PropTypes.bool.isRequired,
    navigateBack: PropTypes.func.isRequired,
    navigateToNextLevel: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      timerScale: new Animated.Value(0)
    };
  },

  componentWillReceiveProps({isCheckingAnswer, isAnswerCorrect, isTimerZoomed}) {
    if (this.props.isCheckingAnswer && !isCheckingAnswer && !isAnswerCorrect) {
      this.props.navigateBack();
    } else if (isTimerZoomed && !this.props.isTimerZoomed) {
      Animated.spring(this.state.timerScale, {toValue: 1}).start();
    }
    else if (!isTimerZoomed && this.props.isTimerZoomed) {
      Animated.spring(this.state.timerScale, {toValue: 0}).start();
    }
  },

  renderLoadingIndicator() {
    return (
      <View style={styles.container}>
        <Text style={styles.answer}>
          ...
        </Text>
      </View>
    );
  },

  onScroll(e) {
    if (this.props.isTimerZoomed &&
      e.nativeEvent.contentOffset.y > (screenHeight / 4)) {
      this.props.dispatch(GameState.unzoomTimer());
    }
  },

  scrollPastHero() {
    this._scrollView.scrollTo({y: screenHeight});
  },

  goToNextLevel() {
    this.props.dispatch(GameState.setLevel(this.props.levelIndex + 1));
    this.props.navigateToNextLevel();
  },

  render() {
    if (this.props.isCheckingAnswer) {
      return this.renderLoadingIndicator();
    }

    if (!this.props.isAnswerCorrect) {
      return null;
    }

    const gradientSize = {
      height: this.state.timerScale.interpolate({
        inputRange: [0, 1],
        outputRange: [vh(12), vh(35)]
      })
    };

    const {levelColor, levelImage, levelExplanationFontSize} = this.props;

    return (
      <ScrollView
        ref={(scrollView) => this._scrollView = scrollView}
        scrollEventThrottle={100}
        onScroll={this.onScroll}
        style={{flex: 1}}
        contentContainerStyle={styles.container}
        >
        <Image
          resizeMode='cover'
          source={getLevelImage(levelImage)}
          style={styles.heroImage}
        >
          <Animated.View style={[styles.topGradient, gradientSize]}>
            <LinearGradient
              style={{flex: 1}}
              colors={[
                transparent[levelColor](1),
                transparent[levelColor](0)
              ]}
            />
          </Animated.View>
          <TouchableOpacity onPress={this.scrollPastHero} style={styles.arrowDown}>
            <Image
              resizeMode='contain'
              style={{height: vh(5)}}
              source={require('../../images/chevron-down.png')}
              />
          </TouchableOpacity>
        </Image>
        <Text style={styles.answer}>
          {this.props.levelExplanation}
        </Text>
        <TouchableOpacity onPress={this.goToNextLevel}>
          <Text style={[styles.nextLevelButton, {color: colors[levelColor]}]}>
            GO TO NEXT CLUE
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  heroImage: {
    width: vw(100),
    height: vh(100)
  },
  answer: {
    ...fonts.medium,
    paddingTop: px(120),
    paddingLeft: px(40),
    paddingRight: px(40),
    fontWeight: 'bold'
  },
  topGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: vw(100),
    height: px(40)
  },
  arrowDown: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: vh(10),
    alignItems: 'center',
    justifyContent: 'center'
  },
  nextLevelButton: {
    ...fonts.medium,
    fontWeight: 'bold',
    backgroundColor: colors.white,
    paddingTop: px(40),
    paddingBottom: px(40),
    paddingLeft: px(60),
    paddingRight: px(60),
    marginTop: px(80),
    marginBottom: px(80)
  }
});

export default AnswerExplanationScreen;
