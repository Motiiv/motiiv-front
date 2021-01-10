import React from 'react';
import styled from 'styled-components';
import starImg from '../../../assets/global/star.png';
import logoImg from '../../../assets/global/motiiv_logo.png';
import MoreBtn from '../Button/MoreBtn';
const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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
  @media ${props => props.theme.tablet768} {
    padding: 0 2rem;
  }
`;
const BannerImg = styled.img`
  height: ${props => props.height};
  margin-right: 2rem;
  @media ${props => props.theme.maxdesktop} {
    height: 1.5rem;
  }
  @media ${props => props.theme.tablet768} {
    height: 1.2rem;
    display: ${props => props.mobileDisplay};
    margin-right: 1rem;
  }
`;
const Text = styled.h2`
  color: white;
  font-weight: 700;
  font-size: 2rem;
  padding-top: 0.3rem;
  margin-right: 3rem;
  @media ${props => props.theme.maxdesktop} {
    font-size: 1.5rem;
  }
  @media ${props => props.theme.mobile375} {
    font-size: 1.2rem;
    margin-right: 1rem;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
function BottomBanner() {
  return (
    <BannerWrapper>
      <Container>
        <Wrapper>
          <BannerImg src={starImg} height={'3rem'} mobileDisplay="flex" />
          <Text>모티브에 대해 더욱 궁금하다면?</Text>
        </Wrapper>
        <Wrapper>
          <BannerImg src={logoImg} height={'2.5rem'} mobileDisplay="none" />
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
