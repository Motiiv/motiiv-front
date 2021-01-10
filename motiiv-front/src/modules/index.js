import { combineReducers } from 'redux';
import loading from './loading';
import { all } from 'redux-saga/effects';
import user, { userSaga } from './user';
import mymotiiv, { mymotiivSaga } from './mymotiiv';
const rootReducer = combineReducers({
  loading,
  user,
  mymotiiv,
});

export function* rootSaga() {
  yield all([userSaga(), mymotiivSaga()]);
}

export default rootReducer;
