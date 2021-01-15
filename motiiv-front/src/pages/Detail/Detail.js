import React, { useState, useEffect } from 'react';
import DetailComponent from '../../components/Detail/DetailComponent';
import { getDetailVideoInfo } from '../../modules/video';
import { useDispatch, useSelector } from 'react-redux';

function Detail({ props, showModal, isLoggined }) {
  const dispatch = useDispatch();
  const { videoInfo, recVideoList, detailLoading, like, save } = useSelector(
    ({ video, loading }) => ({
      videoInfo: video.d_videoInfo,
      recVideoList: video.d_recVideoList,
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
      isLoggined={isLoggined}
    ></DetailComponent>
  );
}

export default React.memo(Detail);
