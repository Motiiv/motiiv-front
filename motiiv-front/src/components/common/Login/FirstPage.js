import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import btnNaver from '../../../assets/global/btn_naver.png';
import btnKakao from '../../../assets/global/btn_kakao.png';

const Container = styled.div`
  display: ${props => props.page === 1 ? 'flex' : 'none' };
  justify-content: center;
  align-items:center;
  flex-direction: column;
  font-family : 'Spoqa-Han-Sans';
  color:black;
  @media ${props => props.theme.maxlaptop} {
  }
`

const Title = styled.div`
  font-weight:700;
  font-size:2.5rem;
  @media ${props => props.theme.maxlaptop} {
    font-size:2.3rem;
  }
  @media ${props => props.theme.mobile} {
    font-size:1.8rem;
  }
`

const SubTitle = styled.div`
  font-weight:400;
  font-size:1.5rem;
  margin-top:1.5rem;
  margin-bottom:4rem;
  color: ${props => props.theme.darkGray};
  @media ${props => props.theme.maxlaptop} {
    font-size:1.5rem;
    margin-bottom:3.5rem;
  }
  @media ${props => props.theme.mobile} {
    font-size:1.2rem;
    margin-bottom:5rem;
    margin-top:1.8rem;
    width:18rem;
    text-align:center;
    line-height:1.5;
  }
`

const LoginBtn = styled.button`
  cursor:pointer;
  outline:none;
  background:none;
  border:none;
`

const LinkText = styled.div`
  font-weight:100;
  font-size:1.4rem;
  margin-top:4rem;
  margin-bottom:2.9rem;
  color: #A7A7A7;
  text-decoration:none;
  @media ${props => props.theme.maxlaptop} {
    margin-top:4rem;
  }
  @media ${props => props.theme.mobile} {
    font-size:1.2rem;
    margin-top:5.5rem;
    width:17rem;
    text-align:center;
    line-height:1.5;
  }
`

function FirstPage({ page, pageUp }) {

  //버튼에 소셜로그인 함수 달기

    return (
      <Container page={page}>
          <Title>모티브에 오신걸 환영해요!</Title>
          <SubTitle>로그인을 하고 나의 하루가 달라지는 동기부여 서비스를 경험해보세요.</SubTitle>
          <LoginBtn style = {{marginBottom:"1.6rem"}}><img src = {btnNaver}/></LoginBtn>
          <LoginBtn src = {btnKakao} onClick={pageUp}><img src = {btnKakao}/></LoginBtn>
          <LinkText>
            <Link exact to="/main" style={{color:'#A7A7A7'}}>개인정보처리방침</Link>
            을 확인하였으며 이에 동의합니다.
          </LinkText>
      </Container>
    );
}
  
export default FirstPage;