import "regenerator-runtime/runtime";
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import combinedReducers from './reducers';
import createSagaMiddleware, { END } from 'redux-saga';
import rootSaga from '../js/containers/Root/saga';

export const sagaMiddleware = createSagaMiddleware()

export default function configureStore(preloadedState) {
  const store = createStore(
    combinedReducers,
    preloadedState,
    applyMiddleware(
      sagaMiddleware
    )
  )
  sagaMiddleware.run(rootSaga);
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
