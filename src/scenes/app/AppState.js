import {Map} from 'immutable';

const INITIALIZE_GAME = 'app/initialize-game';

const initialState = Map({
  isInitialized: false
});

// reducer

export default function AppReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INITIALIZE_GAME:
      return state.set('isInitialized', true);
    default:
      return state;
  }
}

// actions

export function initialize() {
  return {type: INITIALIZE_GAME};
}
