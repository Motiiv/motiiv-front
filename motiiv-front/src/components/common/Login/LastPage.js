import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import InterestComponent from '../../../pages/Setting/sections/InterstComponent';

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

  //처음 버튼 state는 모두 false
  const btnstate = ['unselected-login', 'unselected-login', 'unselected-login', 'unselected-login', 'unselected-login', 'unselected-login', 'unselected-login', 'unselected-login', 'unselected-login', 'unselected-login', 'unselected-login', 'unselected-login'];
  const [countState, setCountState] = useState(0);

  const onClickBtn = () => {
    (async () => {
      try {
        var count = 0;
        for(var i = 0; i<btnstate.length; i++){
          if(btnstate[i] == 'selected-login'){
            count ++;
            console.log(count);
          }
        }
        setCountState(count);

      } catch (e) {}
    })();
  };

  const checkBtnCount = () => {
    (async () => {
      try {
        if(countState !=0){
          //완료 버튼 활성화
        }else{
          //완료 버튼 비활성화
        }
      } catch (e) {}
    })();
  };



    return (
      <Container page={page}>
          <Title>선택하신 관심사에 맞는 동기부여 영상을 추천드려요!</Title>
          <SubTitle>보고 싶은 관심사는 최대 3개까지 선택 가능해요!</SubTitle>

          <InterestGrid>
            <InterestComponent type={btnstate[0]} text={"키워드"}></InterestComponent>
            <InterestComponent type={btnstate[0]} text={"키워드"}></InterestComponent>
            <InterestComponent type={btnstate[0]} text={"키워드"}></InterestComponent>
            <InterestComponent type={btnstate[0]} text={"키워드"}></InterestComponent>
            <InterestComponent type={btnstate[0]} text={"키워드"}></InterestComponent>
            <InterestComponent type={btnstate[0]} text={"키워드"}></InterestComponent>
            <InterestComponent type={btnstate[0]} text={"키워드"}></InterestComponent>
            <InterestComponent type={btnstate[0]} text={"키워드"}></InterestComponent>
            <InterestComponent type={btnstate[0]} text={"키워드"}></InterestComponent>
            <InterestComponent type={btnstate[0]} text={"키워드"}></InterestComponent>
            <InterestComponent type={btnstate[0]} text={"키워드"}></InterestComponent>
            <InterestComponent type={btnstate[0]} text={"키워드"}></InterestComponent>
          </InterestGrid>
      </Container>
    );
}
  
export default LastPage;