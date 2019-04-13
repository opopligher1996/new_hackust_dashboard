import { INCREMENT,  DECREMENT } from './actions';

const initialState = {
  total: 0
}

function demoReducer( state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      console.log('action', action);
      return Object.assign({}, state, {
        total: state.total + action.change
      });
    case DECREMENT:
      console.log('action', action);
      return Object.assign({}, state, {
        total: state.total - action.change
      });
    default:
      return state
  }
}

export default demoReducer
