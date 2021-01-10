import React, { useState } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import FormBox from './FormBox';

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 10rem;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  & svg {
    position: absolute;
    top: 1rem;
    right: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    color: ${({ theme }) => theme.gray};
    cursor: pointer;
  }
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
  @media ${props => props.theme.maxdesktop} {
    font-size: 1.2rem;
  }
`;

function WorkSpaceBox({ idx }) {
  const [isShow, SetIsShow] = useState(false);
  const toggleShow = () => {
    SetIsShow(!isShow);
  };
  const hideForm = () => {
    SetIsShow(false);
  };
  return (
    <ContentBox>
      <MoreOutlined onClick={toggleShow} />
      <ImgIcon src="https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg" />
      <Title>Notion</Title>
      <FormBox idx={idx} hideForm={hideForm} isShow={isShow}></FormBox>
    </ContentBox>
  );
}

export default WorkSpaceBox;
