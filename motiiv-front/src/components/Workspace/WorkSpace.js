import React, { useState } from 'react';
import styled from 'styled-components';
import information from '../../assets/global/information.png';
import ToggleBtn from '../../components/common/Button/ToggleBtn';
import WorkSpaceContainer from './WorkSpaceContainer';
const WorkSpaceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 38rem;
  background-color: ${({ theme }) => theme.lightGray};
  @media ${props => props.theme.mobile} {
    display: none !important;
  }
`;
const Container = styled.div`
  width: 100%;
  max-width: 128rem;
  padding: 0 5.5rem;
`;

const HighLight = styled.span`
  background: ${({ theme }) => theme.primary};
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 20%,
    ${({ theme }) => theme.primary} 20%,
    ${({ theme }) => theme.primary} 55%,
    transparent 55%,
    transparent 100%
  );
`;

const Title = styled.h2`
  color: black;
  font-weight: 700;
  font-size: 3rem;
  font-family: 'Campton';
  margin-bottom: 1rem;
  @media ${props => props.theme.maxdesktop} {
    font-size: 2.5rem;
  }
`;
const SubText = styled.p`
  color: black;
  font-size: 1.6rem;
  margin-right: 1rem;
  @media ${props => props.theme.maxdesktop} {
    font-size: 1.4rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const BetweenWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const InfoIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-size: contain;
  background-image: url(${information});
  background-repeat: no-repeat;
  margin-bottom: 0.4rem;
  cursor: pointer;
  margin-right: 2rem;
`;

const InfoBox = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem 3.5rem;
  min-width: 30rem;
  max-width: 35rem;
  top: 3rem;
  right: 0;
  position: absolute;
  z-index: 3;
  background: rgba(78, 78, 78, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  backdrop-filter: blur(4px);
  border-radius: 1rem;
  color: white;
  line-height: 1.5rem;
  & b {
    font-size: 1.6rem;
    white-space: nowrap;
  }
`;

function WorkSpace() {
  const [showInfo, setShowInfo] = useState(false);
  const toggleShow = () => {
    console.log('click');
    setShowInfo(!showInfo);
  };
  return (
    <WorkSpaceWrapper>
      <Container>
        <BetweenWrapper>
          <ColumnWrapper>
            <Title>
              my <HighLight>workspace</HighLight>
            </Title>
            <SubText>
              나만의 워크스페이스를 추가하고 <b>바로 일을 시작</b>할 수 있어요!
            </SubText>
          </ColumnWrapper>
          <Wrapper>
            <SubText>
              워크스페이스 <b>바로가기</b>
            </SubText>
            <InfoIcon onClick={toggleShow} />
            <ToggleBtn></ToggleBtn>
            <InfoBox show={showInfo}>
              <b>워크스페이스 바로가기란?</b>
              <br />
              my motiiv에서 추가한 워크스페이스를 다른 페이지에서도 이용할 수
              있어요!
            </InfoBox>
          </Wrapper>
        </BetweenWrapper>
        <WorkSpaceContainer></WorkSpaceContainer>
      </Container>
    </WorkSpaceWrapper>
  );
}

export default WorkSpace;
