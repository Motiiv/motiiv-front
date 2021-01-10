import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { createRequestActionTypes } from '../lib/createRequestSaga';
import * as userAPI from '../lib/api/auth';
import { takeLatest } from 'redux-saga/effects';

/* GET_USER에 대한 성공,실패 액션을 생성 */
const [
  GET_INFO_NAVER,
  GET_INFO_NAVER_SUCCESS,
  GET_INFO_NAVER_FAILURE,
] = createRequestActionTypes('auth/GET_INFO_NAVER');

/* 액션 호출 함수 생성 */
export const getConfirmUser = createAction(GET_INFO_NAVER);

/* 해당하는 액션 호출시 Saga실행 */
const getAuthSaga = createRequestSaga(GET_INFO_NAVER, userAPI.getInfoNaver);

/* 요청된 것들 중 가장 마지막 요청만 처리 (여러번 클릭시 모두 처리되면 매우 비효율적!) */
export function* authSaga() {
  yield takeLatest(GET_INFO_NAVER, getAuthSaga);
}

/* State 초기값 */
const initState = {
  data: {},
};

/* 액션을 store에 저장하는 리듀서를 handleActions로 쉽게 처리! */
const auth = handleActions(
  {
    [GET_INFO_NAVER_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      data,
    }),
    [GET_INFO_NAVER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initState,
);

export default auth;
