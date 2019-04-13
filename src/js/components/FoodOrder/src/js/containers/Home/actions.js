export const GET_DATA_SUCCEED = 'GET_DATA_SUCCEED';
export const REDUX_SAGA_TEST = 'REDUX_SAGA_TEST';
export const GET_DATA_REQUESTED = 'GET_DATA_REQUESTED';
export const GET_DATA_FETCH_SUCCEED = 'GET_DATA_FETCH_SUCCEED';

export function fakeRequest(payload) {
  console.log('fakeRequest called');
  return {
    type: GET_DATA_SUCCEED,
    payload
  };
}

export function requestData() {
  console.log('requestData');
  return {
    type: GET_DATA_REQUESTED,
  };
}

export function fetchDataSucceed(payload) {
  return {
    type: GET_DATA_FETCH_SUCCEED,
    payload
  };
}
