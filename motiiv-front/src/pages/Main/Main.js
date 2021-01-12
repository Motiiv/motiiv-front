import React, { useEffect } from 'react';
import SwiperBanner from './sections/SwiperBanner';
import AdBanner from './sections/AdBanner';
import Section from '../../components/common/Section/Section';
import { getMainBanners, getMainRecommend } from '../../modules/video';
import { createDispatchHook, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Loading from '../../components/common/Loading/Loading';
import ImageSlider from '../../components/common/Section/ImageSlider';
const SliderObject = [
  {
    idx: 0,
    TextInfo: {
      category: 'Hot Motiiv',
      categoryTxt: '어제 하루 조회수가 가장 높았던 모티브',
      videoTxt:
        '유재석이 꿈도 없이 성공할 수 있었던 자기관리.목표나 계획을 세우지 않는 유느님 명언 모음',
      hashTag: ['movie', 'pride'],
    },
    VideoInfo: {
      src: 'https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4',
      runningTime: '02:09',
    },
  },
  {
    idx: 1,
    TextInfo: {
      category: 'Best Motiiv',
      categoryTxt: '어제 하루 좋아요가 가장 많았던 모티브',
      videoTxt: '특별하지 않아도 특별한 콘텐츠를 만들 수 있습니다',
      hashTag: ['무무', '프라'],
    },
    VideoInfo: {
      src: 'https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4',
      runningTime: '03:32',
    },
  },
  {
    idx: 2,
    TextInfo: {
      category: 'Most motivated motiiv',
      categoryTxt: '어제 워크스페이스로 가장 많이 이동한 모티브',
      videoTxt:
        '일론머스크의 기묘한 비전 (Vision) I 그의 지치지 않는 원동력의 5가지 비밀',
      hashTag: ['movie', 'pride'],
    },
    VideoInfo: {
      src: 'https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4',
      runningTime: '22:01',
    },
  },
  {
    idx: 3,
    TextInfo: {
      category: 'Most motivated motiiv',
      categoryTxt: '어제 워크스페이스로 가장 많이 이동한 모티브',
      videoTxt: 'The Devil Wears Prada final scene',
      hashTag: ['movie', 'pride'],
    },
    VideoInfo: {
      src: 'https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4',
      runningTime: '22:01',
    },
  },
  {
    idx: 4,
    TextInfo: {
      category: 'Most motivated motiiv',
      categoryTxt: '어제 워크스페이스로 가장 많이 이동한 모티브',
      videoTxt: 'The Devil Wears Prada final scene',
      hashTag: ['movie', 'pride'],
    },
    VideoInfo: {
      src: 'https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4',
      runningTime: '22:01',
    },
  },
];

const Container = styled.div`
  width: 100%;
  height: 51rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.lightGray};
  @media ${props => props.theme.mobile} {
    height: 30rem;
    margin-bottom: 1.6rem;
  }
  @media ${props => props.theme.tablet} {
    height: 37.2rem;
    margin-bottom: 0;
  }
  @media ${props => props.theme.desktop} {
    height: 51rem;
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
const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: black;
  @media ${props => props.theme.mobile} {
    font-size: 1.8rem;
    margin-bottom: 0.6rem;
  }
  @media ${props => props.theme.tablet} {
    font-size: 2rem;
    margin-bottom: 0.6rem;
  }
  @media ${props => props.theme.desktop} {
    font-size: 3rem;
    margin-bottom: 0.6rem;
  }
`;
const SubTitle = styled.div`
  font-size: 1.6rem;
  color: black;
  @media ${props => props.theme.mobile} {
    font-size: 1.2rem;
  }
  @media ${props => props.theme.tablet} {
    font-size: 1.4rem;
  }
  @media ${props => props.theme.desktop} {
    font-size: 1.6rem;
  }
`;
const HighLight = styled.span`
  background: ${({ theme }) => theme.primary};
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 20%,
    ${({ theme }) => theme.primary} 20%,
    ${({ theme }) => theme.primary} 55%,
    transparent 55%,
    transparent 100%
  );
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
function Main() {
  const dispatch = useDispatch();
  const {
    banners,
    recommend,
    loading_banners,
    loading_recommend,
  } = useSelector(({ video, loading }) => ({
    recommend: video.m_recVideoList,
    banners: video.m_banners,
    loading_recommend: loading['video/GET_MAIN_RECOMMENDS'],
    loading_banners: loading['video/GET_MAIN_BANNERS'],
  }));

  useEffect(() => {
    dispatch(getMainBanners());
    dispatch(getMainRecommend());
  }, []);

  return (
    <YeongJinBackground>
      {Object.keys(banners).length ? (
        <>
          {/*           <SwiperBanner
            mostViewVideo={banners.mostViewVideo}
            mostLikeVideo={banners.mostLikeVideo}
          /> */}
          <Section
            object={banners.toptenVideo}
            type="top"
            size="large"
            color="gray"
            text="motiiv top 10"
            subText="이 영상을 본 80%가 바로 일을 시작했어요!"
          ></Section>
        </>
      ) : (
        <Loading></Loading>
      )}
      {Object.keys(recommend).length ? (
        <>
          <Section
            object={recommend.sectionOne.sectionOnes}
            text={recommend.sectionOne.sectiononeName}
            subText={recommend.sectionOne.sectiononeNameSub}
            nonfix="true"
          ></Section>
          <Section
            object={recommend.sectionTwo.sectionTwos}
            text={recommend.sectionTwo.sectionTwoName}
            subText={recommend.sectionTwo.sectionTwoNameSub}
            nonfix="true"
          ></Section>
          <Section
            object={recommend.sectionThree.sectionThrees}
            text={recommend.sectionThree.sectionThreeName}
            subText={recommend.sectionThree.sectionThreeNameSub}
            nonfix="true"
          ></Section>
          <AdBanner />
          <Section
            object={recommend.sectionFour.sectionFours}
            text={recommend.sectionFour.sectionFourName}
            subText={recommend.sectionFour.sectionFourNameSub}
            nonfix="true"
          ></Section>
          <Section
            object={recommend.sectionFive.sectionFives}
            text={recommend.sectionFive.sectionFiveName}
            subText={recommend.sectionFive.sectionFiveNameSub}
            nonfix="true"
          ></Section>
          <Section
            object={recommend.sectionSix.sectionSixs}
            text={recommend.sectionSix.sectionSixName}
            subText={recommend.sectionSix.sectionSixNameSub}
            nonfix="true"
          ></Section>
        </>
      ) : (
        <Loading></Loading>
      )}
    </YeongJinBackground>
  );
}

export default Main;
