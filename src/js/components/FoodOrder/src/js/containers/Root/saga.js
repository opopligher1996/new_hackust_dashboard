import { homeSagas } from '../Home/saga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    ...homeSagas
  ])
}
