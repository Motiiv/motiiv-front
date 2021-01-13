import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

/* 전체 모달 창 */
const ModalWrap = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};

  position: absolute;
  top: 3.6rem;
  left: 0;
  z-index: 3;

  width: 29.6rem;
  height: 18rem;
  border-radius: 1rem;
  background: ${props => props.theme.darkGray};
  padding: 2rem;

  justify-content: space-between;
  align-items: left;
  flex-direction: column;

  font-family: 'Spoqa-Han-Sans';
  @media ${props => props.theme.maxdesktop} {
    width: 23rem;
    height: 16rem;
  }
  @media ${props => props.theme.mobile} {
    width: 22.4rem;
    height: 15rem;
  }
`;

const JobButton = styled.button`
  z-index: 5;
  text-align: left;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  font-family: 'Spoqa-Han-Sans';
  font-weight: 700;
  font-size: 1.6rem;
  color: ${props => (props.type === 'selected' ? '#2CFF2C' : '#A7A7A7')};
`;

function JobModal({ show, jobfunc }) {
  const [jobState, setJobState] = useState({
    planner: 'unselected',
    designer: 'unselected',
    developer: 'unselected',
    youknow: 'unselected',
  });

  const onClickPlanerBtn = () => {
    setJobState({
      planner: 'selected',
      designer: 'unselected',
      developer: 'unselected',
      youknow: 'unselected',
    });
    jobfunc('기획');
  };

  const onClickDesignerBtn = () => {
    setJobState({
      planner: 'unselected',
      designer: 'selected',
      developer: 'unselected',
      youknow: 'unselected',
    });
    jobfunc('디자인');
  };

  const onClickDeveloperBtn = () => {
    setJobState({
      planner: 'unselected',
      designer: 'unselected',
      developer: 'selected',
      youknow: 'unselected',
    });
    jobfunc('개발');
  };

  const onClickYouknowBtn = () => {
    setJobState({
      planner: 'unselected',
      designer: 'unselected',
      developer: 'unselected',
      youknow: 'selected',
    });
    jobfunc('유노윤호');
  };

  return (
    <ModalWrap show={show}>
      <JobButton type={jobState.planner} onClick={onClickPlanerBtn}>
        기획자
      </JobButton>
      <JobButton type={jobState.designer} onClick={onClickDesignerBtn}>
        디자이너
      </JobButton>
      <JobButton type={jobState.developer} onClick={onClickDeveloperBtn}>
        개발자
      </JobButton>
      <JobButton type={jobState.youknow} onClick={onClickYouknowBtn}>
        유노윤호
      </JobButton>
    </ModalWrap>
  );
}

export default React.memo(JobModal);
