import React from 'react';
import styled from 'styled-components';
import img from '../../../assets/profile/sampleImage.png';

const Container = styled.div`
  display: ${props => props.page === 2 ? 'flex' : 'none' };
  justify-content: center;
  align-items:center;
  flex-direction: column;
  font-family : 'Spoqa-Han-Sans';
  color:black;
`

const Title = styled.div`
  font-weight:700;
  font-size:2.5rem;
`

const SubTitle = styled.div`
  font-weight:400;
  font-size:1.5rem;
  margin-top:1.5rem;
  margin-bottom:4rem;
`

const ImageContainer = styled.div`
    display:flex;
    margin-bottom:4rem;
`
const Text = styled.div`
    font-size:1.8rem;
    font-weight:400;
    color:white;
`

const ImageBtn = styled.div`
    position:relative;
    width:16rem;
    height:16rem;
    border-radius:1.5rem;
    background-image : url(${props => props.img});
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
    margin: 0 1rem;
    cursor:pointer;
    ${Text}{
        position:absolute;
        z-index:1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    };
`



function SecondPage({page}) {

    return (
      <Container page={page}>
          <Title>어떤 일을 하고 계세요?</Title>
          <SubTitle>일하고 있는 분야에 맞는 동기부여 영상을 추천드려요!</SubTitle>
          <ImageContainer>
            <ImageBtn img = {img}><Text>기획</Text></ImageBtn>
            <ImageBtn img = {img}><Text>디자인</Text></ImageBtn>
            <ImageBtn img = {img}><Text>개발</Text></ImageBtn>
          </ImageContainer>
      </Container>
    );
}
  
export default SecondPage;