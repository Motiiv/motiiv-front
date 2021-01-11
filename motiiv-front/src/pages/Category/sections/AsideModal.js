import React from 'react';
import styled, { css } from 'styled-components';
import DownArrow from '../../../assets/global/downArrow.svg';
import UpperArrow from '../../../assets/global/upperArrow.svg';
import Menu from './Menu';

const ModalWrapper = styled.div`
  width: 100%;
  border-radius: 0.7rem;
  overflow: hidden;
  transition: 0.5s;
  ${props =>
    props.active
      ? css`
          height: fit-content;
          visibility: visible;
          opacity: 1;
        `
      : css`
          height: 0;
          visibility: hidden;
          opacity: 0;
        `}
  flex-direction: column;
  z-index: 3;
  position: absolute;
  background-color: white;
  top: 4.5rem;
  right: 0;
  justify-content: center;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.lightGray};
  padding: 1rem;
  & :nth-child(n) {
    font-size: 1.4rem;
    padding-left: 0rem;
  }
  div :nth-child(1) {
    font-size: 1.4rem;
    padding-left: 1rem;
  }
  /*   & :nth-child(1) {
    font-size: 1.4rem;
    padding-left: 1rem;
  } */
`;
const AsideText = styled.div`
  font-size: 1.5rem;
  margin-left: 2rem;
`;
const AsideTitleBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 3.4rem;
  border-radius: 0.7rem;
`;
const TitleIconBox = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  padding: 1.5rem 0.5rem;
  padding-right: 2.3rem;
`;
const TitleIconImg = styled.img`
  width: 1.5rem;
  height: 0.75rem;
`;
const AsideMenuContainer = styled.div`
  width: 100%;
  display: none;
  margin-bottom: 3rem;
  position: relative;
  @media ${props => props.theme.mobile} {
    display: flex;
  }
  @media ${props => props.theme.tablet} {
    display: none;
  }
  z-index: 4;
  align-items: center;
  height: 3.4rem;
  border-radius: 0.7rem;
  ${props =>
    props.active
      ? css`
          border: solid 1px ${({ theme }) => theme.primary};
        `
      : css`
          border: solid 1px ${({ theme }) => theme.lightGray}; // 원래 lightGray
        `}
`;

function AsideModal({
  text,
  active,
  choice,
  onHandleMenuChoice,
  onChangeActiveStatus,
  keywords,
  filters,
}) {
  const onHandleActive = () => {
    onChangeActiveStatus();
  };
  return (
    <AsideMenuContainer active={active}>
      <AsideTitleBox onClick={onHandleActive}>
        <AsideText>{text}</AsideText>
        <TitleIconBox>
          <TitleIconImg src={active ? UpperArrow : DownArrow} />
        </TitleIconBox>
      </AsideTitleBox>
      <ModalWrapper active={active}>
        <Menu
          word="전체"
          choice={choice}
          idx={0}
          onHandleMenuChoice={onHandleMenuChoice}
          filters={filters}
        ></Menu>
        {keywords.map((keyword, idx) => (
          <Menu
            key={`AsideMenu-${idx}`}
            word={keyword.name}
            choice={choice}
            idx={keyword.id}
            filters={filters}
            onHandleMenuChoice={onHandleMenuChoice}
          />
        ))}
      </ModalWrapper>
    </AsideMenuContainer>
  );
}

export default AsideModal;
