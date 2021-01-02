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

const SwiperContainer = styled.div`
    position: relative;
`;

const LeftButton = styled.div`
    position: absolute;
    left: 10rem;
    bottom: 50%;
    font-weight : 2rem;
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
    right:10rem;//79.18%;
    padding-left: 0.2rem;
    padding-top: 0.2rem;
    bottom:50%;
    color: white;
    cursor: pointer;
    z-index: 2;
    color: ${({theme}) => theme.darkGray};
    display: flex;
    justify-content: center;
    font-weight : 2rem;
    align-items: center;
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

    const params = {
        navigation: {
          prevEl: prevRef.current ? prevRef.current : null,
          nextEl: nextRef.currnet ? nextRef.current : null,
        },
        onInit: swiper => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
        },
        spaceBetween: 30,
        slidesPerView: 3,
        //slidesPerGroup : 3,
      };
    return (
        <SwiperContainer>
        <Swiper
        {...params}
        ref={swiperRef}
        style={{width:"80%",
               position : "static",
               maxwidth: "108rem" }}>
        <LeftButton ref={prevRef} > &#xE000; </LeftButton>
        <RightButton ref={nextRef} > &#xE001;</RightButton>
        {SliderObject.map((obj,idx) => ( 
            <SwiperSlide >
                <Card color="white" key={`card-${idx}`} obj={obj}></Card>

            </SwiperSlide>
        ))}
        </Swiper>
        </SwiperContainer>
    );
}

export default ImageSlider
