import React, {AppRegistry, Component} from 'react-native';
import {Provider} from 'react-redux';

import AppContainer from './src/scenes/app/AppContainer';
import store from './src/store';

class HiddenHelsinki extends Component {
  displayName: 'HiddenHelsinki';
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('HiddenHelsinki', () => HiddenHelsinki);
