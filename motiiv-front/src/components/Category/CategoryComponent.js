import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Card from '../common/Card/Card';
import DropDownMenu from '../../pages/Category/sections/DropDownMenu';
import SortModal from '../../pages/Category/sections/SortModal';
import DownArrow from '../../assets/global/downArrow.svg';
import UpperArrow from '../../assets/global/upperArrow.svg';
import AsideModal from '../../pages/Category/sections/AsideModal';
import AsideMenu from '../../pages/Category/sections/AsideMenu';

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
  margin-bottom: 10rem;

  @media ${props => props.theme.mobile} {
    flex-direction: column;
    max-width: 38rem;
    padding: 1.6rem;
  }
  @media ${props => props.theme.tablet} {
    flex-direction: row;
    max-width: 768px;
    padding: 5rem 4rem;
  }
  @media ${props => props.theme.laptop} {
    max-width: 1024px;
    padding: 5rem 5.5rem;
  }
  @media ${props => props.theme.desktop} {
    max-width: 1280px;
    padding: 5rem 5.5rem;
  }
`;
const Aside = styled.div`
  min-width: 18.2rem;
  ${props =>
    props.hashTag !== '0'
      ? css`
          display: none !important;
          @media ${props => props.theme.mobile} {
            display: flex !important;
          }
        `
      : css`
          display: flex !important;
        `}
  flex-direction: column;
  @media ${props => props.theme.mobile} {
    width: 100%;
  }
  @media ${props => props.theme.tablet} {
    margin-right: 4rem;
    width: 18.2rem;
  }
  @media ${props => props.theme.laptop} {
    margin-right: 11.7rem;
  }
`;
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 0;
  @media ${props => props.theme.mobile} {
  }
  @media ${props => props.theme.tablet} {
    //max-width: 45.2rem;
  }
  @media ${props => props.theme.laptop} {
    //max-width: 87.1rem;
  }
  @media ${props => props.theme.desktop} {
    max-width: none;
  }
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
          @media ${props => props.theme.mobile} {
            font-size: 2rem;
          }
        `
      : css`
          font-size: 1.6rem;
          @media ${props => props.theme.mobile} {
            //font-size: 2rem;
          }
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
  grid-template-rows: auto;
  ${props =>
    props.hashTag !== '0'
      ? css`
          @media ${props => props.theme.mobile} {
            grid-template-columns: repeat(1, 1fr);
          }
          @media ${props => props.theme.tablet} {
            grid-template-columns: repeat(3, 1fr);
            //max-width: 65.8rem;
          }
          @media ${props => props.theme.laptop} {
            grid-template-columns: repeat(4, 1fr);
          }
          @media ${props => props.theme.desktop} {
            grid-template-columns: repeat(4, 1fr);
          }
        `
      : css`
          @media ${props => props.theme.mobile} {
            grid-template-columns: repeat(1, 1fr);
          }
          @media ${props => props.theme.tablet} {
            grid-template-columns: repeat(2, 1fr);
            max-width: 55.7rem;
          }
          @media ${props => props.theme.laptop} {
            grid-template-columns: repeat(2, 1fr);
            max-width: none;
          }
          @media ${props => props.theme.desktop} {
            grid-template-columns: repeat(3, 1fr);
          }
        `}
  grid-template-rows: auto;
  grid-gap: 2.5rem;
  & div {
    @media ${props => props.theme.tablet} {
      min-width: auto;
      min-height: auto;
    }
  }
`;
function CategoryComponent({ hashTag }) {
  const [activeStatus, setActiveStatus] = useState({
    status: false,
    choice: 0,
    text: '전체',
  });
  const [sortStatus, setSortStatus] = useState({
    text: '최신순',
    status: false,
  });
  const onChangeActiveStatus = () => {
    setActiveStatus({
      ...activeStatus,
      status: !activeStatus.status,
    });
  };
  const onHandleMenuChoice = (idx, text) => {
    setActiveStatus({
      status: false,
      choice: idx,
      text: text,
    });
  };
  /* 최신순, 인기순 정렬  */
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
        <AsideModal
          text={activeStatus.text}
          choice={activeStatus.choice}
          onChangeActiveStatus={onChangeActiveStatus}
          active={activeStatus.status}
          onHandleMenuChoice={onHandleMenuChoice}
        />
        <AsideMenu
          text={activeStatus.text}
          choice={activeStatus.choice}
          onHandleMenuChoice={onHandleMenuChoice}
        ></AsideMenu>
        {/* <DropDownMenu
          text={activeStatus.text}
          choice={activeStatus.choice}
          onChangeActiveStatus={onChangeActiveStatus}
          active={activeStatus.status}
          onHandleMenuChoice={onHandleMenuChoice}
        /> */}
        {/*         <DropDownMenu
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
        /> */}
      </Aside>
      <BodyContainer>
        <TitleAndSort>
          <TitleText hashTag={hashTag}>총 1997개의 모티브가 있어요!</TitleText>
          <SortButtonWrapper>
            <TitleTextAndButton onClick={onHandleSortModalStatus}>
              <SortTitleText>{sortStatus.text}</SortTitleText>
              <SortButtonImg src={sortStatus.status ? UpperArrow : DownArrow} />
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
