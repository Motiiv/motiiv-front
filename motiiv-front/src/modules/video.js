import { createAction, handleActions } from 'redux-actions';
import createRequestSaga from '../lib/createRequestSaga';
import { createRequestActionTypes } from '../lib/createRequestSaga';
import * as videoAPI from '../lib/api/video';
import { takeLatest } from 'redux-saga/effects';
/* ====================Action=================== */
/* 카테고리 뷰 */
const [
  GET_CATEGORY_KEYWORDS,
  GET_CATEGORY_KEYWORDS_SUCCESS,
  GET_CATEGORY_KEYWORDS_FAILURE,
] = createRequestActionTypes('video/GET_CATEGORY_KEYWORDS');
const [
  GET_CATEGORY_VIDEOS,
  GET_CATEGORY_VIDEOS_SUCCESS,
  GET_CATEGORY_VIDEOS_FAILURE,
] = createRequestActionTypes('video/GET_CATEGORY_VIDEOS');
const [
  GET_CATEGORY_TAG_VIDEOS,
  GET_CATEGORY_TAG_VIDEOS_SUCCESS,
  GET_CATEGORY_TAG_VIDEOS_FAILURE,
] = createRequestActionTypes('video/GET_CATEGORY_TAG_VIDEOS');
/* 디테일 뷰 */
const [
  GET_DETAIL_VIDEO_INFO,
  GET_DETAIL_VIDEO_INFO_SUCCESS,
  GET_DETAIL_VIDEO_INFO_FAILURE,
] = createRequestActionTypes('video/GET_DETAIL_VIDEO_INFO');
/* 공통(좋아요 / 저장) */
const [
  CHANGE_LIKE_STATUS,
  CHANGE_LIKE_STATUS_SUCCESS,
  CHANGE_LIKE_STATUS_FAILURE,
] = createRequestActionTypes('video/CHANGE_LIKE_STATUS');
const [
  CHANGE_SAVE_STATUS,
  CHANGE_SAVE_STATUS_SUCCESS,
  CHANGE_SAVE_STATUS_FAILURE,
] = createRequestActionTypes('video/CHANGE_SAVE_STATUS');
const CHANGE_LIKE = 'video/CHANGE_LIKE';
const CHANGE_SAVE = 'video/CHANGE_SAVE';
/* 메인 뷰 */
const [
  GET_MAIN_BANNERS,
  GET_MAIN_BANNERS_SUCCESS,
  GET_MAIN_BANNERS_FAILURE,
] = createRequestActionTypes('video/GET_MAIN_BANNERS');
const [
  GET_MAIN_RECOMMENDS,
  GET_MAIN_RECOMMENDS_SUCCESS,
  GET_MAIN_RECOMMENDS_FAILURE,
] = createRequestActionTypes('video/GET_MAIN_RECOMMENDS');

/* ====================Action 호출 함수=================== */
/* 카테고리 뷰 */
export const getCategoryKeywords = createAction(GET_CATEGORY_KEYWORDS);
export const getCategoryVideos = createAction(
  GET_CATEGORY_VIDEOS,
  payload => payload,
);
export const getCategoryTagVideos = createAction(
  GET_CATEGORY_TAG_VIDEOS,
  payload => payload,
);
/* 디테일 뷰 */
export const getDetailVideoInfo = createAction(
  GET_DETAIL_VIDEO_INFO,
  payload => payload,
);
/* 공통 */
export const changeLikeStatus = createAction(
  CHANGE_LIKE_STATUS,
  payload => payload,
);
export const changeSaveStatus = createAction(
  CHANGE_SAVE_STATUS,
  payload => payload,
);
/* 메인 뷰 */
export const getMainBanners = createAction(GET_MAIN_BANNERS);
export const getMainRecommend = createAction(GET_MAIN_RECOMMENDS);

