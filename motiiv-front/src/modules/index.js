import { combineReducers } from "redux";
import loading from "./loading";
import { all } from "redux-saga/effects";
import user, {userSaga} from './user';

const rootReducer = combineReducers({
  loading,
  user
});

export function* rootSaga() {
  yield all([userSaga()]);
}

export default rootReducer;
