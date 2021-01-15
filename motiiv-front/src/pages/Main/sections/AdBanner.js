import React from 'react';
import styled from 'styled-components';
import MoreBtn from '../../../components/common/Button/MoreBtn';
const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 25rem;
  background-color: black;
  @media ${props => props.theme.maxdesktop} {
    height: 21.2rem;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 25rem;
  max-width: 128rem;
  padding-left: 15rem;
  position: relative;
  @media ${props => props.theme.maxdesktop} {
    padding-left: 5.5rem;
    height: 21.2rem;
  }
  @media ${props => props.theme.tablet768} {
    padding-left: 3rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      ${props => 'url(' + props.src + ')'};
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  @media ${props => props.theme.tablet768} {
    height: 80%;
    justify-content: space-between;
  }
`;
const Text = styled.h1`
  color: white;
  font-weight: 400;
  font-size: 3.3rem;
  padding-top: 0.3rem;
  margin-bottom: 2rem;
  line-height: 5rem;
  @media ${props => props.theme.tablet768} {
    font-size: 2rem;
    line-height: 3rem;
  }
  @media ${props => props.theme.labtop} {
    font-size: 2.3rem;
    line-height: 4rem;
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
    ${props => 'url(' + props.src + ')'};
  @media ${props => props.theme.tablet768} {
    display: none;
  }
`;
function AdBanner({ adBanners }) {
  return (
    <BannerWrapper>
      <Container src={adBanners && adBanners.thumbnailImageUrl}>
        <Wrapper>
          <Text>
            이영상을 본
            <b>
              80%가
              <br /> 워크스페이스로 바로 이동
            </b>
            했어요!
            {/* {adBanners.title} */}
          </Text>
          <MoreBtn
            text="바로 영상보러가기"
            linkUrl="detail"
            adId={adBanners && adBanners.id}
          ></MoreBtn>
        </Wrapper>
        <ImgBanner src={adBanners && adBanners.thumbnailImageUrl}></ImgBanner>
      </Container>
    </BannerWrapper>
  );
}

export default React.memo(AdBanner);
