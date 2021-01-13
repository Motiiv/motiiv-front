import React, { useRef, useEffect } from 'react';
import ImageSlider from './ImageSlider';
import TitleContent from './TitleContent';
import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: ${props => (props.type === 'top' ? '51rem' : '42rem')};
  background-color: ${props =>
    props.color === 'gray' ? ({ theme }) => theme.lightGray : 'none'};
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${props => props.theme.mobile} {
    //height: 30rem;
    margin-bottom: 1.6rem;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
    height: ${props => (props.type === 'top' ? '35rem' : '37.2rem')};
    padding-top: ${props => (props.color === 'gray' ? '5rem' : 'none')};
  }
  @media ${props => props.theme.tablet} {
    height: ${props => (props.type === 'top' ? '39rem' : '37.2rem')};
    //margin-top: ${props => (props.color === 'gray' ? '4rem' : 'none')};
    padding-top: ${props => (props.color === 'gray' ? '10rem' : 'none')};
    box-shadow: none;
    margin-bottom: 0;
  }
  @media ${props => props.theme.laptop} {
    height: ${props => (props.type === 'top' ? '51rem' : '42rem')};
    padding-top: ${props => (props.color === 'gray' ? '0' : 'none')};
  }
  @media ${props => props.theme.desktop} {
    height: ${props => (props.type === 'top' ? '51rem' : '42rem')};
    padding-top: ${props => (props.color === 'gray' ? '0' : 'none')};
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

const Section = ({ type, size, color, object, text, nonfix, subText,isLoggined,showModal,BlackModalConfirm}) => {
  return (
    <>
      <Container type={type} color={color}>
        <Wrapper type={type} color={color}>
          <TitleContent
            nonfix={nonfix}
            object={object}
            text={text}
            subText={subText}
          ></TitleContent>
          <ImageSlider
            object={object}
            type={type}
            size={size}
            color={color}
            text={text}
            nonfix={nonfix}
            BlackModalConfirm={BlackModalConfirm}
            isLoggined= {isLoggined}
            showModal={showModal}
          ></ImageSlider>
        </Wrapper>
      </Container>
    </>
  );
};

export default Section;
