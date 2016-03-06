import React from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import * as AppRouter from './AppRouter';

const AppView = React.createClass({
  displayName: 'AppView',
  render() {
    return (
      <ExNavigator
        showNavigationBar={false}
        initialRoute={AppRouter.getHomeRoute()}
      />
    );
  }
});

export default AppView;
