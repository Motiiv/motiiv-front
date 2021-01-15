import { combineReducers } from 'redux';
import loading from './loading';
import { all } from 'redux-saga/effects';
import user, { userSaga } from './user';
import auth, { authSaga } from './auth';
import video, { videoSaga } from './video';
import mymotiiv, { mymotiivSaga } from './mymotiiv';

const rootReducer = combineReducers({
  loading,
  user,
  mymotiiv,
  auth,
  video,
});

export function* rootSaga() {
  yield all([userSaga(), authSaga(), videoSaga(), mymotiivSaga()]);
}

export default rootReducer;
