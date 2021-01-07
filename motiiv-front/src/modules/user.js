import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { createRequestActionTypes } from '../lib/createRequestSaga';
import * as userAPI from '../lib/api/user';
import { takeLatest } from 'redux-saga/effects';

/* GET_USER에 대한 성공,실패 액션을 생성 */
const [
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
] = createRequestActionTypes('user/GET_PROFILE');

/* 액션 호출 함수 생성 */
export const getProfile = createAction(GET_PROFILE);

/* 해당하는 액션 호출시 Saga실행 */
const getUserSaga = createRequestSaga(GET_PROFILE, userAPI.getUserProfile);

/* 요청된 것들 중 가장 마지막 요청만 처리 (여러번 클릭시 모두 처리되면 매우 비효율적!) */
export function* userSaga() {
  yield takeLatest(GET_PROFILE, getUserSaga);
}

/* State 초기값 */
const initState = {
  userInfo: {
    id: null,
    name: '',
    profileImageUrl: '',
    socialType: '',
    snsId: null,
    Job: {
      id: null,
      name: '',
    },
    UserKeywords: [],
    //isAdmin: false,
  },
};

/* 액션을 store에 저장하는 리듀서를 handleActions로 쉽게 처리! */
const user = handleActions(
  {
    [GET_PROFILE_SUCCESS]: (state, { payload: userInfo }) => ({
      ...state,
      userInfo,
    }),
    [GET_PROFILE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initState,
);

export default user;
