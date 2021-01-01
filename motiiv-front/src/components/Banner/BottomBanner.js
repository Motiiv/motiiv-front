import React from 'react';
import styled from 'styled-components';
import starImg from '../../assets/global/star.png';
import logoImg from '../../assets/global/motiiv_logo.png';
import MoreBtn from '../Button/MoreBtn';
function BottomBanner() {
  const BannerWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 12rem;
    background-color: black;
  `;
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 12rem;
    max-width: 128rem;
    padding: 0 5.5rem;
  `;
  const BannerImg = styled.img`
    height: ${props => props.height};
    margin-right: 2rem;
    @media ${props => props.theme.tablet} {
      display: none;
    }
  `;
  const Text = styled.h2`
    color: white;
    font-weight: 700;
    font-size: 2rem;
    padding-top: 0.3rem;
    margin-right: 3rem;
  `;
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
  `;

  return (
    <BannerWrapper>
      <Container>
        <Wrapper>
          <BannerImg src={starImg} height={'3rem'} />
          <Text>모티브에 대해서 더욱 궁금하다면?</Text>
        </Wrapper>
        <Wrapper>
          <BannerImg src={logoImg} height={'2.5rem'} />
          <MoreBtn
            linkUrl="https://motiiv.herokuapp.com"
            type="blank"
            text="더 알아보기"
          ></MoreBtn>
        </Wrapper>
      </Container>
    </BannerWrapper>
  );
}

export default BottomBanner;
