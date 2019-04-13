import { combineReducers } from 'redux';
import demo from '../js/containers/Demo/reducer';
import home from '../js/containers/Home/reducer';

export default combineReducers({
  demo,
  home
});