/* =================Saga선언==================== */
/* 카테고리 뷰 */
const getKeywordsSaga = createRequestSaga(
  GET_CATEGORY_KEYWORDS,
  videoAPI.getCategoryKeywords,
);
const getVideoSaga = createRequestSaga(
  GET_CATEGORY_VIDEOS,
  videoAPI.getCategoryVideos,
);
const getTagVideosSaga = createRequestSaga(
  GET_CATEGORY_TAG_VIDEOS,
  videoAPI.getCategoryTagVideos,
);
/* 디테일 뷰 */
const getDetailInfoSaga = createRequestSaga(
  GET_DETAIL_VIDEO_INFO,
  videoAPI.getDetailVideoInfo,
);
/* 공통 */
const changeLikeSaga = createRequestSaga(
  CHANGE_LIKE_STATUS,
  videoAPI.changeLike,
);
const changeSaveSaga = createRequestSaga(
  CHANGE_SAVE_STATUS,
  videoAPI.changeSave,
);
export const changeLike = createAction(CHANGE_LIKE, like => ({
  like,
}));
export const changeSave = createAction(CHANGE_SAVE, save => ({
  save,
}));
/* 메인 뷰 */
const getBannersSaga = createRequestSaga(
  GET_MAIN_BANNERS,
  videoAPI.getMainBanners,
);
const getRecommendSaga = createRequestSaga(
  GET_MAIN_RECOMMENDS,
  videoAPI.getMainRecommend,
);

/* 요청된 것들 중 가장 마지막 요청만 처리 (여러번 클릭시 모두 처리되면 매우 비효율적!) */
export function* videoSaga() {
  yield takeLatest(GET_CATEGORY_KEYWORDS, getKeywordsSaga);
  yield takeLatest(GET_CATEGORY_VIDEOS, getVideoSaga);
  yield takeLatest(GET_DETAIL_VIDEO_INFO, getDetailInfoSaga);
  yield takeLatest(GET_CATEGORY_TAG_VIDEOS, getTagVideosSaga);
  yield takeLatest(CHANGE_LIKE_STATUS, changeLikeSaga);
  yield takeLatest(CHANGE_SAVE_STATUS, changeSaveSaga);
  yield takeLatest(GET_MAIN_BANNERS, getBannersSaga);
  yield takeLatest(GET_MAIN_RECOMMENDS, getRecommendSaga);
}

/*===============State 초기화============= */
const initState = {
  /* 카테고리 뷰 */
  c_keywords: [],
  c_videos: [],
  c_videoCnt: null,
  c_tagName: '',
  c_tagVideos: [],
  /* 디테일 뷰 */
  d_videoInfo: {},
  d_recVideoList: [],
  /* 공통 */
  like: false,
  save: false,
  /* 메인 뷰 */
  m_banners: {},
  m_recVideoList: [],
  m_recTextList: [],
};

/* 액션을 store에 저장하는 리듀서를 handleActions로 쉽게 처리! */
const video = handleActions(
  {
    /* 카테고리 뷰 */
    [GET_CATEGORY_KEYWORDS_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      c_keywords: data,
    }),
    [GET_CATEGORY_KEYWORDS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [GET_CATEGORY_VIDEOS_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      c_videos: data.filteredVideo,
      c_videoCnt: data.videoCnt,
    }),
    [GET_CATEGORY_VIDEOS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [GET_CATEGORY_TAG_VIDEOS_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      c_tagName: data.name,
      c_tagVideos: data.TaggedVideos,
    }),
    [GET_CATEGORY_TAG_VIDEOS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    /* 디테일 뷰 */
    [GET_DETAIL_VIDEO_INFO_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      d_recVideoList: data.recommandVideos,
      d_videoInfo: data.videoDetailData,
      like: data.videoDetailData.isLiked,
      save: data.videoDetailData.isSaved,
    }),
    [GET_DETAIL_VIDEO_INFO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    /* 공통 */
    [CHANGE_LIKE_STATUS_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      like: data,
    }),
    [CHANGE_LIKE_STATUS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [CHANGE_SAVE_STATUS_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      save: data,
    }),
    [CHANGE_SAVE_STATUS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [CHANGE_LIKE]: (state, { payload: { like } }) => ({
      ...state,
      like: like,
    }),
    [CHANGE_SAVE]: (state, { payload: { save } }) => ({
      ...state,
      save: save,
    }),
    /* 메인 뷰 */
    [GET_MAIN_BANNERS_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      m_banners: data,
    }),
    [GET_MAIN_BANNERS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [GET_MAIN_RECOMMENDS_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      m_recVideoList: [data[0], data[1], data[2], data[3], data[4], data[5]],
      m_recTextList: data[6],
    }),
    [GET_MAIN_RECOMMENDS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initState,
);

export default video;
