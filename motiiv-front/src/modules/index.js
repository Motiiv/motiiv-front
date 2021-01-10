import { combineReducers } from 'redux';
import loading from './loading';
import { all } from 'redux-saga/effects';
import user, { userSaga } from './user';
import auth, { authSaga } from './auth';
import mymotiiv, { mymotiivSaga } from './myMotiiv';

const rootReducer = combineReducers({
  loading,
  user,
  mymotiiv,
  auth,
});

export function* rootSaga() {
  yield all([userSaga(), mymotiivSaga(), authSaga()]);
}

export default rootReducer;
