import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';

const AsideMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @media ${props => props.theme.mobile} {
    display: none;
  }
  @media ${props => props.theme.tablet} {
    display: flex;
  }
`;
function AsideMenu({ choice, onHandleMenuChoice, keywords, filters }) {
  return (
    <AsideMenuContainer>
      <Menu
        word="전체"
        choice={choice}
        idx={0}
        onHandleMenuChoice={onHandleMenuChoice}
        filters={filters}
      />
      {keywords.map((keyword, idx) => (
        <Menu
          key={`AsideMenu-${idx}`}
          word={keyword.name}
          choice={choice}
          idx={keyword.id}
          onHandleMenuChoice={onHandleMenuChoice}
          filters={filters}
        />
      ))}
    </AsideMenuContainer>
  );
}

export default AsideMenu;
