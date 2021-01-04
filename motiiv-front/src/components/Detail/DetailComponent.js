import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import LikeImage from '../../assets/global/like_icon.svg';
import SaveImage from '../../assets/global/save_icon.svg';
import LikeClickImage from '../../assets/global/likeclick_icon.svg';
import SaveClickImage from '../../assets/global/saveclick_icon.svg';
import Tag from '../common/Tag/Tag';
import RecommendCard from '../../pages/Detail/sections/RecommendCard';
import ShareModal from '../../pages/Detail/sections/ShareModal';
import { withRouter } from 'react-router-dom';

const SliderObject = [
  {
    idx: 0,
    TextInfo: {
      category: 'Hot Motiiv',
      categoryTxt: '어제 하루 조회수가 가장 높았던 모티브',
      videoTxt: `"영화 "굿 윌 헌팅" 명장면"`,
      hashTag: ['movie', 'pride'],
    },
    VideoInfo: {
      src: 'https://www.youtube.com/embed/ZzTQFe5qX_0',
      runningTime: '02:09',
    },
  },
  {
    idx: 1,
    TextInfo: {
      category: 'Best Motiiv',
      categoryTxt: '어제 하루 좋아요가 가장 많았던 모티브',
      videoTxt: `"영화 "울프 오브 월스트리트" 명장면"`,
      hashTag: ['movie', 'pride'],
    },
    VideoInfo: {
      src: 'https://www.youtube.com/embed/GIoofmjN-8U',
      runningTime: '03:32',
    },
  },
  {
    idx: 2,
    TextInfo: {
      category: 'Most motivated motiiv',
      categoryTxt: '어제 워크스페이스로 가장 많이 이동한 모티브',
      videoTxt: 'The Devil Wears Prada final scene',
      hashTag: ['movie', 'pride'],
    },
    VideoInfo: {
      src: 'https://www.youtube.com/embed/8xCfGlYQiPI',
      runningTime: '22:01',
    },
  },
];
const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 4.5rem 5.5rem;
  display: flex;
  margin-bottom: 20rem;
`;
const VideoWrapper = styled.div`
  width: 81%;
  display: flex;
  flex-direction: column;
`;
const RecommendWrapper = styled.div`
  width: 19%;
  margin-left: 2.5rem;
`;
const VideoInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoHeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  & div {
    font-family: 'SpoqaHanSans';
  }
  margin-top: 2rem;
`;
const TitleAndButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
`;
const TitleText = styled.div`
  font-size: 2.3rem;
`;
const ButtonBox = styled.div`
  display: flex;
  align-items: center;
`;
const LikeBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  line-height: 0 !important;
  cursor: pointer;
`;
const LikeText = styled.div`
  font-size: 2rem;
  margin-right: 0.5rem;
  line-height: 0 !important;
  padding-top: 0.4rem;
  ${props =>
    props.like
      ? css`
          color: black;
        `
      : css`
          color: ${({ theme }) => theme.gray};
        `}
`;
const LikeImg = styled.img`
  width: 2rem;
  height: 2rem;
`;
const SaveBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  line-height: 0 !important;
  cursor: pointer;
`;
const SaveText = styled.div`
  ${props =>
    props.save
      ? css`
          color: black;
        `
      : css`
          color: ${({ theme }) => theme.gray};
        `}
  font-size: 2rem;
  margin-right: 0.5rem;
  line-height: 0 !important;
  padding-top: 0.4rem;
`;
const SaveImg = styled.img`
  width: 2rem;
  height: 2rem;
`;
const TagBox = styled.div`
  display: flex;
  align-items: center;

  padding-top: 1rem;
  & div {
    margin-top: 0;
  }
`;
const TextBox = styled.div`
  display: flex;
  margin-top: 3.5rem;
  justify-content: space-between;
  border-bottom: 1px #c4c4c4 solid;
  padding-bottom: 2rem;
  align-items: center;
  & div {
    font-size: 1.5rem;
    color: #686868;
  }
`;
const ViewCount = styled.div`
  padding-right: 1rem;
  border-right: solid #c4c4c4 1px;
`;
const DateInfo = styled.div`
  padding: 0 1rem;
  border-right: solid #c4c4c4 1px;
`;
const UserName = styled.div`
  padding: 0 1rem;
`;
const LeftBox = styled.div`
  display: flex;
`;
const ShareButton = styled.div`
  font-size: 1.5rem;
  width: 8rem;
  height: 2.8rem;
  border-radius: 5rem;
  padding: 0.67rem 1.3rem;
  padding-top: 0.9rem;
  background-color: ${({ theme }) => theme.lightGray};
  cursor: pointer;
  color: black !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const VideoDisplay = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
