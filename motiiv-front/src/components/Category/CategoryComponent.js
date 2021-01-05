import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Card from '../common/Card/Card';
import DropDownMenu from '../../pages/Category/sections/DropDownMenu';
import SortModal from '../../pages/Category/sections/SortModal';
import DownArrow from '../../assets/global/downArrow.svg';
import UpperArrow from '../../assets/global/upperArrow.svg';

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
];
const CategoryContainer = styled.div`
  padding: 5rem 5.5rem;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  margin-bottom: 15rem;
`;
const Aside = styled.div`
  min-width: 18.2rem;
  ${props =>
    props.hashTag !== '0'
      ? css`
          display: none !important;
        `
      : css`
          display: flex !important;
        `}
  flex-direction: column;
  margin-right: 11.7rem;
`;
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 0;
`;
const TitleTextAndButton = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;
const TitleAndSort = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleText = styled.div`
  ${props =>
    props.hashTag !== '0'
      ? css`
          font-size: 2.5rem;
        `
      : css`
          font-size: 1.6rem;
        `}
  font-weight: 700;
`;
const SortButtonWrapper = styled.div`
  position: relative;
`;
const SortTitleText = styled.div`
  font-size: 1.5rem;
  margin-right: 1rem;
  font-weight: 700;
`;
const SortButtonImg = styled.img`
  width: 1.5rem;
  height: 0.75rem;
`;
const GridContainer = styled.div`
  margin-top: 2.4rem;
  display: grid;
  ${props =>
    props.hashTag !== '0'
      ? css`
          grid-template-columns: repeat(4, minmax(27.4rem, 1fr));
        `
      : css`
          grid-template-columns: repeat(3, minmax(27.4rem, 1fr));
        `}
  grid-template-rows: auto;
  grid-gap: 2.5rem;
`;
function CategoryComponent({ hashTag }) {
  const [activeStatus, setActiveStatus] = useState({
    all: true,
    job: false,
    interest: false,
  });
  const [sortStatus, setSortStatus] = useState({
    text: '최신순',
    status: false,
  });
  const onChangeActiveStatus = name => {
    //console.log('CategoryComponents');
    setActiveStatus({
      ...activeStatus,
      [name]: !activeStatus[name],
    });
  };
  const onHandleSortModalStatus = () => {
    setSortStatus({
      ...sortStatus,
      status: !sortStatus.status,
    });
  };
  const onHandleSortText = name => {
    setSortStatus({
      status: !sortStatus.status,
      text: name,
    });
  };
  return (
    <CategoryContainer>
      <Aside hashTag={hashTag}>
        <DropDownMenu
          all={true}
          text="전체"
          name="all"
          onChangeActiveStatus={onChangeActiveStatus}
          active={activeStatus.all}
        />
        <DropDownMenu
          text="직군"
          name="job"
          onChangeActiveStatus={onChangeActiveStatus}
          active={activeStatus.job}
        />
        <DropDownMenu
          text="관심사"
          name="interest"
          onChangeActiveStatus={onChangeActiveStatus}
          active={activeStatus.interest}
        />
      </Aside>
      <BodyContainer>
        <TitleAndSort>
          <TitleText hashTag={hashTag}>총 1997개의 모티브가 있어요!</TitleText>
          <SortButtonWrapper>
            <TitleTextAndButton onClick={onHandleSortModalStatus}>
              <SortTitleText>{sortStatus.text}</SortTitleText>
              <SortButtonImg src={sortStatus.active ? UpperArrow : DownArrow} />
            </TitleTextAndButton>
            <SortModal
              sortModal={sortStatus.status}
              onHandleSortText={onHandleSortText}
            ></SortModal>
          </SortButtonWrapper>
        </TitleAndSort>
        <GridContainer hashTag={hashTag}>
          {SliderObject.map((obj, idx) => (
            <Card key={`Card-${idx}`} obj={obj} />
          ))}
        </GridContainer>
      </BodyContainer>
    </CategoryContainer>
  );
}

export default CategoryComponent;
