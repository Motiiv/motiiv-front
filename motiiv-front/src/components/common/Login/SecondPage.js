import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import img from '../../../assets/profile/sampleImage.png';

const Container = styled.div`
  display: ${props => props.page === 2 ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Spoqa-Han-Sans';
  color: black;
  @media ${props => props.theme.maxlaptop} {
    margin-bottom: 1.5rem;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 2.5rem;

  @media ${props => props.theme.maxlaptop} {
    font-size: 2.3rem;
  }
  @media ${props => props.theme.mobile} {
    font-size: 1.8rem;
  }
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 4.5rem;
  color: ${props => props.theme.darkGray};
  @media ${props => props.theme.maxlaptop} {
    font-size: 1.5rem;
    margin-bottom: 5rem;
  }
  @media ${props => props.theme.mobile} {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
    margin-top: 1.8rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  margin-bottom: 7.3rem;

  @media ${props => props.theme.maxlaptop} {
    margin-bottom: 6rem;
  }
  @media ${props => props.theme.mobile} {
    width: 23rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    gap: 2rem;
    margin-bottom: 4.6rem;
  }
`;
const Text = styled.div`
    width:12rem;
    text-align:center;
    font-size:1.8rem;
    font-weight:400;
    color:white;
    ${props => props.click === true ? `font-weight:700` : ``};
  @media ${props => props.theme.maxlaptop} {
    font-size: 1.5rem;
    width: 10rem;
  }
  @media ${props => props.theme.mobile} {
    width: 10rem;
  }
`;

const ImageBtn = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;
  border-radius: 1.5rem;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0 1rem;
  cursor: pointer;
  ${Text} {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

    ${props => props.click === true ?
    `
      border : 1.5px solid #2CFF2C;
    `: ``};

  @media ${props => props.theme.maxlaptop} {
    width: 11rem;
    height: 11rem;
  }
  @media ${props => props.theme.mobile} {
    margin: 0;
    width: 10.5rem;
    height: 10.5rem;
  }
`

function SecondPage({ page, selectJob }) {

  const [selectedState, setSelectedStateState] = useState({
    planner: false,
    designer: false,
    developer: false,
    youknow: false,
  });

  const onClickPlannerBtn = () => {
    setSelectedStateState({
      planner: true,
      designer: false,
      developer: false,
      youknow: false
    })
    selectJob('기획');
  }

  const onClickDesignerBtn = () => {
    setSelectedStateState({
      planner: false,
      designer: true,
      developer: false,
      youknow: false
    })
    selectJob('디자인');
  }

  const onClickDeveloperBtn = () => {
    setSelectedStateState({
      planner: false,
      designer: false,
      developer: true,
      youknow: false
    })
    selectJob('개발');
  }

  const onClickYouknowBtn = () => {
    setSelectedStateState({
      planner: false,
      designer: false,
      developer: false,
      youknow: true
    })
    selectJob('유노윤호');
  }
  return (
    <Container page={page}>
      <Title>어떤 일을 하고 계세요?</Title>
      <SubTitle>일하고 있는 분야에 맞는 동기부여 영상을 추천드려요!</SubTitle>
      <ImageContainer>
        <ImageBtn img={img} onClick={onClickPlannerBtn} click={selectedState.planner}><Text click={selectedState.planner}>기획자</Text></ImageBtn>
        <ImageBtn img={img} onClick={onClickDesignerBtn} click={selectedState.designer}><Text click={selectedState.designer}>디자이너</Text></ImageBtn>
        <ImageBtn img={img} onClick={onClickDeveloperBtn} click={selectedState.developer}><Text click={selectedState.developer}>개발자</Text></ImageBtn>
        <ImageBtn img={img} onClick={onClickYouknowBtn} click={selectedState.youknow}><Text click={selectedState.youknow}>유노윤호</Text></ImageBtn>
      </ImageContainer>
    </Container>
  );
}

export default SecondPage;
