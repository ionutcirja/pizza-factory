// @flow
import { combineReducers } from 'redux';
import client from '../config/apollo';

export default combineReducers({
  apollo: client.reducer(),
});
