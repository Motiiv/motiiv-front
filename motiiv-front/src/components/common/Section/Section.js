import React, { useRef } from 'react';
import ImageSlider from './ImageSlider';
import TitleContent from './TitleContent';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: ${props => (props.type === 'top' ? '51rem' : '42rem')};
    background-color: ${props =>
    props.color === 'gray' ? ({ theme }) => theme.lightGray : 'none'};
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${props => props.theme.tablet}{
    height: ${props => (props.type === 'top' ? '39rem' : '37.2rem')};
  } 
    /* @media ${props => props.theme.mobile}{
    height: 30rem;
    margin-top : 2rem;
    } */
`;
//Section도 페이지별로 쓰이니까 maxwidth 1280px
const Wrapper = styled.div`
    width: 100%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    @media ${props => props.theme.laptop}{
        max-width : 1024px;
    } 
    @media ${props => props.theme.tablet}{
        max-width : 768px;
    } 
    /* @media ${props => props.theme.mobile}{
        
    } */
`;



const Section = ({type,size,color,object,text}) => {
    return(
        <>  
    <Container type={type} color={color}>
        <Wrapper type = {type} color = {color}>
            <TitleContent object={object} text={text}></TitleContent>
            <ImageSlider object = {object} type={type} size= {size} color ={color} text={text}></ImageSlider>
        </Wrapper>
    </Container> 
        </>
    );
}

export default Section;