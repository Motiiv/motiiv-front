import React from 'react';
import styled from 'styled-components';
import MenuActive from '../../../assets/global/menu_active.svg';
import MenuDefault from '../../../assets/global/menu_default.svg';

const MenuWrapper = styled.div`
  width: 100%;
  height: 3.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TitleText = styled.div`
  font-size: 1.6rem;
  padding: 0.9rem 2.4rem;
  padding-right: 0;
`;
const TitleIconBox = styled.img`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  margin: 0.7rem 0;
  //border: solid ${({ theme }) => theme.gray} 1px;
  border-radius: 0.5rem;
`;
function Menu({ word, choice, idx, onHandleMenuChoice }) {
  const onClickHandle = () => {
    onHandleMenuChoice(idx);
  };
  return (
    <MenuWrapper onClick={onClickHandle}>
      <TitleText>{word}</TitleText>
      <TitleIconBox
        src={choice === idx ? MenuActive : MenuDefault}
      ></TitleIconBox>
    </MenuWrapper>
  );
}

export default Menu;
