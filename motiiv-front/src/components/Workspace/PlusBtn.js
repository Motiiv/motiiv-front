import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import FormBox from './FormBox';
const OuterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PlusBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 10rem;
  background: ${({ theme }) => theme.lightGray};
  border-radius: 1.5rem;
  cursor: pointer;
  opacity: ${props => (props.isShow ? 1 : 0.5)};
  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: ${({ theme }) => theme.darkGray};
  }
  position: relative;
  @media ${props => props.theme.maxdesktop} {
    width: 9rem;
    height: 7.5rem;
  }
  & svg {
    width: 2.8rem;
    height: 2.8rem;
    color: ${({ theme }) => theme.darkGray};
  }
  &:hover {
    opacity: 1;
  }
`;

function PlusBtn({ hasToShift }) {
  const [isShow, SetIsShow] = useState(false);
  const toggleShow = () => {
    SetIsShow(!isShow);
  };
  const hideForm = () => {
    SetIsShow(false);
  };
  return (
    <OuterWrapper>
      <PlusBox isShow={isShow} onClick={toggleShow}>
        <PlusOutlined />
      </PlusBox>
      <FormBox
        hasToShift={hasToShift}
        hideForm={hideForm}
        isShow={isShow}
        isCreate={true}
      ></FormBox>
    </OuterWrapper>
  );
}

export default React.memo(PlusBtn);
