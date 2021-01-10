import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  /*   & + & {
    margin-top: 2rem;
  } */
`;
const VideoContent = styled.img`
  border-radius: 0.7rem;
`;
const VideoTitleText = styled.div`
  font-size: 2rem;
  margin-top: 1rem;
`;
const VideoSubText = styled.div`
  margin-top: 0.8rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.gray};
`;
function RecommendCard({ video, history }) {
  return (
    <VideoWrapper onClick={() => history.push(`/detail/${video.id}`)}>
      <VideoContent src={video.thumbnailImageUrl} style={{ width: '100%' }} />
      <VideoTitleText>{video.title}</VideoTitleText>
      <VideoSubText>tvN</VideoSubText>
    </VideoWrapper>
  );
}

export default withRouter(RecommendCard);
