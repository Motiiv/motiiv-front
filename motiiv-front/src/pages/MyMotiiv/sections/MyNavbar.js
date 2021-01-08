import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink} from 'react-router-dom';
import mainunselected from '../../../assets/global/main_unselected.svg';
import mainselected from '../../../assets/global/main_selected.svg';
import categoryselected from '../../../assets/global/category_selected.svg';
import categoryunselected from '../../../assets/global/category_unselected.svg';
import mymotiivselected from '../../../assets/global/mymotiiv_selected.svg';
import mymotiivunselected from '../../../assets/global/mymotiiv_unselected.svg';

const NavContainer = styled.div`
    width: 100%;
    height: 4.9rem;
    background-color: black;
    display: none;
    align-items: center;
    justify-content: center;
    z-index : 99999;
    position : sticky;
    bottom : 0;
    // 모바일일때만 하단 navBar 보이게 하는코드
    @media ${props => props.theme.mobile}{
    display : flex;
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

function MyNavBar({tag,loginState}) {
    return (

      <NavContainer loginState = {loginState}>
            <TagWrapper>
                <TagElem exact to="/main"  src={tag === '/main' ?  mainselected : mainunselected} >
                    {/* <TagImg></TagImg> */}
                </TagElem>
                <TagElem  to="/category/0" src={tag === '/category/0' ? categoryselected : categoryunselected} >
                    {/* <TagImg></TagImg> */}
                </TagElem>
                <TagElem exact to="/mymotiiv"  src={tag === '/mymotiiv' ? mymotiivselected : mymotiivunselected}>
                    {/* <TagImg></TagImg> */}
                </TagElem>
            </TagWrapper>

      </NavContainer>

    )
  }

  export default MyNavBar;