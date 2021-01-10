import { combineReducers } from 'redux';
import loading from './loading';
import { all } from 'redux-saga/effects';
import user, { userSaga } from './user';
import auth, { authSaga } from './auth';
const rootReducer = combineReducers({
  loading,
  user,
  auth,
});

export function* rootSaga() {
  yield all([userSaga(), authSaga()]);
}

export default rootReducer;
