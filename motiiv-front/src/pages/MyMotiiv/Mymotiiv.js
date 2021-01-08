import React, { useState } from 'react';
import styled from 'styled-components';
import MyModal from './sections/MyModal';
import Section from '../../components/common/Section/Section';
import WorkSpace from '../../components/Workspace/WorkSpace';
import MyNavBar from './sections/MyNavbar';
const MotiivWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  z-index: 0;
`;

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


// const textArray = ["내가 자주본 모티브", "내가 저장한 모티브", "최근 재생한 모티브"];
function MyMotiiv() {
  const [loginState, setLoginState] = useState({
    isLogin: true,
  });
  return loginState.isLogin ? (
    <>
      <MotiivWrapper isLoggined={loginState.isLogin}>
        <WorkSpace></WorkSpace>
        <Section object={SliderObject} text="내가 자주 본 모티브"></Section>
        <Section object={SliderObject} text="내가 저장한 모티브"></Section>
        <Section object={SliderObject} text="최근 재생한 모티브"></Section>
      </MotiivWrapper>
    </>
  ) : (
    <>
    <MyModal />
    </>
  );
}
export default MyMotiiv;
