import React, { useEffect, useState } from 'react';
import SwiperBanner from './sections/SwiperBanner';
import AdBanner from './sections/AdBanner';
import Section from '../../components/common/Section/Section';
import { getMainBanners, getMainRecommend } from '../../modules/video';
import { createDispatchHook, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Loading from '../../components/common/Loading/Loading';
import ImageSlider from '../../components/common/Section/ImageSlider';
import BlackModal from '../../components/common/Modal/BlackModal';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  /* height: 51rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.lightGray};
  @media ${props => props.theme.mobile} {
    /* height: 30rem; */
    margin-bottom: 1.6rem;
  }
  @media ${props => props.theme.tablet} {
    /* height: 37.2rem; */
    margin-bottom: 0;
  }
  @media ${props => props.theme.desktop} {
    /* height: 51rem; */
    margin-bottom: 0;
  }
`;
//Section도 페이지별로 쓰이니까 maxwidth 1280px
const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  @media ${props => props.theme.mobile} {
    max-width: 768px;
  }
  @media ${props => props.theme.tablet} {
    min-width: 768px;
  }
  @media ${props => props.theme.desktop} {
    min-width: 1280px;
  }
`;

const Wrap = styled.div`
  margin-left: 5.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => (props.text ? '5.1rem' : '3rem')};
  @media ${props => props.theme.mobile} {
    margin-left: 2rem;
    margin-top: 1.5rem;
    margin-bottom: ${props => (props.text ? '2rem' : '1rem')};
  }
  @media ${props => props.theme.tablet} {
    margin-left: 4rem;
    margin-bottom: ${props => (props.text ? '5.1rem' : '3.4rem')};
  }
  @media ${props => props.theme.desktop} {
    margin-left: 5.5rem;
    margin-bottom: ${props => (props.text ? '5.1rem' : '3rem')};
  }
`;
const YeongJinBackground = styled.div`
  width: 100%;
  height: 100%;
  @media ${props => props.theme.mobile} {
    background-color: ${({ theme }) => theme.lightGray};
  }
  @media ${props => props.theme.tablet} {
    background-color: white;
  }
  background-color: ${({ theme }) => theme.lightGray};
`;
function Main({ showModal, isLoggined }) {
  const dispatch = useDispatch();
  const [blackModal, setBlackModal] = useState({
    active: false,
  });
  const BlackModalConfirm = () => {
    if (!isLoggined) {
      setBlackModal({
        ...blackModal,
        active: !blackModal.active,
      });
    }
  };
  const {
    banners,
    recommend,
    recommendText,
    loading_banners,
    loading_recommend,
  } = useSelector(({ video, loading }) => ({
    recommend: video.m_recVideoList,
    banners: video.m_banners,
    recommendText: video.m_recTextList,
    loading_recommend: loading['video/GET_MAIN_RECOMMENDS'],
    loading_banners: loading['video/GET_MAIN_BANNERS'],
  }));
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(getMainBanners());
    dispatch(getMainRecommend());
  }, []);

  return (
    <YeongJinBackground>
      {blackModal.active && (
        <BlackModal
          blackModal={blackModal}
          setBlackModal={setBlackModal}
          showModal={showModal}
        ></BlackModal>
      )}
      {Object.keys(banners).length ? (
        <>
          <SwiperBanner
            mostViewVideo={banners.mostViewVideo}
            mostLikeVideo={banners.mostLikeVideo}
            bestVideo={banners.thirdVideos}
          />
          <Section
            object={banners.toptenVideo}
            type="top"
            size="large"
            color="gray"
            text="motiiv top 10"
            BlackModalConfirm={BlackModalConfirm}
            isLoggined={isLoggined}
            subText="이 영상을 본 80%가 바로 일을 시작했어요!"
          ></Section>
        </>
      ) : (
        <Loading
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        ></Loading>
      )}
      {recommend &&
        recommend.map((rec, idx) =>
          idx === 3 ? (
            <>
              <AdBanner />
              <Section
                key={`MainSection-${idx}`}
                object={rec}
                text={recommendText[idx].title}
                subText={recommendText[idx].subtitle}
                BlackModalConfirm={BlackModalConfirm}
                isLoggined={isLoggined}
                nonfix="true"
              ></Section>
            </>
          ) : (
            <Section
              key={`MainSection-${idx}`}
              object={rec}
              text={recommendText[idx].title}
              subText={recommendText[idx].subtitle}
              BlackModalConfirm={BlackModalConfirm}
              isLoggined={isLoggined}
              nonfix="true"
            ></Section>
          ),
        )}
    </YeongJinBackground>
  );
}

export default React.memo(Main);
