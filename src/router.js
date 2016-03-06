/*eslint-disable react/display-name, react/no-multi-comp*/

import React from 'react-native';
import AppContainer from './scenes/app/AppContainer';

export const getHomeRoute = () => {
  return {
    renderScene() {
      return (
        <AppContainer />
      );
    }
  };
};
