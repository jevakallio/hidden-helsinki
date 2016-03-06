/*eslint-disable react/display-name, react/no-multi-comp*/

import React from 'react-native';
import HomeContainer from '../home/HomeContainer';
import GameContainer from '../game/GameContainer';

export function getHomeRoute() {
  return {
    renderScene(navigator) {
      return (
        <HomeContainer
          navigateToStart={() => navigator.push(getGameRoute())}
        />
      );
    }
  };
}

export function getGameRoute() {
  return {
    renderScene() {
      return (
        <GameContainer />
      );
    }
  };
}
