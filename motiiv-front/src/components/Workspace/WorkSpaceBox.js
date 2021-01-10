import React, { useState } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import FormBox from './FormBox';

const OuterBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  & svg {
    position: absolute;
    top: 1rem;
    right: 3rem;
    width: 3rem;
    height: 2rem;
    color: ${({ theme }) => theme.gray};
    cursor: pointer;
    z-index: 2;
    stroke-width: 4;
    @media ${props => props.theme.maxdesktop} {
      right: 1.3rem;
    }
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

function WorkSpaceBox({ idx, space }) {
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
