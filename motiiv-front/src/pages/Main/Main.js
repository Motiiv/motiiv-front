import React, { useEffect } from 'react';
import SwiperBanner from './sections/SwiperBanner';
import AdBanner from './sections/AdBanner';
import Section from '../../components/common/Section/Section';
import { getProfile } from '../../modules/user';
import { useDispatch, useSelector } from 'react-redux';

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

function Main({ object }) {
  const dispatch = useDispatch();
  const { userInfo, loading } = useSelector(({ user, loading }) => ({
    userInfo: user.userInfo,
    loading: loading['user/GET_PROFILE'],
  }));
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  return (
    <>
      <SwiperBanner />
      <Section
        object={SliderObject}
        type="top"
        size="large"
        color="gray"
        text="motiiv top10"
      ></Section>
      <Section object={SliderObject}></Section>
      <Section object={SliderObject}></Section>
      <Section object={SliderObject}></Section>
      <AdBanner />
      <Section object={SliderObject}></Section>
      <Section object={SliderObject}></Section>
      <Section object={SliderObject}></Section>
    </>
  );
}

export default Main;
