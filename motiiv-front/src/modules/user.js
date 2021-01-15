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
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'user/LOGIN',
);
//회원가입 정보 저장(카카오)
const SIGNUP_KAKAO = createRequestActionTypes('user/SIGNUP_KAKAO');
//회원가입 정보 초기화
const RESET_SIGNUP = createRequestActionTypes('user/RESET_SIGNUP');
//회원가입 정보 저장(직업)
const SIGNUP_JOB = createRequestActionTypes('user/SIGNUP_JOB');
//회원가입 정보 저장(관심사)
const SIGNUP_KEYWORDS = createRequestActionTypes('user/SIGNUP_KEYWORDS');
//로그인 여부 변경
const CHANGE_ISLOGGED = createRequestActionTypes('user/CHANGE_ISLOGED');
// setting_keywords 저장
const SAVE_SETTING_KEYWORDS = createRequestActionTypes(
  'user/SAVE_SETTING_KEYWORDS',
);

/* ============== 액션 호출 함수 생성 ============== */
//프로필 정보
export const getProfile = createAction(GET_PROFILE);
//프로필 정보 수정
export const updateProfile = createAction(UPDATE_PROFILE, payload => payload);
//회원가입
export const createUser = createAction(CREATE_USER, payload => payload);
//로그인
export const login = createAction(LOGIN, payload => payload);
//회원가입 정보 저장(카카오)
export const signUpKakao = createAction(SIGNUP_KAKAO);
//회원가입 정보 초기화
export const resetSignUpInfo = createAction(RESET_SIGNUP);
//회원가입 정보 저장(직업)
export const signUpJob = createAction(SIGNUP_JOB);
//회원가입 정보 저장(관심사)
export const signUpKeywords = createAction(SIGNUP_KEYWORDS);
// isLogined state 변경 (자동로그인)
export const changeIsLogged = createAction(CHANGE_ISLOGGED);
// setting_keywords IN / OUT
export const saveSettingKeywords = createAction(SAVE_SETTING_KEYWORDS);

/* ============== 해당하는 액션 호출시 Saga
실행 ============== */
//프로필 정보
const getUserSaga = createRequestSaga(GET_PROFILE, userAPI.getUserProfile);
//프로필 정보 수정
const updateUserSaga = createRequestSaga(
  UPDATE_PROFILE,
  userAPI.updateUserProfile,
);
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
  isSignedUp: null,

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
  userToken: '',
  isLoggedIn: false,

  signUpKakao: {
    username: '',
    profileImageUrl: '',
    socialType: '',
    snsId: '',
  },

  jobName: '',

  keywordNames: [],
  settingKeywords: [],
};

/* ============== 액션을 store에 저장하는 리듀서를 handleActions로 처리 ============== */
const user = handleActions(
  {
    //유저 정보 조회
    [GET_PROFILE_SUCCESS]: (state, { payload: userInfo }) => ({
      ...state,
      userInfo,
      settingKeywords:
        userInfo.UserKeywords.length === 1
          ? [userInfo.UserKeywords[0].name]
          : userInfo.UserKeywords.length === 2
          ? [userInfo.UserKeywords[0].name, userInfo.UserKeywords[1].name]
          : userInfo.UserKeywords.length === 3
          ? [
              userInfo.UserKeywords[0].name,
              userInfo.UserKeywords[1].name,
              userInfo.UserKeywords[2].name,
            ]
          : [],
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
      isLoggedIn: true,
      userToken: userInfo.userToken,
      settingKeywords:
        userInfo.UserKeywords.length === 1
          ? [userInfo.UserKeywords[0].name]
          : userInfo.UserKeywords.length === 2
          ? [userInfo.UserKeywords[0].name, userInfo.UserKeywords[1].name]
          : userInfo.UserKeywords.length === 3
          ? [
              userInfo.UserKeywords[0].name,
              userInfo.UserKeywords[1].name,
              userInfo.UserKeywords[2].name,
            ]
          : [],
    }),
    [CREATE_USER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
      isLoggedIn: false,
    }),
    //회원가입 정보 초기화
    [RESET_SIGNUP]: state => ({
      ...state,
      isSignedUp: null,
    }),
    //로그인
    [LOGIN_SUCCESS]: (state, { payload: payload }) => ({
      ...state,
      userInfo: payload.userToken
        ? {
            id: payload.id,
            username: payload.username,
            snsId: payload.snsId,
            socialType: payload.socialType,
            Job: payload.Job,
            UserKeywords: payload.UserKeywords,
            profileImageUrl: payload.profileImageUrl,
          }
        : null,
      userToken: payload.userToken,
      isLoggedIn: payload.isSignedUp ? true : false,
      isSignedUp: payload.isSignedUp,
      profileImageUrl: payload.profileImageUrl,
    }),
    [LOGIN_FAILURE]: (state, { payload: data }) => ({
      ...state,
      data,
      isLoggedIn: false,
    }),
    //회원가입 정보 저장(카카오)
    [SIGNUP_KAKAO]: (state, { payload: signUpKakao }) => ({
      ...state,
      signUpKakao,
    }),
    //회원가입 정보 저장(직업)
    [SIGNUP_JOB]: (state, { payload: jobName }) => ({
      ...state,
      jobName,
    }),
    //회원가입 정보 저장(관심사)
    [SIGNUP_KEYWORDS]: (state, { payload: payload }) => ({
      ...state,
      keywordNames:
        state.keywordNames.indexOf(payload) > -1
          ? state.keywordNames.filter(keywordNames => keywordNames !== payload) //기존 배열에 있을 경우 삭제
          : state.keywordNames.length < 3 //새로 받은 키워드가 기존 배열 안에 없을 경우
          ? state.keywordNames.concat(payload) //기존 배열의 키워드 개수가 2개 이하일 때는 추가
          : state.keywordNames, //3개 이상일 경우 변화 없음
    }),
    // 자동로그인 토큰 가지고 정보 가져온 뒤 isloggedin 변환
    [CHANGE_ISLOGGED]: (state, { payload: payload }) => ({
      ...state,
      isLoggedIn: !state.isLoggedIn,
    }),
    // 세팅 키워드에 저장하기
    [SAVE_SETTING_KEYWORDS]: (state, { payload: payload }) => ({
      ...state,
      settingKeywords:
        state.settingKeywords.indexOf(payload) > -1
          ? state.settingKeywords.filter(
              settingKeywords => settingKeywords !== payload,
            )
          : state.settingKeywords.length < 3 //새로 받은 키워드가 기존 배열 안에 없을 경우
          ? state.settingKeywords.concat(payload) //기존 배열의 키워드 개수가 2개 이하일 때는 추가
          : state.settingKeywords, //3개 이상일 경우 변화 없음
    }),
  },
  initState,
);

export default user;
