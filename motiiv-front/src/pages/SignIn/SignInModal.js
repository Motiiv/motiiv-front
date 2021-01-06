import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import LastPage from './LastPage';

const ModalBackgorundWrap = styled.div`
  background: #000000;
  opacity: 0.5;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrap = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:10;

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
`;

const Indicator = styled.div`
  ${props => props.activeBtn ==='true' ?
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

const IndicatorContainer = styled.div`
  display:flex;
  width:3.6rem;
  justify-content:space-between;
`

const NextBtn = styled.div`
  ${props => props.page === 3 ?
    `
      display:none;
    `
    : props.page === 2 ?
    `
      opacity: 100;
      cursor:pointer;
    `
    :
    `
      opacity: 100;
      cursor:pointer;
    `
  };
  font-weight:400;
  font-size:1.5rem;
`

const PrevBtn = styled.div`
    ${props => props.page === 1 ?
    `
     opacity: 0;
     cursor:default;
    `
    :
    `
      opacity: 100;
      cursor:pointer;
    `
  };
  font-weight:400;
  font-size:1.5rem;
`

const FinBtn = styled.div`
    ${props => props.page === 3 ?
    `
     display:flex;
     cursor:pointer;
    `
    :
    `
      display:none;
    `
  };
  font-weight:400;
  font-size:1.5rem;
`

const BottomContainer = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
`

function SigninModal(showModal) {

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

    return (
      <>
        <ModalBackgorundWrap />
        <ModalWrap>

          <FirstPage page = {pageState}/>
          <SecondPage page = {pageState}/>
          <LastPage page = {pageState}/>

          <BottomContainer>
            <PrevBtn page = {pageState} onClick={pageDown}>&#xE000; &nbsp; 이전</PrevBtn>
            <IndicatorContainer>
              <Indicator activeBtn='true'/>
              <Indicator activeBtn='false'/>
              <Indicator activeBtn='false'/>
            </IndicatorContainer>
            <NextBtn page = {pageState} onClick={pageUp}>다음 &nbsp; &#xE001;</NextBtn>
            <FinBtn page = {pageState}>&nbsp; &nbsp; &nbsp;완료</FinBtn>
          </BottomContainer>
        </ModalWrap>
      </>
    );
  }
  
export default SigninModal;