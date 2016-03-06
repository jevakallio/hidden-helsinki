import {connect} from 'react-redux';
import HomeView from './HomeView';

const container = connect(
  state => state.get('game').toObject()
);

export default container(HomeView);
