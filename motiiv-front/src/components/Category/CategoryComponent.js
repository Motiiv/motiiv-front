import React from 'react';
import styled from 'styled-components';
import Card from '../common/Card/Card';
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
const CategoryContainer = styled.div`
  padding: 5rem 5.5rem;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: center;
`;
const Aside = styled.div`
  width: 18.2rem;
  display: flex;
  flex-direction: column;
`;
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 11.7rem;
  width: 100%;
`;
const TitleAndSort = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleText = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
`;
const SortButtonWrapper = styled.div``;
const GridContainer = styled.div`
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(27.4rem, 1fr));
  grid-template-rows: auto;
  grid-gap: 2.5rem;
`;
/* 아직 정욱이가 작업중입니다~ */
function CategoryComponent() {
  return (
    <CategoryContainer>
      <Aside></Aside>
      <BodyContainer>
        <TitleAndSort>
          <TitleText>총 1997개의 모티브가 있어요!</TitleText>
          <SortButtonWrapper>최신순</SortButtonWrapper>
        </TitleAndSort>
        <GridContainer>
          {SliderObject.map((obj, idx) => (
            <Card obj={obj} />
          ))}
        </GridContainer>
      </BodyContainer>
    </CategoryContainer>
  );
}

export default CategoryComponent;
