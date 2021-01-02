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

const SliderContainer = styled.div`
    width: 100%;

`;
const LeftButton = styled.div`
    position: absolute;
    left: -1.82%;
    bottom: 50%;
    width:  3rem;
    height: 3rem;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    z-index: 2;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 0.2rem;
    padding-top: 0.2rem;
`;
const RightButton = styled.div`
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
    position: absolute;
    right:20.82%;//79.18%;
    padding-left: 0.2rem;
    padding-top: 0.2rem;
    bottom:50%;
    color: white;
    cursor: pointer;
    z-index: 2;
    color: ${({theme}) => theme.darkGray};
    display: flex;
    justify-content: center;
    align-items: center;
     &::after{
        font-size: 1.5rem ;
    } 
`;
const SliderObject = [
    {
        idx: 0,
        TextInfo : {
            category: "Hot Motiiv",
            categoryTxt: "어제 하루 조회수가 가장 높았던 모티브",
            videoTxt : `"영화 "굿 윌 헌팅" 명장면"`,
            hashTag: [
                "movie",
                "pride"
            ]
        },
        VideoInfo : {
            src : "https://www.youtube.com/embed/ZzTQFe5qX_0",
            runningTime: "02:09"
        }
    },
    {
        idx: 1,
        TextInfo : {
            category: "Best Motiiv",
            categoryTxt: "어제 하루 좋아요가 가장 많았던 모티브",
            videoTxt : `"영화 "울프 오브 월스트리트" 명장면"`,
            hashTag: [
                "무무",
                "프라"
            ]
        },
        VideoInfo : {
            src : "https://www.youtube.com/embed/GIoofmjN-8U",
            runningTime: "03:32"
        }
    },
    {
        idx: 2,
        TextInfo : {
            category: "Most motivated motiiv",
            categoryTxt: "어제 워크스페이스로 가장 많이 이동한 모티브",
            videoTxt : "The Devil Wears Prada final scene",
            hashTag: [
                "movie",
                "pride"
            ]
        },
        VideoInfo : {
            src : "https://www.youtube.com/embed/8xCfGlYQiPI",
            runningTime: "22:01"
        }
    },
    {
        idx: 3,
        TextInfo : {
            category: "Most motivated motiiv",
            categoryTxt: "어제 워크스페이스로 가장 많이 이동한 모티브",
            videoTxt : "The Devil Wears Prada final scene",
            hashTag: [
                "movie",
                "pride"
            ]
        },
        VideoInfo : {
            src : "https://www.youtube.com/embed/8xCfGlYQiPI",
            runningTime: "22:01"
        }
    },
    {
        idx: 4,
        TextInfo : {
            category: "Most motivated motiiv",
            categoryTxt: "어제 워크스페이스로 가장 많이 이동한 모티브",
            videoTxt : "The Devil Wears Prada final scene",
            hashTag: [
                "movie",
                "pride"
            ]
        },
        VideoInfo : {
            src : "https://www.youtube.com/embed/8xCfGlYQiPI",
            runningTime: "22:01"
        }
    }
]

function ImageSlider() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef();
    return (
        <SliderContainer>
        <Swiper
        spaceBetween = {30}
        slidesPerView = {4}
        ref={swiperRef}
        navigation
        >
         <LeftButton ref={prevRef} > 1 </LeftButton>
         <RightButton ref={nextRef} > 1 </RightButton>
        {SliderObject.map((obj,idx) => ( 
            <SwiperSlide >
                <Card color="white" key={`card-${idx}`} obj={obj}></Card>

            </SwiperSlide>


        ))}
        </Swiper>
        </SliderContainer>
    );
}

export default ImageSlider
