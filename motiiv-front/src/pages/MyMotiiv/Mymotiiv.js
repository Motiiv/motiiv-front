import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MyModal from './sections/MyModal';
import Section from '../../components/common/Section/Section';
import WorkSpace from '../../components/Workspace/WorkSpace';
import MyNavBar from './sections/MyNavbar';
import ImageSlider from '../../components/common/Section/ImageSlider';
import BlackModal from '../../components/common/Modal/BlackModal';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/common/Loading/Loading';
import { getVideos } from '../../modules/mymotiiv';
import { useLocation } from 'react-router-dom';
import ToggleBtn from '../../components/common/Button/ToggleBtn';

const MotiivWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  z-index: 0;
`;
const HighLight = styled.span`
  background: var(--highlight);
`;
const Container = styled.div`
  width: 100%;
  /* height: 42rem; */
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 3.4rem;
  margin-bottom: 6rem;
  @media ${props => props.theme.mobile} {
    /* height: 33rem; */
    margin-bottom: 1.6rem;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }
  @media ${props => props.theme.tablet} {
    /* height: 37.2rem; */
    padding-top: 5rem;
    padding-bottom: 3.5rem;
  }
  @media ${props => props.theme.desktop} {
    /* height: 42rem; */
    padding-top: 5rem;
    padding-bottom: 3.4rem;
  }
`;
//Section도 페이지별로 쓰이니까 maxwidth 1280px
const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  @media ${props => props.theme.mobile} {
    max-width: 768px;
  }
  @media ${props => props.theme.tablet} {
    min-width: 768px;
  }
  @media ${props => props.theme.laptop} {
    max-width: 1024px;
  }
  @media ${props => props.theme.desktop} {
    min-width: 1280px;
  }
`;

const Title = styled.h2`
  margin-left: 5.5rem;
  font-size: 3rem;
  font-weight: bold;
  color: var(--categorytext);
  margin-bottom: 3rem;
  @media ${props => props.theme.mobile} {
    font-size: 1.8rem;
    margin-left: 2rem;
    margin-bottom: 2rem;
  }
  @media ${props => props.theme.tablet} {
    font-size: 2rem;
    margin-left: 4rem;
    margin-bottom: 5.1rem;
  }
  @media ${props => props.theme.desktop} {
    font-size: 3rem;
    margin-left: 5.5rem;
    margin-bottom: 5.1rem;
  }
`;

const BlankBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #a7a7a7;
  font-size: 2rem;
  padding: 4rem;
  & label {
    cursor: auto;
    margin-bottom: 2rem;
    background-color: #a7a7a7;
  }
  & input {
    cursor: auto;
  }
  @media ${props => props.theme.tablet768} {
    font-size: 1.2rem;
  }
  @media ${props => props.theme.tablet} {
    font-size: 1.4rem;
  }
`;

// const textArray = ["내가 자주본 모티브", "내가 저장한 모티브", "최근 재생한 모티브"];
function MyMotiiv({ showModal, isLoggined }) {
  const dispatch = useDispatch();
  const saveButton = false;
  const { pathname } = useLocation();

  const { myvideos, loading } = useSelector(({ mymotiiv, loading }) => ({
    myvideos: mymotiiv.myvideos,
    loading: loading['mymotiiv/GET_MYVIDEOS'],
  }));
  /*   const { isLoggined } = useSelector(({ user, loading }) => ({
    isLoggined: user.isLoggedIn,
  })); */

  useEffect(() => {
    if (isLoggined === true) dispatch(getVideos());
  }, [isLoggined]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return isLoggined === true ? (
    <>
      <MotiivWrapper>
        <WorkSpace></WorkSpace>
        {!loading && myvideos && (
          <>
            <Container>
              <Wrapper>
                <Title>
                  내가 <HighLight>자주 본</HighLight> 모티브
                </Title>
                {myvideos.mostViewSort && myvideos.mostViewSort.length !== 0 ? (
                  <ImageSlider
                    saveButton={saveButton}
                    object={myvideos.mostViewSort}
                  ></ImageSlider>
                ) : (
                  <BlankBox>
                    <ToggleBtn></ToggleBtn>
                    아직 자주 본 모티브가 없어요
                  </BlankBox>
                )}
              </Wrapper>
            </Container>
            <Container>
              <Wrapper>
                <Title>
                  내가 <HighLight>저장한</HighLight> 모티브
                </Title>
                {myvideos.savedResult && myvideos.savedResult.length !== 0 ? (
                  <ImageSlider
                    saveButton={saveButton}
                    object={myvideos.savedResult}
                  ></ImageSlider>
                ) : (
                  <BlankBox>
                    <ToggleBtn></ToggleBtn>
                    아직 저장한 모티브가 없어요
                  </BlankBox>
                )}
              </Wrapper>
            </Container>

            <Container>
              <Wrapper>
                <Title>
                  최근 <HighLight>재생한</HighLight> 모티브
                </Title>
                {myvideos.recentViewSort &&
                myvideos.recentViewSort.length !== 0 ? (
                  <ImageSlider
                    saveButton={saveButton}
                    object={myvideos.recentViewSort}
                  ></ImageSlider>
                ) : (
                  <BlankBox>
                    <ToggleBtn></ToggleBtn>
                    아직 재생한 모티브가 없어요
                  </BlankBox>
                )}
              </Wrapper>
            </Container>
          </>
        )}
        {loading && <Loading />}
      </MotiivWrapper>
    </>
  ) : (
    <MyModal showModal={showModal} />
  );
}
export default React.memo(MyMotiiv);

{
  /* <Section object={SliderObject} text="내가 자주 본 모티브"></Section> */
}
{
  /* <Section object={SliderObject} text="내가 저장한 모티브"></Section>
        <Section object={SliderObject} text="최근 재생한 모티브"></Section> */
}
