import {connect} from 'react-redux';
import AppView from './AppView';

const container = connect(
  state => state.get('app').toObject()
);

export default container(AppView);
