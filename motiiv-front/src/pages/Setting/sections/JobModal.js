import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

/* 전체 모달 창 */
const ModalWrap = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};

  position:absolute;
  top:3.6rem;
  left:0;
  z-index:3;

  width: 29.6rem;
  height:13.8rem;
  border-radius: 1rem;
  background: ${props => props.theme.darkGray};
  padding: 2rem;

  justify-content: space-between;
  align-items:left;
  flex-direction: column;

  font-family : 'Spoqa-Han-Sans';
  @media ${props => props.theme.maxdesktop} {
    width: 23rem;
    height:13.8rem;

  }
  @media ${props => props.theme.mobile} {
    width: 22.4rem;
    height:13.8rem;
  }
`;

const JobButton = styled.button`
  z-index:5;
  text-align:left;
  background:none;
  border:none;
  outline:none;
  cursor:pointer;

  font-family:'Spoqa-Han-Sans';
  font-weight: 700;
  font-size: 1.6rem;
  color: ${props => props.type === "selected"? '#2CFF2C' : '#A7A7A7'};
`

function JobModal({show}) {

  //함수랑 state 하나로 줄이고 싶은데 끙
  const [planerState, setPlanerState] = useState('unselected');
  const [designerState, setDesignerState] = useState('unselected');
  const [developerState, setDeveloperState] = useState('unselected');

  const onClickPlanerBtn = () => {
    (async () => {
      try {
        setPlanerState('selected');
        setDesignerState('unselected');
        setDeveloperState('unselected');
      } catch (e) {
        
      }
    })();
  }

  const onClickDesignerBtn = () => {
    (async () => {
      try {
        setPlanerState('unselected');
        setDesignerState('selected');
        setDeveloperState('unselected');
      } catch (e) {
        
      }
    })();
  }

  const onClickDeveloperBtn = () => {
    (async () => {
      try {
        setPlanerState('unselected');
        setDesignerState('unselected');
        setDeveloperState('selected');
      } catch (e) {
        
      }
    })();
  }

    return(
        <ModalWrap show = {show}>
          <JobButton type = {planerState} onClick={onClickPlanerBtn}>기획</JobButton>
          <JobButton type = {designerState} onClick={onClickDesignerBtn}>디자인</JobButton>
          <JobButton type = {developerState} onClick={onClickDeveloperBtn}>개발</JobButton>
        </ModalWrap>
    );
}

export default JobModal;
