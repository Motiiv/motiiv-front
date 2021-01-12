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

function JobModal({ show, jobfunc }) {

  const [jobState, setJobState] = useState({
      planner: 'unselected',
      designer: 'unselected',
      developer: 'unselected'
    }
  )

  const onClickPlanerBtn = () => {
    (async () => {
      try {
        setJobState({planner : 'selected', designer : 'unselected', developer:'unselected'});
        jobfunc('기획자');
      } catch (e) {
        
      }
    })();
  }

  const onClickDesignerBtn = () => {
    (async () => {
      try {
        setJobState({planner : 'unselected', designer : 'selected', developer:'unselected'});
        jobfunc('디자이너');
      } catch (e) {
        
      }
    })();
  }

  const onClickDeveloperBtn = () => {
    (async () => {
      try {
        setJobState({planner : 'unselected', designer : 'unselected', developer:'selected'});
        jobfunc('개발자');
      } catch (e) {
        
      }
    })();
  }

    return(
        <ModalWrap show = {show}>
          <JobButton type = {jobState.planner} onClick={onClickPlanerBtn}>기획자</JobButton>
          <JobButton type = {jobState.designer} onClick={onClickDesignerBtn}>디자이너</JobButton>
          <JobButton type = {jobState.developer} onClick={onClickDeveloperBtn}>개발자</JobButton>
        </ModalWrap>
    );
}

export default JobModal;
