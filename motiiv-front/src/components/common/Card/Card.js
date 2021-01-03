import React from 'react';
import styled, { css } from 'styled-components';
import Tag from '../Tag/tag';

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 37.7rem;
  height: 32.6rem;
  background: white;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const VideoWrap = styled.div`
  background: #c4c4c4;
  width: 100%;
  height: 21.2rem;
`;
const Video = styled.video``;
const TextWrap = styled.div`
  width: 100%;
  height: 11.4rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 4.1rem;
  height: 2.2rem;
  color: black;
`;
const DescriptionContainer = styled.div`
  display: flex;
`;
const Views = styled.div`
  width: 9.4rem;
  height: 1.3rem;
`;
const Devider = styled.div`
  width: 0.1rem;
  height: 1.5rem;
`;
const Channel = styled.div`
  width: 8.4rem;
  height: 1.3rem;
`;
const TagContainer = styled.div``;
// Tag 컴포넌트 만들어서 불러오기

function Card() {
  return (
    <>
      <CardWrap>
        <VideoWrap>
          {' '}
          <Video />
        </VideoWrap>
        <TextWrap>
          <Title></Title>
          <DescriptionContainer>
            <Views></Views>
            <Devider>|</Devider>
            <Channel></Channel>
          </DescriptionContainer>
          <TagContainer></TagContainer>
        </TextWrap>
      </CardWrap>
    </>
  );
}

export default Card;
