import React, { useState } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import styled, { keyframes } from 'styled-components';
import FormBox from './FormBox';

const popUp = keyframes`
  0% {
    transform: scale(0.5);
    opacity:0;
  }

  100% {
    transform: scale(1);
    opacity:1;
  }
`;

const OuterBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 4;
  & svg {
    position: absolute;
    top: 1rem;
    right: 3.6rem;
    width: 1.6rem;
    height: 1.6rem;
    color: ${({ theme }) => theme.gray};
    cursor: pointer;
    z-index: 2;
    stroke-width: 7rem;
    stroke: ${({ theme }) => theme.gray};
    @media ${props => props.theme.maxdesktop} {
      right: 2.2rem;
      top: 0.8rem;
      stroke-width: 5rem;
    }
  }
  &:last-child {
    animation: ${popUp} 0.5s both ease-in;
  }
`;
const ContentBox = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 10rem;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  position: relative;
  margin-right: 3rem;
  @media ${props => props.theme.maxdesktop} {
    width: 9rem;
    height: 7.5rem;
    margin-right: 1.8rem;
    border-radius: 1rem;
  }
  &:nth-child(6) {
    margin-right: 0;
  }
`;

const ImgIcon = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  margin-bottom: 1.2rem;
  @media ${props => props.theme.maxdesktop} {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
const Title = styled.div`
  font-size: 1.4rem;
  width: 70%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  @media ${props => props.theme.maxdesktop} {
    font-size: 1.2rem;
  }
`;

function WorkSpaceBox({ idx, space, hasToShift }) {
  const [isShow, SetIsShow] = useState(false);
  const toggleShow = () => {
    SetIsShow(!isShow);
  };
  const hideForm = () => {
    SetIsShow(false);
  };
  const goSpace = () => {
    !isShow && window.open(space.url);
  };
  return (
    <OuterBox>
      <MoreOutlined onClick={toggleShow} />
      <ContentBox onClick={goSpace}>
        <ImgIcon src={space.logoUrl} />
        <Title>{space.name}</Title>
        <FormBox
          hasToShift={hasToShift}
          space={space}
          idx={idx}
          hideForm={hideForm}
          isShow={isShow}
        ></FormBox>
      </ContentBox>
    </OuterBox>
  );
}

export default WorkSpaceBox;
