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
`

function FirstPage({page}) {

    return (
      <Container page={page}>
          <Title>모티브에 오신걸 환영해요!</Title>
          <SubTitle>로그인을 하고 나의 하루가 달라지는 동기부여 서비스를 경험해보세요.</SubTitle>
          <LoginBtn style = {{marginBottom:"1.6rem"}}><img src = {btnNaver}/></LoginBtn>
          <LoginBtn src = {btnKakao}><img src = {btnKakao}/></LoginBtn>
          <LinkText>
            <Link exact to="/main" style={{color:'#A7A7A7'}}>개인정보처리방침</Link>
            을 확인하였으며 이에 동의합니다.
          </LinkText>
      </Container>
    );
}
  
export default FirstPage;