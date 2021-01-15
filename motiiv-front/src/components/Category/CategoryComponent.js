import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Card from '../common/Card/Card';
//import DropDownMenu from '../../pages/Category/sections/DropDownMenu';
import SortModal from '../../pages/Category/sections/SortModal';
import AsideModal from '../../pages/Category/sections/AsideModal';
import AsideMenu from '../../pages/Category/sections/AsideMenu';
import Loading from '../common/Loading/Loading';
import DownArrowGray from '../../assets/global/gray_down.svg';
import UpperArrowGray from '../../assets/global/gray_upper.svg';
import BlackModal from '../../components/common/Modal/BlackModal';
import { useLocation } from 'react-router-dom';

const CategoryContainer = styled.div`
  padding: 5rem 5.5rem;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  display: flex;
  margin-bottom: 10rem;
  min-height: 100rem;
  @media ${props => props.theme.mobile} {
    flex-direction: column;
    max-width: 37.8rem;
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
  & {
    letter-spacing: -0.5px;
  }
`;
const Aside = styled.div`
  min-width: 19.4rem;
  position: relative;
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
    margin-right: 14.5rem;
  }
  @media ${props => props.theme.desktop} {
    margin-right: 10.5rem;
    position: fixed;
    top: 10rem;
  }
`;
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 0;

  @media ${props => props.theme.mobile} {
    padding: 0 0.1rem;
  }
  @media ${props => props.theme.tablet} {
    margin-top: 0;
  }
  @media ${props => props.theme.laptop} {
  }
  @media ${props => props.theme.desktop} {
    max-width: none;
    margin-left: ${props => (props.isMargin ? '30rem' : 0)};
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
          &:after {
            ${props =>
              css`
                content: '# ${props.tagName}';
              `}
          }
        `
      : css`
          color: var(--tag);
          font-size: 1.6rem;
          @media ${props => props.theme.mobile} {
          }
          &:after {
            ${props =>
              css`
                content: '총 ${props.videoCnt}개의 모티브가 있어요!';
              `}
          }
        `}
  font-weight: 700;
`;
const SortButtonWrapper = styled.div`
  position: relative;
`;
const SortTitleText = styled.div`
  color: var(--tag);
  font-size: 1.5rem;
  margin-right: 0.7rem;
`;
const SortButtonImg = styled.img`
  width: 1.5rem;
  height: 1rem;
  padding-bottom: 0.3rem;
`;
const GridContainer = styled.div`
  margin-top: 2.4rem;
  display: grid;
  grid-template-rows: auto;
  ${props =>
    props.hashTag !== '0'
      ? css`
          @media ${props => props.theme.mobile} {
            //grid-template-columns: repeat(1, 1fr);
            justify-content: center;
          }
          @media ${props => props.theme.tablet} {
            grid-template-columns: repeat(3, 1fr);
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
            //grid-template-columns: repeat(1, 1fr);
            justify-content: center;
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
function CategoryComponent({
  hashTag,
  keywords,
  videos,
  loading,
  videoCnt,
  tagName,
  showModal,
  isLoggined,
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  /* Aside menu 관리하기 위한 state */
  const [activeStatus, setActiveStatus] = useState({
    status: false,
    choice: 0,
    text: '전체',
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

  /* 스크롤 위로 올리기 위한 ref */
  const location = useLocation();
  /* 최신순/인기순 등 sort모달 관련 state */
  const [sortStatus, setSortStatus] = useState({
    text: '최신순',
    status: false,
    id: 'new',
  });
  const onHandleSortModalStatus = () => {
    setSortStatus({
      ...sortStatus,
      status: !sortStatus.status,
    });
  };
  const onHandleSortText = (name, id) => {
    setSortStatus({
      status: !sortStatus.status,
      text: name,
      id: id,
    });
  };

  /* 비-로그인 시 모달을 띄우기 위한 state */
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

  return (
    <CategoryContainer>
      {blackModal.active && (
        <BlackModal
          blackModal={blackModal}
          setBlackModal={setBlackModal}
          showModal={showModal}
        ></BlackModal>
      )}
      <Aside hashTag={hashTag}>
        <AsideModal
          keywords={keywords}
          text={activeStatus.text}
          choice={activeStatus.choice}
          filters={sortStatus.id}
          active={activeStatus.status}
          onChangeActiveStatus={onChangeActiveStatus}
          onHandleMenuChoice={onHandleMenuChoice}
        />
        <AsideMenu
          keywords={keywords}
          text={activeStatus.text}
          choice={activeStatus.choice}
          filters={sortStatus.id}
          onHandleMenuChoice={onHandleMenuChoice}
        ></AsideMenu>
        {/*  Drop Down 코드 */}
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
      <BodyContainer isMargin={location.pathname === '/category/0'}>
        {!loading ? (
          <>
            <TitleAndSort>
              <TitleText
                hashTag={hashTag}
                tagName={tagName ? tagName : 'category로 이동 후 tag를 클릭'}
                videoCnt={videoCnt}
              ></TitleText>
              <SortButtonWrapper>
                <TitleTextAndButton onClick={onHandleSortModalStatus}>
                  <SortTitleText>{sortStatus.text}</SortTitleText>
                  <SortButtonImg
                    src={sortStatus.status ? UpperArrowGray : DownArrowGray}
                    style={{ fill: '#ffffff' }}
                  />
                </TitleTextAndButton>
                <SortModal
                  sortModal={sortStatus.status}
                  onHandleSortText={onHandleSortText}
                  keyword={activeStatus.choice}
                ></SortModal>
              </SortButtonWrapper>
            </TitleAndSort>
            <GridContainer hashTag={hashTag}>
              {videos &&
                videos.map((video, idx) => (
                  <Card
                    key={`Card-${idx}`}
                    obj={video}
                    category={true}
                    showModal={showModal}
                    BlackModalConfirm={BlackModalConfirm}
                    isLoggined={isLoggined}
                    showModal={showModal}
                  />
                ))}
            </GridContainer>
          </>
        ) : (
          <Loading></Loading>
        )}
      </BodyContainer>
    </CategoryContainer>
  );
}

export default React.memo(CategoryComponent);
