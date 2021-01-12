import React, { useState, useEffect } from 'react';
import DetailComponent from '../../components/Detail/DetailComponent';
import { getDetailVideoInfo } from '../../modules/video';
import { useDispatch, useSelector } from 'react-redux';

function Detail({ props ,showModal}) {
  const dispatch = useDispatch();
  const { videoInfo, recVideoList, detailLoading, like, save } = useSelector(
    ({ video, loading }) => ({
      videoInfo: video.d_videoInfo,
      recVideoList: video.d_recVideoList,
      like: video.like,
      save: video.save,
      detailLoading: loading['video/GET_DETAIL_VIDEO_INFO'],
    }),
  );
  useEffect(() => {
    dispatch(getDetailVideoInfo(props.match.params.id));
  }, [props.match.params.id]);

  return (
    <DetailComponent
      likeStatus={like}
      saveStatus={save}
      videoInfo={videoInfo}
      recVideoList={recVideoList}
      detailLoading={detailLoading}
      showModal={showModal}
    ></DetailComponent>
  );
}

export default Detail;
