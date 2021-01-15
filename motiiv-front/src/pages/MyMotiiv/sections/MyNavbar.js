import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import mainunselected from '../../../assets/global/main_unselected.svg';
import mainselected from '../../../assets/global/main_selected.svg';
import categoryselected from '../../../assets/global/category_selected.svg';
import categoryunselected from '../../../assets/global/category_unselected.svg';
import mymotiivselected from '../../../assets/global/mymotiiv_selected.svg';
import mymotiivunselected from '../../../assets/global/mymotiiv_unselected.svg';
import Tag from '../../../components/common/Tag/Tag';

const NavContainer = styled.div`
  width: 100%;
  height: 4.9rem;
  background-color: black;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  position: ${props =>
    props.tag === '/mymotiiv' && props.isLoggined === false
      ? 'absolute'
      : 'sticky'};
  bottom: 0;
  // 모바일일때만 하단 navBar 보이게 하는코드
  @media ${props => props.theme.mobile} {
    display: flex;
  }
  @media ${props => props.theme.tablet} {
    display: none;
  }
`;

const TagWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;
const TagElem = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 7.6rem;
  height: 4.9rem;
  line-height: 0 !important;
  background-image: url(${props => props.src});
  cursor: pointer;
`;

function MyNavBar({ location, isLoggined }) {
  return (
    <NavContainer location={location} isLoggined={isLoggined}>
      <TagWrapper>
        <TagElem
          exact
          to="/"
          isActiveNav={location === '/'}
          src={location === '/' ? mainselected : mainunselected}
        >
          {/* <TagImg></TagImg> */}
        </TagElem>
        <TagElem
          to="/category/0"
          isActiveNav={location.includes('category')}
          src={
            location === '/category/0' || location === '/category/1'
              ? categoryselected
              : categoryunselected
          }
        >
          {/* <TagImg></TagImg> */}
        </TagElem>
        <TagElem
          exact
          to="/mymotiiv"
          isActiveNav={location === '/mymotiiv'}
          src={location === '/mymotiiv' ? mymotiivselected : mymotiivunselected}
        >
          {/* <TagImg></TagImg> */}
        </TagElem>
      </TagWrapper>
    </NavContainer>
  );
}

export default React.memo(MyNavBar);
