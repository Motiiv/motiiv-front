import React from 'react';
import styled, { css, ThemeConsumer, ThemeProvider } from 'styled-components';
import Tag from '../../../components/common/Tag/Tag';

const TextCard = styled.div`
  width: 32.5rem;
  display: flex;
  flex-direction: column;
  padding-right: 6.4rem;
  font-family: 'Spoqa-Han-Sans';
  font-weight: 700;
  @media ${props => props.theme.tablet768} {
    padding-right: 2.5rem;
  }
`;
const VideoCard = styled.div`
  width: 32.5rem;
  height: 18.5rem;
  position: relative;
  @media ${props => props.theme.mobile375} {
    display: none;
  }
`;
const ContentWrapper = styled.div`
  //width:100%;
  width: 62rem;
  display: flex;
  //overflow:hidden;
  //margin-right: 12.7rem;
  //justify-content: center;
  margin-top: 3rem;
  ${props =>
    props.choice
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0.25;
        `};
  ${props =>
    props.choice
      ? css`
          width: 100%;
        `
      : null};
  ${props =>
    props.isPrev
      ? `${TextCard}{
                display:none;
            }${VideoCard}{
                transform:translateX(-40%);
            }`
      : null};
  ${props =>
    props.isNext
      ? `${VideoCard}{
                display:none;
            }`
      : null}
  @media ${props => props.theme.mobile375} {
    width: 100%;
    height: 75%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right center;
    background-image: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(196, 196, 196, 0) 90%
      ),
      ${props => 'url(' + props.src + ')'};
  }
`;
const VideoRunningTime = styled.div`
  color: white;
  background-color: black;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
`;
const HeaderInfo = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  @media ${props => props.theme.mobile375} {
    padding-left: 2rem;
    padding-top: 2rem;
  }
`;
const HeaderTitleText = styled.div`
  font-size: 2rem;
  color: #2cff2c;
  font-weight: 700;
  font-family: 'Campton';
`;
const HeaderSubText = styled.div`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  color: white;
`;
const VideoText = styled.div`
  font-size: 2.8rem;
  color: white;
  margin-top: 2.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: keep-all;
  line-height: 3.7rem;
  max-height: 8rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding-top: 0.2rem;
  @media ${props => props.theme.tablet768} {
    font-size: 2.5rem;
  }
  @media ${props => props.theme.mobile375} {
    display: none;
  }
`;
const TagBox = styled.div`
  display: flex;
  width: 100%;
  margin-top: auto;
  @media ${props => props.theme.mobile375} {
    margin-bottom: 1rem;
    margin-left: 2rem;
  }
`;
const TimeContainer = styled.div`
  position: absolute;
  right: 1.5rem;
  bottom: 1.4rem;
  z-index: 1000;
  font-size: 1.2rem;
  padding: 0.3rem 0.5rem;
  padding-top: 0.4rem;
  background: rgba(0, 0, 0, 0.8);
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
    right: 1.4rem;
    bottom: 1.2rem;
    width: 3.9rem;
    height: 1.5rem;
    font-size: 1rem;
  }
  @media ${props => props.theme.desktop} {
    right: 1.5rem;
    bottom: 1.4rem;
    width: 4.5rem;
    height: 1.8rem;
    font-size: 1.2rem;

    ${props =>
      props.size === 'large'
        ? css`
            width: 5.1rem;
            height: 2.1rem;
          `
        : css`
            width: 4.5rem;
            height: 1.8rem;
          `}
  }
`;
function SwiperContent({ obj, choice, isNext, isPrev }) {
  return (
    <ContentWrapper
      src="https://i.ytimg.com/vi/XeOfUbLL-7Q/hq720_live.jpg?sqp=CLTkx_8F-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA65nbGSn5uuIqanAAfgR8uEl9-uA"
      choice={choice}
      idx={obj.idx}
      isNext={isNext}
      isPrev={isPrev}
    >
      <TextCard>
        <HeaderInfo>
          <HeaderTitleText>{obj.TextInfo.category}</HeaderTitleText>
          <HeaderSubText>{obj.TextInfo.categoryTxt}</HeaderSubText>
        </HeaderInfo>
        <VideoText>{`${obj.TextInfo.videoTxt}`}</VideoText>
        <TagBox>
          {obj.TextInfo.hashTag.map((tag, idx) => (
            <Tag
              key={`tag-${idx}`}
              hashTag={1}
              color={({ theme }) => theme.primary}
              text={obj.TextInfo.hashTag[idx]}
              fontSize="1.2rem"
            ></Tag>
          ))}
        </TagBox>
      </TextCard>
      <VideoCard choice={choice} idx={obj.idx}>
        <iframe
          width="100%"
          style={{ height: '100%', width: '100%' }}
          src={obj.VideoInfo.src}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <TimeContainer size="large">{obj.VideoInfo.runningTime}</TimeContainer>
      </VideoCard>
    </ContentWrapper>
  );
}
export default SwiperContent;
