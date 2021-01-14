import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { createRequestActionTypes } from '../lib/createRequestSaga';
import * as userAPI from '../lib/api/user';
import { takeLatest } from 'redux-saga/effects';

/* ============== 성공,실패 액션을 생성 ============== */
//프로필 정보
const [
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
] = createRequestActionTypes('user/GET_PROFILE');
//프로필 정보 수정
const [
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
] = createRequestActionTypes('user/UPDATE_PROFILE');
//회원가입
const [
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
] = createRequestActionTypes('user/CREATE_USER');
//로그인
const [
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
] = createRequestActionTypes('user/LOGIN');


/* ============== 액션 호출 함수 생성 ============== */
//프로필 정보
export const getProfile = createAction(GET_PROFILE);
//프로필 정보 수정
export const updateProfile = createAction(
  UPDATE_PROFILE,
  payload => payload,
);
//회원가입
export const createUser = createAction(
  CREATE_USER,
  payload => payload,
);
//로그인
export const login = createAction(
  LOGIN,
  payload => payload,
);


/* ============== 해당하는 액션 호출시 Saga실행 ============== */
//프로필 정보
const getUserSaga = createRequestSaga(GET_PROFILE, userAPI.getUserProfile);
//프로필 정보 수정
const updateUserSaga = createRequestSaga(UPDATE_PROFILE, userAPI.updateUserProfile);
//회원가입
const createUserSaga = createRequestSaga(CREATE_USER, userAPI.createUser);
//로그인
const loginSaga = createRequestSaga(LOGIN, userAPI.login);


/* ============== 요청된 것들 중 가장 마지막 요청만 처리 (여러번 클릭시 모두 처리되면 매우 비효율적!) ============== */
export function* userSaga() {
  yield takeLatest(GET_PROFILE, getUserSaga);
  yield takeLatest(UPDATE_PROFILE, updateUserSaga);
  yield takeLatest(CREATE_USER, createUserSaga);
  yield takeLatest(LOGIN, loginSaga);
}


/* ============== State 초기값 ============== */
const initState = {
  userInfo: {
    id: null,
    username: '',
    profileImageUrl: '',
    socialType: '',
    snsId: null,
    Job: {
      id: null,
      name: '',
    },
    UserKeywords: [],
    userToken: '',
  },
  isLogged: false,
};

/* ============== 액션을 store에 저장하는 리듀서를 handleActions로 처리 ============== */
const user = handleActions(
  {
    //유저 정보 조회
    [GET_PROFILE_SUCCESS]: (state, { payload: userInfo }) => ({
      ...state,
      userInfo,
    }),
    [GET_PROFILE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    //유저 정보 수정
    [UPDATE_PROFILE_SUCCESS]: (state, { payload: userInfo }) => ({
      ...state,
      userInfo,
    }),
    [UPDATE_PROFILE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    //회원가입
    [CREATE_USER_SUCCESS]: (state, { payload: userInfo }) => ({
      ...state,
      userInfo,
      isLogged: true
    }),
    [CREATE_USER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
      isLogged: false
    }),
    //로그인 - 와 근데 생각해보니까 success는 다 여기로 받잖아
    [LOGIN_SUCCESS]: (state, { payload: userInfo }) => ({
      ...state,
      userInfo,
      isLogged: false
    }),
    [LOGIN_FAILURE]: (state, { payload: data }) => ({
      ...state,
      data,
      isLogged: false
    }),
  },
  initState,
);

export default user;
