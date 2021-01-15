import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import {
  getMyWorkspaces,
  deleteMyeWorkSpace,
  createMyeWorkSpace,
  updateMyeWorkSpace,
  getMyVideos,
} from '../lib/api/mymotiiv';

/* 성공,실패 액션을 생성 */

// 플로팅 토글버튼
const [
  TOGGLE_SHOW_FLOAT,
  TOGGLE_SHOW_FLOAT_SUCCESS,
  TOGGLE_SHOW_FLOAT_FAILURE,
] = createRequestActionTypes('mymotiiv/TOGGLE_SHOW_FLOAT');
// 다크모드 토글버튼
const [
  TOGGLE_DARK_MODE,
  TOGGLE_DARK_MODE_SUCCESS,
  TOGGLE_DARK_MODE_FAILURE,
] = createRequestActionTypes('mymotiiv/TOGGLE_DARK_MODE');

// 워크스페이스 생성
const [
  CREATE_WORKSPACE,
  CREATE_WORKSPACE_SUCCESS,
  CREATE_WORKSPACE_FAILURE,
] = createRequestActionTypes('mymotiiv/CREATE_WORKSPACE');
// 워크스페이스 조회
const [
  GET_WORKSPACES,
  GET_WORKSPACES_SUCCESS,
  GET_WORKSPACES_FAILURE,
] = createRequestActionTypes('mymotiiv/GET_WORKSPACES');
// 워크스페이스 수정
const [
  UPDATE_WORKSPACE,
  UPDATE_WORKSPACE_SUCCESS,
  UPDATE_WORKSPACE_FAILURE,
] = createRequestActionTypes('mymotiiv/UPDATE_WORKSPACE');
// 워크스페이스 삭제
const [
  DELETE_WORKSPACE,
  DELETE_WORKSPACE_SUCCESS,
  DELETE_WORKSPACE_FAILURE,
] = createRequestActionTypes('mymotiiv/DELETE_WORKSPACE');
//내 비디오들 조회
const [
  GET_MYVIDEOS,
  GET_MYVIDEOS_SUCCESS,
  GET_MYVIDEOS_FAILURE,
] = createRequestActionTypes('mymotiiv/GET_MYVIDEOS');

/* 액션 호출 함수 생성 */

// 토글버튼
export const toggleShowFloat = createAction(TOGGLE_SHOW_FLOAT);
export const toggleDarkMode = createAction(TOGGLE_DARK_MODE);

// 워크스페이스 생성
export const createWorkspace = createAction(
  CREATE_WORKSPACE,
  payload => payload,
);
// 워크스페이스 조회
export const getWorkspaces = createAction(GET_WORKSPACES);
// 워크스페이스 수정
export const updateWorkspace = createAction(
  UPDATE_WORKSPACE,
  payload => payload,
);
// 워크스페이스 삭제
export const deleteWorkspace = createAction(DELETE_WORKSPACE);
// 내 비디오 조회
export const getVideos = createAction(GET_MYVIDEOS);

/* 해당하는 액션 호출시 Saga실행 */

// 토글버튼
const toggleShowFloatState = isChecked => {
  return { data: isChecked };
};
const toggleShowFloatSaga = createRequestSaga(
  TOGGLE_SHOW_FLOAT,
  toggleShowFloatState,
);
// 다크모드 토글버튼
const toggleDarkModeState = isChecked => {
  return { data: isChecked };
};
const toggleDarkModeSaga = createRequestSaga(
  TOGGLE_DARK_MODE,
  toggleDarkModeState,
);

// 워크스페이스 생성
const createWorkspacesSaga = createRequestSaga(
  CREATE_WORKSPACE,
  createMyeWorkSpace,
);
// 워크스페이스 조회
const getWorkspacesSaga = createRequestSaga(GET_WORKSPACES, getMyWorkspaces);
// 워크스페이스 수정
const updateWorkspaceSaga = createRequestSaga(
  UPDATE_WORKSPACE,
  updateMyeWorkSpace,
);
// 워크스페이스 삭제
const deleteWorkspaceSaga = createRequestSaga(
  DELETE_WORKSPACE,
  deleteMyeWorkSpace,
);
// 내 비디오 조회
const getVideosSaga = createRequestSaga(GET_MYVIDEOS, getMyVideos);

/* 요청된 것들 중 가장 마지막 요청만 처리 (여러번 클릭시 모두 처리되면 매우 비효율적!) */
export function* mymotiivSaga() {
  yield takeLatest(TOGGLE_SHOW_FLOAT, toggleShowFloatSaga);
  yield takeLatest(TOGGLE_DARK_MODE, toggleDarkModeSaga);
  yield takeLatest(CREATE_WORKSPACE, createWorkspacesSaga);
  yield takeLatest(GET_WORKSPACES, getWorkspacesSaga);
  yield takeLatest(UPDATE_WORKSPACE, updateWorkspaceSaga);
  yield takeLatest(DELETE_WORKSPACE, deleteWorkspaceSaga);
  yield takeLatest(GET_MYVIDEOS, getVideosSaga);
}

/* State 초기값 */
const initState = {
  onFloatBtn: true,
  onDarkMode: false,
  workspaces: [],
  myvideos: [],
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
    /*     // 플로팅 버튼 토글
    [TOGGLE_SHOW_FLOAT_SUCCESS]: (state, { payload: isChecked }) => ({
      ...state,
      onDarkMode: isChecked,
    }),
    [TOGGLE_SHOW_FLOAT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }), */
    // 워크 스페이스 생성
    [CREATE_WORKSPACE_SUCCESS]: (state, { payload: workspaces }) => ({
      ...state,
      workspaces,
    }),
    [CREATE_WORKSPACE_FAILURE]: (state, { payload: error }) => ({
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
    // 워크 스페이스 수정
    [UPDATE_WORKSPACE_SUCCESS]: (state, { payload: workspaces }) => ({
      ...state,
      workspaces,
    }),
    [UPDATE_WORKSPACE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    // 워크 스페이스 식제
    [DELETE_WORKSPACE_SUCCESS]: (state, { payload: workspaces }) => ({
      ...state,
      workspaces,
    }),
    [DELETE_WORKSPACE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),

    [GET_MYVIDEOS_SUCCESS]: (state, { payload: myvideos }) => ({
      ...state,
      myvideos,
    }),
    [GET_MYVIDEOS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initState,
);

export default mymotiiv;
