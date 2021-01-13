import React, { useEffect } from 'react';
import CategoryComponent from '../../components/Category/CategoryComponent';
import { getCategoryKeywords, getCategoryVideos } from '../../modules/video';
import { useDispatch, useSelector } from 'react-redux';

function Category({ props,showModal,isLoggined }) {
  const dispatch = useDispatch();

  const {
    keywords,
    loading,
    videos,
    videoCnt,
    tagName,
    c_tagVideos,
  } = useSelector(({ video, loading }) => ({
    keywords: video.c_keywords,
    videos: video.c_videos,
    videoCnt: video.c_videoCnt,
    tagName: video.c_tagName,
    c_tagVideos: video.c_tagVideos,
    loading: loading['video/GET_CATEGORY_VIDEOS'],
  }));

  useEffect(() => {
    dispatch(getCategoryKeywords());
    dispatch(getCategoryVideos({ keyword: 0, filters: 'new' }));
  }, []);

  return (
    <CategoryComponent
      tagName={tagName}
      videoCnt={videoCnt}
      loading={loading}
      keywords={keywords}
      videos={props.match.params.hashTag === '1' ? c_tagVideos : videos}
      hashTag={props.match.params.hashTag}
      showModal={showModal}
      isLoggined = {isLoggined}
    ></CategoryComponent>
  );
}

export default Category;
