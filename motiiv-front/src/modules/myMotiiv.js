import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { createRequestActionTypes } from '../lib/createRequestSaga';
import * as myMotiiv from '../lib/api/mymotiiv';
import { takeLatest } from 'redux-saga/effects';

/* GET_USER에 대한 성공,실패 액션을 생성 */
const [
  GET_MYMOTIIV,
  GET_MYMOTIIV_SUCCESS,
  GET_MYMOTIIV_FAILURE,
] = createRequestActionTypes('user/GET_MYMOTIIV');

/* 액션 호출 함수 생성 */
export const getMyMotiiv= createAction(GET_MYMOTIIV);

/* 해당하는 액션 호출시 Saga실행 */
const getMyMotiivSaga = createRequestSaga(GET_MYMOTIIV, myMotiiv.getMyMotiiv);

/* 요청된 것들 중 가장 마지막 요청만 처리 (여러번 클릭시 모두 처리되면 매우 비효율적!) */
export function* userSaga() {
  yield takeLatest(GET_MYMOTIIV, getMyMotiivSaga);
}

/* State 초기값 */
const initState = {
    mymotiiv : null
};

/* 액션을 store에 저장하는 리듀서를 handleActions로 쉽게 처리! */
const mymotiiv = handleActions(
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
