import React, {AppRegistry, Component} from 'react-native';
import {Provider} from 'react-redux';
import ExNavigator from '@exponent/react-native-navigator';

import * as router from './src/router';
import store from './src/store';

class HiddenHelsinki extends Component {
  displayName: 'HiddenHelsinki';
  render() {
    return (
      <Provider store={store}>
        <ExNavigator
          showNavigationBar={false}
          initialRoute={router.getHomeRoute()}
        />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('HiddenHelsinki', () => HiddenHelsinki);
