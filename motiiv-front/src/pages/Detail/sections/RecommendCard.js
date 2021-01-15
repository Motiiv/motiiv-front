import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
const GImage = styled.img`
  padding-bottom: 56.25%;
  transition: all 0.7s;
  border-radius: 0.7rem;
  background-size: cover;
  background-image: url(${props => props.thumbnail});
  & :hover {
    background-image: url(${props => props.gif});
  }
`;
const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  & {
    letter-spacing: -1px;
  }
  @media ${props => props.theme.mobile} {
    margin-bottom: 3rem;
  }
  &:hover {
    ${GImage} {
      background-image: url(${props => props.gif});
    }
  }
`;
const VideoTitleText = styled.div`
  font-size: 2rem;
  margin-top: 1rem;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: normal;
  word-wrap: normal;
  width: fit-content;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const VideoSubText = styled.div`
  margin-top: 0.8rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.gray};
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: keep-all;
  word-wrap: break-word;
  width: fit-content;
  display: -webkit-box;
  -webkit-line-clamp: 1;
`;
function RecommendCard({ video, history }) {
  return (
    <VideoWrapper
      gif={video.videoGif}
      onClick={() => history.push(`/detail/${video.id}`)}
    >
      <GImage
        thumbnail={video.thumbnailImageUrl}
        gif={video.videoGif}
        style={{ width: '100%' }}
      />
      <VideoTitleText>{video.title}</VideoTitleText>
      <VideoSubText>{video.channelName}</VideoSubText>
    </VideoWrapper>
  );
}

export default withRouter(React.memo(RecommendCard));
