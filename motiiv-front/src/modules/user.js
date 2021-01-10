import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { createRequestActionTypes } from '../lib/createRequestSaga';
import * as userAPI from '../lib/api/user';
import { takeLatest } from 'redux-saga/effects';

/* GET_USER에 대한 성공,실패 액션을 생성 */
//프로필 정보
const [
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
] = createRequestActionTypes('user/GET_PROFILE');
//로그인모달창
const [
  SHOW_SIGNIN_MODAL,
  SHOW_SIGNIN_MODAL_SUCCESS,
  SHOW_SIGNIN_MODAL_FAILURE,
] = createRequestActionTypes('user/GET_PROFILE');

/* 액션 호출 함수 생성 */
//프로필 정보
export const getProfile = createAction(GET_PROFILE);
//로그인모달창
export const showSigninModal = createAction(SHOW_SIGNIN_MODAL);

/* 해당하는 액션 호출시 Saga실행 */
//프로필 정보
const getUserSaga = createRequestSaga(GET_PROFILE, userAPI.getUserProfile);
//로그인 모달창 - 나중에 마이모티브 모달창에서 버튼 클릭 시마다 떠야 함
const showSigninModalState = () => {
  return { data: true };
};
const showSigninModalSaga = createRequestSaga(
  SHOW_SIGNIN_MODAL,
  showSigninModalState,
);

/* 요청된 것들 중 가장 마지막 요청만 처리 (여러번 클릭시 모두 처리되면 매우 비효율적!) */
export function* userSaga() {
  yield takeLatest(GET_PROFILE, getUserSaga);
  yield takeLatest(SHOW_SIGNIN_MODAL, showSigninModalSaga);
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
  },

  showLoginModal: false,
};

/* 액션을 store에 저장하는 리듀서를 handleActions로 쉽게 처리! */
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
    //로그인 모달창
    [SHOW_SIGNIN_MODAL_SUCCESS]: (state, { payload: userInfo }) => ({
      ...state,
      userInfo,
    }),
    [SHOW_SIGNIN_MODAL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initState,
);

export default user;
