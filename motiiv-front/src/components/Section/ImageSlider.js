import React,{useRef} from 'react'
import Card from '../Card/Card';
import {Swiper, SwiperSlide} from 'swiper/react';
import styled, {css} from 'styled-components';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SliderSection = styled.div`
  display: flex;
  position : relative;
  width: 100%;
  justify-content: center;
  & .swiper-button-prev::after {
    position: absolute !important;
    left: 0.6rem !important;
    bottom: 50% !important;
    font-weight : 2rem !important;
    width:  3rem !important;
    height: 3rem !important;
    font-size: 1.5rem !important;
    color: ${({theme}) => theme.darkGray};
    cursor: pointer !important;
    z-index: 2 !important;
  }
  & .swiper-button-next::after {
    width: 3rem !important;
    height: 3rem !important;
    font-size: 1.5rem !important;
    position: absolute !important;
    right: 0.01rem !important;
    bottom:50% !important;
    color: ${({theme}) => theme.darkGray};
    cursor: pointer !important;
    z-index: 2 !important;
    font-weight : 2rem !important;
 }
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



function ImageSlider({SliderObject,param}) {
    const swiperRef = useRef();
    const num = param.type === "top" ? 3 : 4;
    return (
        <SliderSection>
        <Swiper
        spaceBetween = {30}
        slidesPerView = {num}
        ref={swiperRef}
        navigation
        style={{position : "static",
                width: "93%", }}>
        {SliderObject.map((obj,idx) => ( 
            <SwiperSlide >
                <Card {...param} key={`card-${idx}`} obj={obj}></Card>

            </SwiperSlide>
        ))}
        </Swiper>
        </SliderSection>
    );
}

export default ImageSlider
