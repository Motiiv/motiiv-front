import React, { useState } from 'react';
import styled from 'styled-components';
import PlusBtn from './PlusBtn';
import WorkSpaceBox from './WorkSpaceBox';
const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5rem;
  background-color: white;
  margin-top: 4rem;
  border-radius: 1rem;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.15);
`;

function WorkSpaceContainer() {
  return (
    <CenterWrapper>
      <WorkSpaceBox></WorkSpaceBox>
      <PlusBtn></PlusBtn>
    </CenterWrapper>
  );
}

export default WorkSpaceContainer;
