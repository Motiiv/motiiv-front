import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import LastPage from './LastPage';

const ModalBackgorundWrap = styled.div`
  display: ${props => props.show ? `flex` : `none`};
  background: #000000;
  opacity: 0.5;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index:30;
  overflow : hidden;

  width: auto;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const CancelBtn = styled.div`

`

const NextBtn = styled.div`
  ${props => props.page != 2 ?
    `display:none;` : 
    `opacity: 100; cursor:pointer;`
  };
  font-weight:400;
  font-size:1.5rem;
`

const PrevBtn = styled.div`
    ${props => props.page != 3 ?
    `display:none;` :
    `display:flex; cursor:pointer;`
  };
  font-weight:400;
  font-size:1.5rem;
`

const FinBtn = styled.div`
    ${props => props.page === 3 ?
    `display:flex; cursor:pointer;` :
    `display:none;`
  };
  font-weight:400;
  font-size:1.5rem;
`

const ModalWrap = styled.div`
  display: ${props => props.show ? `flex` : `none`};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:30;

  padding : 5rem 2.6rem 2.6rem 3rem;
  width: 65rem;
  height:38rem;
  border-radius: 2rem;
  background: white;
  box-shadow: 0.2rem 0.3rem 0.7rem rgba(0, 0, 0, 0.15);

  justify-content: center;
  align-items:center;
  flex-direction: column;
  font-family : 'Spoqa-Han-Sans';
  color:black;

  @media ${props => props.theme.maxlaptop} {
    width: 59rem;
    height: 35.3rem;
    padding : 4.5rem 2.5rem 2.5rem 3.3rem;
  }
  @media ${props => props.theme.mobile} {
    width: 31.1rem;
    height: 44.2rem;
    padding : 5rem 2rem 2rem 2rem;
  }

  ${NextBtn}{
    position:absolute;
    right:2.5rem;
    bottom:2.5rem;
    @media ${props => props.theme.maxlaptop} {
      bottom:3.3rem;
    }
    @media ${props => props.theme.mobile} {
      right:2rem;
      bottom:2rem;
    }
  };
  ${PrevBtn}{
    position:absolute;
    left:2.5rem;
    bottom:2.5rem;
    @media ${props => props.theme.maxlaptop} {
      bottom:3.3rem;
    }
    @media ${props => props.theme.mobile} {
      left:2rem;
      bottom:2rem;
    }
  };
  ${FinBtn}{
    position:absolute;
    right:2.5rem;
    bottom:2.5rem;
    @media ${props => props.theme.maxlaptop} {
      bottom:3.3rem;
    }
    @media ${props => props.theme.mobile} {
      right:2rem;
      bottom:2rem;
    }
  };
  ${CancelBtn}{

  }
`;

const Indicator = styled.div`
  ${props => props.activeBtn =='true' ?
    `
    width:1.4rem;
    height:0.5rem;
    background: #2CFF2C;
    border-radius: 0.35rem;
    `
  :
    `
    width:0.5rem;
    height:0.5rem;
    border-radius: 100%;
    background: #A7A7A7;
    opacity: 0.3;
    `
  };
`

const pageData = [
  {
    'first' : 'true',
    'second' : 'false',
    'last' : 'false'
  },
  {
    'first' : 'false',
    'second' : 'true',
    'last' : 'false'
  },
  {
    'first' : 'false',
    'second' : 'false',
    'last' : 'true'
  }
];

const IndicatorContainer = styled.div`
  display:flex;
  width:3.6rem;
  justify-content:space-between;
`

function SigninModal({ hideModal, isShow }) {

  // 아웃 사이드 클릭
  const myRef = useRef();
  const handleClickOutside = e => {
    if (!myRef?.current?.contains(e.target)) {
      hideModal();
      pageReset();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  const [pageState, setPageState] = useState(1);
  const pageDown = () => {
    (async () => {
      try {
        if(pageState>1){
          setPageState(pageState-1);
        }
      } catch (e) {
        
      }
    })();
  }
  const pageUp = () => {
    (async () => {
      try {
        if(pageState<3){
          setPageState(pageState+1);
        }
      } catch (e) {
        
      }
    })();
  }
  const pageReset = () => {
    (async () => {
      try {
        setPageState(1);
      } catch (e) {
        
      }
    })();
  }

  /*
  const [showState, setShowState] = useState(showModal);
  //나중에 여기서 api 연결?
  const finSignUp = () => {
    (async () => {
      try {
        setShowState(false);
      } catch (e) {
        
      }
    })();
  }
  */

    return (
      <>
        <ModalBackgorundWrap show = {isShow}/>
        <ModalWrap show = {isShow} ref={myRef}>
          <CancelBtn />
          <FirstPage page = {pageState} pageUp={pageUp}/>
          <SecondPage page = {pageState}/>
          <LastPage page = {pageState}/>
            <PrevBtn page = {pageState} onClick={pageDown}>&#xE000; &nbsp; 이전</PrevBtn>
            <NextBtn page = {pageState} onClick={pageUp}>다음 &nbsp; &#xE001;</NextBtn>
            <FinBtn page = {pageState} onclick={hideModal}>완료</FinBtn>
        </ModalWrap>
      </>
    );
  }
  
export default SigninModal;