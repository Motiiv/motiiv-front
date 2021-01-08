import React from 'react';
import styled from 'styled-components';
import InterestComponent from '../../../../pages/Setting/sections/InterstComponent';

const Container = styled.div`
  display: ${props => props.page === 3 ? 'flex' : 'none' };
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

const InterestGrid = styled.div`
  max-width:39.6rem;
  height:16rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8.4rem, 1fr));
  gap: 1rem;

  margin-bottom:4rem;
`

function LastPage({page}) {

    return (
      <Container page={page}>
          <Title>보고싶은 동기부여 관심사를 선택해주세요!</Title>
          <SubTitle>선택하신 관심사에 맞는 동기부여 영상을 추천드려요!</SubTitle>

          <InterestGrid>
            <InterestComponent type="unselected-login" text={"키워드"}></InterestComponent>
            <InterestComponent type="unselected-login" text={"키워드"}></InterestComponent>
            <InterestComponent type="unselected-login" text={"키워드"}></InterestComponent>
            <InterestComponent type="unselected-login" text={"키워드"}></InterestComponent>
            <InterestComponent type="unselected-login" text={"키워드"}></InterestComponent>
            <InterestComponent type="unselected-login" text={"키워드"}></InterestComponent>
            <InterestComponent type="unselected-login" text={"키워드"}></InterestComponent>
            <InterestComponent type="unselected-login" text={"키워드"}></InterestComponent>
            <InterestComponent type="unselected-login" text={"키워드"}></InterestComponent>
            <InterestComponent type="unselected-login" text={"키워드"}></InterestComponent>
            <InterestComponent type="unselected-login" text={"키워드"}></InterestComponent>
            <InterestComponent type="unselected-login" text={"키워드"}></InterestComponent>
          </InterestGrid>
      </Container>
    );
}
  
export default LastPage;