import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';

const AsideMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${props => props.theme.mobile} {
    display: none;
  }
  @media ${props => props.theme.tablet} {
    display: flex;
  }
`;
function AsideMenu({ choice, onHandleMenuChoice, text }) {
  return (
    <AsideMenuContainer>
      <Menu
        word="전체"
        choice={choice}
        idx={0}
        onHandleMenuChoice={onHandleMenuChoice}
      />
      <Menu
        word="word1"
        choice={choice}
        idx={1}
        onHandleMenuChoice={onHandleMenuChoice}
      />
      <Menu
        word="word2"
        choice={choice}
        idx={2}
        onHandleMenuChoice={onHandleMenuChoice}
      />
    </AsideMenuContainer>
  );
}

export default AsideMenu;
