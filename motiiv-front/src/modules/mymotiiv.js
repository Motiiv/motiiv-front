import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import { getMyWorkspaces } from '../lib/api/mymotiiv';
import { getMyMotiiv } from '../lib/api/mymotiiv';

/* 성공,실패 액션을 생성 */

// 토글버튼
const [
  TOGGLE_SHOW_FLOAT,
  TOGGLE_SHOW_FLOAT_SUCCESS,
  TOGGLE_SHOW_FLOAT_FAILURE,
] = createRequestActionTypes('mymotiiv/TOGGLE_SHOW_FLOAT');
// 워크스페이스
const [
  GET_WORKSPACES,
  GET_WORKSPACES_SUCCESS,
  GET_WORKSPACES_FAILURE,
] = createRequestActionTypes('mymotiiv/GET_WORKSPACES');

const [
    GET_MYMOTIIV,
    GET_MYMOTIIV_SUCCESS,
    GET_MYMOTIIV_FAILURE,
  ] = createRequestActionTypes('user/GET_MYMOTIIV');
  
/* 액션 호출 함수 생성 */

// 토글버튼
export const toggleShowFloat = createAction(TOGGLE_SHOW_FLOAT);
// 워크스페이스
export const getWorkspaces = createAction(GET_WORKSPACES);

export const getMotiiv= createAction(GET_MYMOTIIV);
/* 해당하는 액션 호출시 Saga실행 */

// 토글버튼
const toggleShowFloatState = isChecked => {
  return { data: isChecked };
};
const toggleShowFloatSaga = createRequestSaga(
  TOGGLE_SHOW_FLOAT,
  toggleShowFloatState,
);

const getMyMotiivSaga = createRequestSaga(GET_MYMOTIIV, getMyMotiiv);

// 워크스페이스
const getWorkspacesSaga = createRequestSaga(GET_WORKSPACES, getMyWorkspaces);

/* 요청된 것들 중 가장 마지막 요청만 처리 (여러번 클릭시 모두 처리되면 매우 비효율적!) */
export function* mymotiivSaga() {
  yield takeLatest(TOGGLE_SHOW_FLOAT, toggleShowFloatSaga);
  yield takeLatest(GET_WORKSPACES, getWorkspacesSaga);
  yield takeLatest(GET_MYMOTIIV, getMyMotiivSaga);
}

/* State 초기값 */
const initState = {
  onFloatBtn: true,
  workspaces: null,
  mymotiiv : null,
};

/* 액션을 store에 저장하는 리듀서를 handleActions로 쉽게 처리! */
const mymotiiv = handleActions(
  {
    // 플로팅 버튼 토글
    [TOGGLE_SHOW_FLOAT_SUCCESS]: (state, { payload: isChecked }) => ({
      ...state,
      onFloatBtn: isChecked,
    }),
    [TOGGLE_SHOW_FLOAT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    // 워크 스페이스 조회
    [GET_WORKSPACES_SUCCESS]: (state, { payload: workspaces }) => ({
      ...state,
      workspaces,
    }),
    [GET_WORKSPACES_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),

    [GET_MYMOTIIV_SUCCESS]: (state, { payload: mymotiiv }) => ({
        ...state,
        mymotiiv,
      }),
      [GET_MYMOTIIV_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error,
      }),
  },
  initState,
);

export default mymotiiv;
