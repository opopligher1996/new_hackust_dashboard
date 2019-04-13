import { GET_DATA_SUCCEED, REDUX_SAGA_TEST, GET_DATA_REQUESTED, GET_DATA_FETCH_SUCCEED } from './actions';

const initialState = {
  succeed: false,
  content: null,
  saga: false,
  loading: true
}

function homeReducer( state = initialState, action) {
  console.log('home redeucer', action);
  switch (action.type) {
    case GET_DATA_SUCCEED:
      console.log('GET_DATA_SUCCEED reducer');
      return Object.assign({}, state, {
        succeed: true,
        content: action.payload
      });
    case GET_DATA_REQUESTED:
      console.log('GET_DATA_REQUESTED reducer');
      return Object.assign({}, state, {
        loading: true
      });
    case GET_DATA_FETCH_SUCCEED:
      console.log('GET_DATA_FETCH_SUCCEED reducer');
      return Object.assign({}, state, {
        loading: false,
        data: action.payload
      });
    default:
      return state
  }
}

export default homeReducer
