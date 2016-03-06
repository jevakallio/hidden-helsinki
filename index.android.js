import React, {AppRegistry, Component} from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import * as router from './src/router';

class HiddenHelsinki extends Component {
  displayName: 'HiddenHelsinki';
  render() {
    return (
      <ExNavigator
        showNavigationBar={false}
        initialRoute={router.getHomeRoute()}
      />
    );
  }
}

AppRegistry.registerComponent('HiddenHelsinki', () => HiddenHelsinki);
