import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import LastPage from './LastPage';

const ModalBackgorundWrap = styled.div`
  display: ${props => props.show ? `flex` : `none`};
  background: #000000;
  opacity: 0.5;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index:30;

  width: auto;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const NextBtn = styled.div`
  ${props => props.page === 3 ?
    `display:none;` : 
    `opacity: 100; cursor:pointer;`
  };
  font-weight:400;
  font-size:1.5rem;
`

const PrevBtn = styled.div`
    ${props => props.page === 1 ?
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

  ${NextBtn}{
    position:absolute;
    right:2.5rem;
    bottom:2.5rem;
  };
  ${PrevBtn}{
    position:absolute;
    left:2.5rem;
    bottom:2.5rem;
  };
  ${FinBtn}{
    position:absolute;
    right:2.5rem;
    bottom:2.5rem;
  };
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

function SigninModal({showModal}) {

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
        <ModalBackgorundWrap show = {showModal}/>
        <ModalWrap show = {showModal}>

          <FirstPage page = {pageState}/>
          <SecondPage page = {pageState}/>
          <LastPage page = {pageState}/>

            <PrevBtn page = {pageState} onClick={pageDown}>&#xE000; &nbsp; 이전</PrevBtn>
            
            <IndicatorContainer>
              <Indicator activeBtn={pageData[pageState-1].first}/>
              <Indicator activeBtn={pageData[pageState-1].second}/>
              <Indicator activeBtn={pageData[pageState-1].last}/>
            </IndicatorContainer>
            
            <NextBtn page = {pageState} onClick={pageUp}>다음 &nbsp; &#xE001;</NextBtn>
            <FinBtn page = {pageState}>완료</FinBtn>
        </ModalWrap>
      </>
    );
  }
  
export default SigninModal;