import React, { useState } from 'react';
import styled from 'styled-components';
import MyModal from './sections/MyModal';
import Section from '../../components/common/Section/Section';
import WorkSpace from '../../components/Workspace/WorkSpace';
import MyNavBar from './sections/MyNavbar';
import ImageSlider from '../../components/common/Section/ImageSlider';
import BlackModal from '../../components/common/Modal/BlackModal';
const MotiivWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  z-index: 0;
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
    height: 42rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${props => props.theme.mobile}{
    height: 33rem;
    margin-bottom : 1.6rem;  
    }
    @media ${props => props.theme.tablet}{
    height: 37.2rem
  }  
  @media ${props => props.theme.desktop}{
    height: 42rem;
  }  
`;
//Section도 페이지별로 쓰이니까 maxwidth 1280px
const Wrapper = styled.div`
    width: 100%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    @media ${props => props.theme.mobile}{
        max-width: 768px;
    }
    @media ${props => props.theme.tablet}{
        min-width : 768px;
    } 
    @media ${props => props.theme.desktop}{
        min-width : 1280px;
    } 
`;

const Title = styled.h2`
  margin-left: 5.5rem;
  font-size: 3rem; 
  font-weight: bold;
  color: black;
  margin-bottom: 3rem;
  @media ${props => props.theme.mobile}{
    font-size : 1.8rem;
    margin-left: 2rem;
    margin-bottom : 2rem;
    }
    @media ${props => props.theme.tablet}{
    font-size : 2rem;
    margin-left : 4rem;
    margin-bottom : 5.1rem;
  } 
    @media ${props => props.theme.desktop}{
      font-size: 3rem; 
      margin-left: 5.5rem;
      margin-bottom : 5.1rem;
    } 
`;

// const textArray = ["내가 자주본 모티브", "내가 저장한 모티브", "최근 재생한 모티브"];
function MyMotiiv() {
  const saveButton = false;
  const [loginState, setLoginState] = useState({
    isLogin: true,
  });
  return loginState.isLogin ? (
    <>
      <MotiivWrapper isLoggined={loginState.isLogin}>
        <WorkSpace></WorkSpace>
        <Container>
          <Wrapper>
          <Title>내가 <HighLight>자주 본</HighLight>모티브</Title>
          <ImageSlider saveButton = {saveButton} object={SliderObject}></ImageSlider>
          </Wrapper>
        </Container>
        
        <Container>
          <Wrapper>
          <Title>내가 <HighLight>저장 한</HighLight>모티브</Title>
          <ImageSlider saveButton = {saveButton} object={SliderObject}></ImageSlider>
          </Wrapper>
        </Container>

        <Container>
          <Wrapper>
          <Title>최근 <HighLight>재생한</HighLight>모티브</Title>
          <ImageSlider saveButton = {saveButton} object={SliderObject}></ImageSlider>
          </Wrapper>
        </Container>
        {/* <Section object={SliderObject} text="내가 자주 본 모티브"></Section> */}
        {/* <Section object={SliderObject} text="내가 저장한 모티브"></Section>
        <Section object={SliderObject} text="최근 재생한 모티브"></Section> */}
      </MotiivWrapper>
    </>
  ) : (
    <>
    <MyModal />
    {/* <BlackModal/> */}
    </>
  );
}
export default MyMotiiv;
