import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import LikeImage from '../../assets/global/like_icon.svg';
import SaveImage from '../../assets/global/save_icon.svg';
import LikeClickImage from '../../assets/global/likeclick_icon.svg';
import SaveClickImage from '../../assets/global/saveclick_icon.svg';
import Tag from '../common/Tag/Tag';
import RecommendCard from '../../pages/Detail/sections/RecommendCard';
import ShareModal from '../../pages/Detail/sections/ShareModal';
import { withRouter } from 'react-router-dom';
import BlackModal from '../common/Modal/BlackModal';
import Loading from '../common/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import Like from '../common/Like/Like';
import Save from '../common/Save/Save';

const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 4.5rem 5.5rem;
  display: flex;
  margin-bottom: 10rem;
  @media ${props => props.theme.mobile} {
    flex-direction: column;
    padding: 0;
    margin-left: auto;
    margin-right: auto;
  }
  @media ${props => props.theme.tablet} {
    flex-direction: column;
  }
  @media ${props => props.theme.desktop} {
    flex-direction: row;
  }
`;
const VideoWrapper = styled.div`
  width: 81%;
  display: flex;
  flex-direction: column;
  @media ${props => props.theme.mobile} {
    width: 100%;
  }
  @media ${props => props.theme.tablet} {
    width: 100%;
  }
  @media ${props => props.theme.desktop} {
    width: 81%;
  }
`;
const RecommendWrapper = styled.div`
  @media ${props => props.theme.mobile} {
    width: 100%;
    margin-left: 0;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    //max-width: 50rem;
    margin-left: auto;
    margin-right: auto;
  }
  @media ${props => props.theme.tablet} {
    width: 100%;
    margin-left: 0;
    /*     padding-left: 4rem;
    padding-right: 4rem; */
  }
  @media ${props => props.theme.desktop} {
    width: 19%;
    margin-left: 2.5rem;
  }
`;
const RecommendCardBox = styled.div`
  display: grid;
  width: 100%;
  @media ${props => props.theme.mobile} {
    //flex-direction: column;
  }
  @media ${props => props.theme.tablet} {
    //flex-direction: row;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-gap: 2rem;
  }
  @media ${props => props.theme.desktop} {
    grid-template-columns: auto;
    & :nth-child(1) {
      margin-top: 0;
    }
    & :nth-child(6) {
      display: none;
    }
    & :nth-child(5) {
      display: none;
    }
  }
