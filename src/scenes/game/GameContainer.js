import {connect} from 'react-redux';
import GameView from './GameView';

const container = connect(
  state => state.get('game').toObject()
);

export default container(GameView);
