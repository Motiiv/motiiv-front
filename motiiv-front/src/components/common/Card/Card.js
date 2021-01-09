import React ,{useState} from 'react';
import styled, { css } from 'styled-components';
import Tag from '../Tag/Tag';
import { withRouter } from 'react-router-dom';
import HoverVideoPlayer from 'react-hover-video-player';
import SaveImage from '../../../assets/global/save_icon.svg';
import SaveClickImage from '../../../assets/global/saveclick_icon.svg';
const CardWrap = styled.div`
  display: flex;
  width: 100%;
  min-width: ${props => (props.size === 'large' ? '37.7rem' : '27.4rem')};
  height: auto;
  min-height: ${props => (props.size === 'large' ? '33.5 rem' : '26.7rem')};
  flex-direction: column;
  box-shadow: ${props =>
  props.size === 'large' ? '2px 2px 7px rgba(0, 0, 0, 0.15)' : 'none'};
  border-radius: 1rem;
  @media ${props => props.theme.mobile} {
    min-width: 30rem;
    min-height: 24.2rem;
  }
  @media ${props => props.theme.tablet} {
    min-width: ${props => (props.size === 'large' ? '21.9rem' : '21.6rem')};
    min-height: 23.2rem;
    //max로 바꿔야하는지 여부
  }
  @media ${props => props.theme.desktop} {
    min-width: ${props => (props.size === 'large' ? '37.7rem' : '27.4rem')};
    height: auto;
    min-height: ${props => (props.size === 'large' ? '33.5 rem' : '26.7rem')};
  }


`;
const VideoWrap = styled.div`
  width: 100%;
  /* height: auto; */
  height: ${props => (props.size === 'large' ? '21.2rem' : '15.4rem')};
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c4c4c4;
  border-radius: ${props =>
    props.size === 'large' ? '1rem 1rem 0 0' : '1rem'};
  position: relative;
  &:hover {
  }
  @media ${props => props.theme.mobile} {
    height: 16.8rem;
  }
  @media ${props => props.theme.tablet} {
    height: ${props => (props.size === 'large' ? '12.3rem' : '12.2rem')};
  }
  @media ${props => props.theme.desktop} {
 
    height: ${props => (props.size === 'large' ? '21.2rem' : '15.4rem')};
   
  }

`;
// const Video = styled.div`
//     position : absolute;
//     width: 100%;
// `;

