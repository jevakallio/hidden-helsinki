/*eslint-disable react/display-name, react/no-multi-comp*/

import React from 'react-native';
import AppView from './scenes/app/AppView';

export const getHomeRoute = () => {
  return {
    renderScene() {
      return (
        <AppView />
      );
    }
  };
};
