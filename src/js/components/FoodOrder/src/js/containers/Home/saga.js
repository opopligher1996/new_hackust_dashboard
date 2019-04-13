import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_DATA_SUCCEED, GET_DATA_REQUESTED, REDUX_SAGA_TEST, fetchDataSucceed } from './actions';
import { getInitData } from './calls';

function* fetchUser(action) {
  yield put({type: REDUX_SAGA_TEST, user: null});
}

function* fetchData() {
  console.log('fetchData');
  const data = yield call(getInitData);
  yield put(fetchDataSucceed(data));
}

export const homeSagas = [
    takeLatest(GET_DATA_REQUESTED, fetchData),
];

export function* getInitDataSaga() {
  yield call(fetchData);
}