const SaveBox = styled.div`
  display:  ${props => (props.saveButton === false ? 'none' : 'flex')};
  align-items: center;
  position : absolute;
  right: 1.5rem;
  top: 1.4rem;
  line-height: 0 !important;
  cursor: pointer;
`;
const SaveImg = styled.img`
  width: 3.5rem;
  height: 3.542rem;
  @media ${props => props.theme.mobile} {
    width: 3rem;
    height: 3rem;
  }
  @media ${props => props.theme.tablet} {
    width: 2.2rem;
  height: 2.2rem;
  }
  @media ${props => props.theme.desktop} {
    width: 3.5rem;
    height: 3.542rem;
  }
`;
const TimeContainer = styled.div`
  position: absolute;
  right: 1.5rem;
  bottom: 1.4rem;
  width: 4.5rem;
  z-index: 1000;
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
  @media ${props => props.theme.tablet} {
    right : 1.4rem;
    bottom: 1.2rem;
    width: 3.9rem;
    height: 1.5rem;
    font-size : 1rem;
  }
  @media ${props => props.theme.desktop} {
    right: 1.5rem;
    bottom: 1.4rem;
    width: 4.5rem;
    height: 1.8rem;
    font-size: 1.2rem;
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
  @media ${props => props.theme.mobile} {
    font-size: 1.2rem;
  }
  @media ${props => props.theme.tablet} {
    font-size : 1.2rem;
  }
  @media ${props => props.theme.desktop} {
    font-size: 1.5rem;
  }
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
  @media ${props => props.theme.mobile} {
    font-size: 1.2rem;
  }
  @media ${props => props.theme.tablet} {
    font-size : 1.2rem;
    margin-left: 0.5rem;
    padding-left: 0.5 rem;
  }
  @media ${props => props.theme.desktop} {
    font-size: 1.5rem;
    margin-left: 1rem;
    padding-left: 1rem;
  }
`;
const Video = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;
const TextWrap = styled.div`
  width: 100%;
  height: ${props => (props.size === 'large' ? '12.3rem' : '11.3rem')};
  display: flex;
  flex-direction: column;
  background: ${props => (props.size === 'large' ? 'white' : 'transparent')};
  border-radius: 0 0 1rem 1rem;
  @media ${props => props.theme.mobile} {
    height: 7.4rem;
  }
  @media ${props => props.theme.tablet} {
    height: auto;
    /* height: 10.9rem; */
  }
  @media ${props => props.theme.desktop} {
    height: ${props => (props.size === 'large' ? '12.3rem' : '11.3rem')};
  }
`;
const Title = styled.div`
  margin-left: ${props => (props.size === 'large' ? '2rem' : '0')};
  color: black;
  font-size: 1.5rem;
  font-family: 'Spoqa-Han-Sans';
  overflow: hidden;
  line-height: 1.7rem;
  max-height: 4.2rem;
  height: 3.4rem;
  margin-top: ${props => (props.size === 'large' ? '1rem' : '0.8rem')};
  text-overflow: ellipsis;
  word-break: keep-all;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media ${props => props.theme.mobile} {
    margin-left: 0;
    margin-top: ${props => (props.text ? '1.5rem' : '1rem')};
  }
  @media ${props => props.theme.tablet} {
    margin-top: 1rem;
    max-height: 4.2rem;
    margin-left: ${props => (props.size === 'large' ? '1.5rem' : '0')};
  }
  @media ${props => props.theme.desktop} {
    margin-top: ${props => (props.size === 'large' ? '1rem' : '0.8rem')};
    max-height: 4rem;
    margin-left: ${props => (props.size === 'large' ? '2rem' : '0')};
  }
`;
const DescriptionContainer = styled.div`
  display: flex;
  margin-left: ${props => (props.size === 'large' ? '2rem' : '0')};
  margin-top: 1rem;
  @media ${props => props.theme.mobile} {
    margin-left: 0;
    margin-top: ${props => (props.text ? '1.3rem' : '1rem')};
  }
  @media ${props => props.theme.tablet} {
    margin-left: ${props => (props.size === 'large' ? '1.5rem' : '0')};
    margin-top: 1rem;
  }
  @media ${props => props.theme.desktop} {
    margin-top: ${props => (props.size === 'large' ? '1rem' : '0.8rem')};
    margin-left: ${props => (props.size === 'large' ? '2rem' : '0')};
    margin-top: 1rem;
  }
`;
const TagContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1.5rem;
  margin-left: ${props => (props.size === 'large' ? '2rem' : '1px')};
  @media ${props => props.theme.mobile} {
    display: none;
  }
  @media ${props => props.theme.tablet} {
    display: flex;
    margin-top: 1.6rem;
    margin-left: ${props => (props.size === 'large' ? '1.5rem' : '0')};
  }
  @media ${props => props.theme.desktop} {
    margin-top: 1.5rem;
    margin-left: ${props => (props.size === 'large' ? '2rem' : '1px')};
  }
`;
// Tag 컴포넌트 만들어서 불러오기
function Card({ obj, size, text, history,saveButton }) {
  const [save, setSave] = useState(false);
  return (
    <>
      <CardWrap size={size}>
        <VideoWrap size={size} onClick={() => history.push('/detail/1')}>
          {/* <HoverVideoPlayer
            style={{ width: '100%', height: '100%', borderRadius: '1rem' }}
            videoSrc={obj.VideoInfo.src}
            pausedOverlayWrapperStyle={{
              borderRadius: '1rem',
              overflow: 'hidden',
            }}
            pausedOverlay={
              <img
                width="100%"
                height="100%"
                borderRadius="1rem"
                src="https://user-images.githubusercontent.com/61861809/103748463-82a9d380-5047-11eb-9720-697a1f2de7cd.jpg"
              />
            }
            loadingOverlay={<div className="loading-spinner-overlay" />}
            videoStyle={{
              borderRadius: '1rem',
            }}
          /> */}
            <SaveBox saveButton = {saveButton}onClick={() => setSave(!save)}>
                  <SaveImg src={save ? SaveClickImage : SaveImage} />
                </SaveBox>
          <TimeContainer>{obj.VideoInfo.runningTime}</TimeContainer>
        </VideoWrap>
        <TextWrap size={size}>
          <Title
            onClick={() => history.push('/detail/1')}
            size={size}
            text={text}
          >
            {obj.TextInfo.videoTxt}
          </Title>
          <DescriptionContainer
            size={size}
            text={text}
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