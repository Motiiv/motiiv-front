import React from 'react';
import styled from 'styled-components';

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
function RecommendCard() {
  return (
    <VideoWrapper>
      <VideoContent
        src="https://i.ytimg.com/vi/XeOfUbLL-7Q/hq720_live.jpg?sqp=CLTkx_8F-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA65nbGSn5uuIqanAAfgR8uEl9-uA"
        style={{ width: '100%' }}
      />
      <VideoTitleText>스트리트 푸드 파이터</VideoTitleText>
      <VideoSubText>tvN</VideoSubText>
    </VideoWrapper>
  );
}

export default RecommendCard;
