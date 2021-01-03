import React from 'react';
import styled from 'styled-components';
import MoreBtn from '../Button/MoreBtn';
function AdBanner() {
  const BannerWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 25rem;
    background-color: black;
  `;
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 25rem;
    max-width: 128rem;
    padding-left: 15rem;
    @media ${props => props.theme.laptop} {
      padding-left: 5.5rem;
    }
  `;
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
  `;
  const Text = styled.h1`
    color: white;
    font-weight: 400;
    font-size: 3.3rem;
    padding-top: 0.3rem;
    margin-bottom: 2rem;
    line-height: 5rem;
    @media ${props => props.theme.laptop} {
      font-size: 2rem;
      line-height: 3rem;
    }
  `;
  const ImgBanner = styled.div`
    width: calc(25rem * calc(16 / 9));
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right center;
    background-image: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(196, 196, 196, 0) 50%
      ),
      ${props => 'url(' + props.src + ')'}; ;
  `;
  return (
    <BannerWrapper>
      <Container>
        <Wrapper>
          <Text>
            이영상을 본
            <b>
              80%가
              <br /> 워크스페이스로 바로 이동
            </b>
            했어요!
          </Text>
          <MoreBtn text="바로 영상보러가기" linkUrl="detail"></MoreBtn>
        </Wrapper>
        <ImgBanner
          src={'https://i.ytimg.com/vi/WpVLudOlauA/maxresdefault.jpg'}
        ></ImgBanner>
      </Container>
    </BannerWrapper>
  );
}

export default AdBanner;
