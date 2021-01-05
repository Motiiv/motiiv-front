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
`;
const Wrapper = styled.div`
    width: 100%;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
`;
// const SliderObject = [
//     {
//         idx: 0,
//         TextInfo : {
//             category: "Hot Motiiv",
//             categoryTxt: "어제 하루 조회수가 가장 높았던 모티브",
//             videoTxt : `"영화 "굿 윌 헌팅" 명장면"`,
//             hashTag: [
//                 "movie",
//                 "pride"
//             ]
//         },
//         VideoInfo : {
//             src : "https://www.youtube.com/embed/ZzTQFe5qX_0",
//             runningTime: "02:09"
//         }
//     },
//     {
//         idx: 1,
//         TextInfo : {
//             category: "Best Motiiv",
//             categoryTxt: "어제 하루 좋아요가 가장 많았던 모티브",
//             videoTxt : `"영화 "울프 오브 월스트리트" 명장면"`,
//             hashTag: [
//                 "무무",
//                 "프라"
//             ]
//         },
//         VideoInfo : {
//             src : "https://www.youtube.com/embed/GIoofmjN-8U",
//             runningTime: "03:32"
//         }
//     },
//     {
//         idx: 2,
//         TextInfo : {
//             category: "Most motivated motiiv",
//             categoryTxt: "어제 워크스페이스로 가장 많이 이동한 모티브",
//             videoTxt : "The Devil Wears Prada final scene",
//             hashTag: [
//                 "movie",
//                 "pride"
//             ]
//         },
//         VideoInfo : {
//             src : "https://www.youtube.com/embed/8xCfGlYQiPI",
//             runningTime: "22:01"
//         }
//     },
//     {
//         idx: 3,
//         TextInfo : {
//             category: "Most motivated motiiv",
//             categoryTxt: "어제 워크스페이스로 가장 많이 이동한 모티브",
//             videoTxt : "The Devil Wears Prada final scene",
//             hashTag: [
//                 "movie",
//                 "pride"
//             ]
//         },
//         VideoInfo : {
//             src : "https://www.youtube.com/embed/8xCfGlYQiPI",
//             runningTime: "22:01"
//         }
//     },
//     {
//         idx: 4,
//         TextInfo : {
//             category: "Most motivated motiiv",
//             categoryTxt: "어제 워크스페이스로 가장 많이 이동한 모티브",
//             videoTxt : "The Devil Wears Prada final scene",
//             hashTag: [
//                 "movie",
//                 "pride"
//             ]
//         },
//         VideoInfo : {
//             src : "https://www.youtube.com/embed/8xCfGlYQiPI",
//             runningTime: "22:01"
//         }
//     }
// ]



const Section = ({type,size,color,object,text}) => {
    return(
        <>  
    <Container type={type} color={color}>
        <Wrapper type = {type} color = {color}>
            <TitleContent object={object} text={text}></TitleContent>
            <ImageSlider object = {object} type={type} size= {size} color ={color}></ImageSlider>
        </Wrapper>
    </Container> 
        </>
    );
}

export default Section;
