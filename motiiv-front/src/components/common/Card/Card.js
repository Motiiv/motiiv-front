import React from 'react';
import styled, { css } from 'styled-components';
import Tag from '../Tag/Tag';
import { withRouter } from 'react-router-dom';

const CardWrap = styled.div`
  display: flex;
  width: 100%;
  min-width: ${props => (props.size === 'large' ? '37.7rem' : '27.4rem')};
  height: auto;
  min-height: ${props => (props.size === 'large' ? '32.6rem' : '28rem')};
  flex-direction: column;
  box-shadow: ${props =>
    props.size === 'large' ? '2px 2px 7px rgba(0, 0, 0, 0.15)' : 'none'};
  border-radius: 1rem;
  cursor: pointer;
`;
const VideoWrap = styled.div`
  width: 100%;
  height: auto;
  height: ${props => (props.size === 'large' ? '21.2rem' : '15.4rem')};
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c4c4c4;
  border-radius: ${props =>
    props.size === 'large' ? '1rem 1rem 0 0' : '1rem'};
  position: relative;
`;
// const Video = styled.div`
//     position : absolute;
//     width: 100%;
// `;
const TimeContainer = styled.div`
  position: absolute;
  right: 1.5rem;
  bottom: 1.4rem;

  width: 4.5rem;
  height: 1.8rem;
  font-size: 1.2rem;
  padding: 0.3rem 0.5rem;
  padding-top: 0.4rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 1rem;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-family: 'Campton';
  & + & {
    margin-left: 1.2rem;
  }
`;

const Views = styled.div`
  font-size: 1.5rem;
  font-family: 'Spoqa-Han-Sans';
  color: ${({ theme }) => theme.darkGray};
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Channel = styled.div`
  font-size: 1.5rem;
  font-family: 'Spoqa-Han-Sans';
  border-left: 0.15rem solid;
  margin-left: 1rem;
  padding-left: 1rem;
  color: ${({ theme }) => theme.darkGray};
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const TextWrap = styled.div`
  width: 100%;
  height: 11.4rem;
  display: flex;
  flex-direction: column;
  background: ${props => (props.size === 'large' ? 'white' : 'transparent')};
  border-radius: 0 0 1rem 1rem;
`;
const Title = styled.div`
  margin-left: ${props => (props.size === 'large' ? '2rem' : '0')};
  color: black;
  font-size: 1.5rem;
  font-family: 'Spoqa-Han-Sans';
  overflow: hidden;
  line-height: 1.5rem;
  max-height: 3rem;
  margin-top: 1.5rem;
  text-overflow: ellipsis;
  word-break: keep-all;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const DescriptionContainer = styled.div`
  display: flex;
  margin-left: ${props => (props.size === 'large' ? '2rem' : '0')};
  margin-top: ${props => (props.size === 'large' ? '0.7rem' : '1.2rem')};
`;
const TagContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: ${props => (props.size === 'large' ? '1.8rem' : '2rem')};
  margin-left: ${props => (props.size === 'large' ? '2rem' : '1px')};
`;
// Tag 컴포넌트 만들어서 불러오기
function Card({ obj, size, history }) {
  return (
    <>
      <CardWrap size={size}>
        <VideoWrap size={size} onClick={() => history.push('/detail/1')}>
          <iframe
            style={{
              height: '100%',
              width: '100%',
              borderRadius: '1rem',
            }}
            src={obj.VideoInfo.src}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <TimeContainer>{obj.VideoInfo.runningTime}</TimeContainer>
        </VideoWrap>
        <TextWrap size={size}>
          <Title onClick={() => history.push('/detail/1')} size={size}>
            {obj.TextInfo.videoTxt}
          </Title>
          <DescriptionContainer
            size={size}
            onClick={() => history.push('/detail/1')}
          >
            <Views>100만회</Views>
            <Channel>dk-master</Channel>
          </DescriptionContainer>
          <TagContainer size={size}>
            {obj.TextInfo.hashTag.map((tag, idx) => (
              <div style={{ marginRight: '1.2rem', marginTop: '-2.8rem' }}>
                <Tag
                  hashTag={1}
                  color="black"
                  text={obj.TextInfo.hashTag[idx]}
                  fontSize="1.2rem"
                ></Tag>
              </div>
            ))}
          </TagContainer>
        </TextWrap>
      </CardWrap>
    </>
  );
}

export default withRouter(Card);