`;
const VideoInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${props => props.theme.mobile} {
    width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
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
  @media ${props => props.theme.mobile} {
    & :nth-child(2) {
      display: none !important;
    }
  }
`;
const TitleText = styled.div`
  font-size: 2.3rem;
`;
const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  /*   @media ${props => props.theme.mobile} {
    &:nth-child(2) {
      display: none !important;
    }
  } */
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
  @media ${props => props.theme.mobile} {
    & div {
      font-size: 1.2rem;
    }
    padding-top: 1.5rem;
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
  @media ${props => props.theme.mobile} {
    margin-top: 1.5rem;
    border-bottom: none;
    & :nth-child(2):nth-last-child(1) {
      display: none !important;
    }
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
  font-size: 1.8rem;
  margin-bottom: 3rem;
  line-height: 2.5rem;
  @media ${props => props.theme.mobile} {
    width: 100%;
    border-bottom: 1px #c4c4c4 solid;
    padding-bottom: 3rem;
    margin-top: 3rem;
  }
  @media ${props => props.theme.tablet} {
    width: 70%;
  }
  @media ${props => props.theme.laptop} {
    width: 60%;
  }

  /*   ${props =>
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
          -webkit-line-clamp: 10;
        `
      : null} */
`;
const MoreToggleButton = styled.div`
  font-size: 1.5rem;
  color: #686868;
  position: absolute;
  bottom: 0;
  cursor: pointer;
  display: none;
  /*   ${props =>
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
        `} */
`;
const ShareBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const RecommendTitleText = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;
const MobileButtonBox = styled.div`
  display: none;
  @media ${props => props.theme.mobile} {
    display: flex;
  }
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 1px #c4c4c4 solid;
`;

function DetailComponent({ videoInfo, recVideoList, detailLoading }) {
  /*   const [toggle, setToggle] = useState(false);
  const [toggleExist, setToggleExist] = useState(false); */

  const [shareModal, setShareModal] = useState(false);
  const dispatch = useDispatch();
  const [blackModal, setBlackModal] = useState({
    isLogin: false,
    active: false,
  });
  const descRef = useRef();

  const BlackModalConfirm = () => {
    if (!blackModal.isLogin) {
      setBlackModal({
        ...blackModal,
        active: !blackModal.active,
      });
    }
  };

  ///////////////
  /* 더보기 버튼 모달창 */
  /*   const onHandleToggleButton = () => {
    setToggle(!toggle);
  }; */
  /* 더보기 버튼 로직 - 텍스트창 높이구해서 일정 이상이면 '더보기'버튼 활성화 */
  useEffect(() => {
    /*     if (descRef.current.offsetHeight > 66) {
      setToggleExist(!toggleExist);
    } */
  }, []);

  // [blackModal] active 부분 모달띄우게하는 컴퍼넌트
  return (
    <>
      {!detailLoading ? (
        <DetailContainer>
          {blackModal.active && (
            <BlackModal
              blackModal={blackModal}
              setBlackModal={setBlackModal}
            ></BlackModal>
          )}
          <VideoWrapper>
            <VideoDisplay>
              <iframe
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                }}
                src={videoInfo.videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </VideoDisplay>
            <VideoInfoWrapper>
              <InfoHeaderBox>
                <TitleAndButtonBox>
                  <TitleText>{videoInfo.title}</TitleText>
                  <ButtonBox>
                    <Like
                      id={videoInfo.id}
                      BlackModalConfirm={BlackModalConfirm}
                    ></Like>
                    <Save
                      id={videoInfo.id}
                      BlackModalConfirm={BlackModalConfirm}
                    ></Save>
                  </ButtonBox>
                </TitleAndButtonBox>
                <TagBox>
                  {videoInfo.VideoTags &&
                    videoInfo.VideoTags.map(tag => (
                      <Tag
                        hashTag={1}
                        color="black"
                        fontSize="1.5rem"
                        text={tag.name}
                        id={tag.id}
                      ></Tag>
                    ))}
                </TagBox>
                <TextBox>
                  <LeftBox>
                    <ViewCount>조회수 {videoInfo.viewCount}회</ViewCount>
                    <DateInfo>2021.01.01</DateInfo>
                    <UserName>{videoInfo.channelName}</UserName>
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
                <MobileButtonBox>
                  <ButtonBox>
                    <Like
                      id={videoInfo.id}
                      BlackModalConfirm={BlackModalConfirm}
                    ></Like>
                    <Save
                      id={videoInfo.id}
                      BlackModalConfirm={BlackModalConfirm}
                    ></Save>
                  </ButtonBox>
                  <ShareBox>
                    <ShareButton onClick={() => setShareModal(!shareModal)}>
                      공유하기
                    </ShareButton>
                    <ShareModal
                      pageURL={window.location.href}
                      shareModal={shareModal}
                    ></ShareModal>
                  </ShareBox>
                </MobileButtonBox>
              </InfoHeaderBox>
              <VideoDescriptionWrapper>
                <VideoDescription
                  //toggle={toggle}
                  ref={descRef}
                  //toggleExist={toggleExist}
                >
                  {videoInfo.description}
                </VideoDescription>
                {/*             <MoreToggleButton
              onClick={onHandleToggleButton}
              toggleExist={toggleExist}
              toggle={toggle}
            ></MoreToggleButton> */}
              </VideoDescriptionWrapper>
            </VideoInfoWrapper>
          </VideoWrapper>
          <RecommendWrapper>
            <RecommendTitleText>추천 모티브</RecommendTitleText>
            <RecommendCardBox>
              {recVideoList.map((video, idx) => (
                <RecommendCard video={video} key={`RecVideo-${idx}`} />
              ))}
            </RecommendCardBox>
          </RecommendWrapper>
        </DetailContainer>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
}

export default React.memo(withRouter(DetailComponent));
