import React from 'react';
import ImageSlider from '../../components/common/Section/ImageSlider';
import styled from 'styled-components';
import WorkSpace from '../../components/Workspace/WorkSpace';
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
      hashTag: ['무무', '프라'],
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
  {
    idx: 3,
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
  {
    idx: 4,
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

const MotiivWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;
const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 5rem 2.4rem 0 2.4rem;
  align-content: center;
  margin-bottom: 5rem;
  flex-direction: column;
  padding: 5rem 2.4rem 0 2.4rem;
`;
const Title = styled.div`
  font-size: 2.5rem;
  margin-left: 7.5rem;
  color: black;
  font-weight: bold;
  margin-bottom: 5.1rem;
`;

function MyMotiiv() {
  return (
    <>
      <MotiivWrapper>
        <WorkSpace></WorkSpace>
        <SliderWrapper>
          <Title>내가 자주 본 모티브</Title>
          <ImageSlider
            SliderObject={SliderObject}
            type="basic"
            size="small"
          ></ImageSlider>
        </SliderWrapper>
        <SliderWrapper>
          <Title>내가 저장 한 모티브</Title>
          <ImageSlider
            SliderObject={SliderObject}
            type="basic"
            size="small"
          ></ImageSlider>
        </SliderWrapper>
        <SliderWrapper>
          <Title>최근 재생한 모티브</Title>
          <ImageSlider
            SliderObject={SliderObject}
            type="basic"
            size="small"
          ></ImageSlider>
        </SliderWrapper>
      </MotiivWrapper>
    </>
  );
}
export default MyMotiiv;