`;
const VideoDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const VideoDescription = styled.div`
  margin-top: 2rem;
  width: 30%;
  font-size: 1.8rem;
  margin-bottom: 3rem;
  //letter-spacing: 0.2rem;
  line-height: 2.2rem;

  ${props =>
    props.toggleExist
      ? css`
          overflow: hidden;
          text-overflow: ellipsis;
          word-wrap: break-word;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        `
      : null}

  ${props =>
    props.toggle
      ? css`
          overflow: visible;
          -webkit-line-clamp: 10; /* 표시하고자 하는 라인 수 */
        `
      : null}
`;
const MoreToggleButton = styled.div`
  font-size: 1.5rem;
  color: #686868;
  position: absolute;
  bottom: 0;
  cursor: pointer;
  display: none;
  ${props =>
    props.toggleExist
      ? css`
          display: block;
        `
      : css``}
  ${props =>
    props.toggle
      ? css`
          &::after {
            content: '간략히';
          }
        `
      : css`
          &::after {
            content: '더보기';
          }
        `}
`;
const ShareBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
function DetailComponent({ location }) {
  const [toggle, setToggle] = useState(false);
  const [toggleExist, setToggleExist] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const descRef = useRef();

  const onHandleToggleButton = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    console.log(descRef.current.offsetHeight);
    if (descRef.current.offsetHeight > 66) {
      setToggleExist(!toggleExist);
    }
  }, []);
  return (
    <DetailContainer>
      <VideoWrapper>
        <VideoDisplay>
          <iframe
            style={{
              /* height: '42vw' */ height: '100%',
              width: '100%',
              position: 'absolute',
            }}
            src={SliderObject[0].VideoInfo.src}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoDisplay>
        <VideoInfoWrapper>
          <InfoHeaderBox>
            <TitleAndButtonBox>
              <TitleText>{SliderObject[0].TextInfo.videoTxt}</TitleText>
              <ButtonBox>
                <LikeBox onClick={() => setLike(!like)}>
                  <LikeText like={like}>좋아요</LikeText>
                  <LikeImg src={like ? LikeClickImage : LikeImage} />
                </LikeBox>
                <SaveBox onClick={() => setSave(!save)}>
                  <SaveText save={save}>저장</SaveText>{' '}
                  <SaveImg src={save ? SaveClickImage : SaveImage} />
                </SaveBox>
              </ButtonBox>
            </TitleAndButtonBox>
            <TagBox>
              <Tag
                hashTag={1}
                color="black"
                fontSize="1.5rem"
                text="movie"
              ></Tag>
              <Tag
                hashTag={1}
                color="black"
                fontSize="1.5rem"
                text="good"
              ></Tag>
              <Tag
                hashTag={1}
                color="black"
                fontSize="1.5rem"
                text="amazing"
              ></Tag>
            </TagBox>
            <TextBox>
              <LeftBox>
                <ViewCount>조회수 1000만회</ViewCount>
                <DateInfo>2021.01.01</DateInfo>
                <UserName>영화친구 김시선</UserName>
              </LeftBox>
              <ShareBox>
                <ShareButton onClick={() => setShareModal(!shareModal)}>
                  공유하기
                </ShareButton>
                <ShareModal
                  pageURL={window.location.href}
                  shareModal={shareModal}
                ></ShareModal>
              </ShareBox>
            </TextBox>
          </InfoHeaderBox>
          <VideoDescriptionWrapper>
            <VideoDescription
              toggle={toggle}
              ref={descRef}
              toggleExist={toggleExist}
            >
              시작하는 것의 즐거움, 어떻게 시작하는 것이 좋을까? 작은 시작을
              시작하는 것의 즐거움, 어떻게 시작하는 것이 좋을까? 작은 시작을
              시작하는 것의 즐거움, 어떻게 시작하는 것이 좋을까? 작은 시작을
              {/* 시작하는 것의 즐거움, 어떻게 시작하는 것이 좋을까? 작은 시작을 */}
            </VideoDescription>
            <MoreToggleButton
              onClick={onHandleToggleButton}
              toggleExist={toggleExist}
              toggle={toggle}
            ></MoreToggleButton>
          </VideoDescriptionWrapper>
        </VideoInfoWrapper>
      </VideoWrapper>
      <RecommendWrapper>
        <RecommendCard />
        <RecommendCard />
        <RecommendCard />
        <RecommendCard />
      </RecommendWrapper>
    </DetailContainer>
  );
}

export default withRouter(DetailComponent);
