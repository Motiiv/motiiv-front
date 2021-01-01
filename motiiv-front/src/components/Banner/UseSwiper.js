import React,{useState, useRef} from 'react'
import styled from 'styled-components';
import ContentSwiper from './sections/ContentSwiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './UseSwiper.scss';

SwiperCore.use([Pagination, Navigation, Autoplay ]);

const BannerSection = styled.div`
    width: 100%;
    height: 26rem;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SliderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ContentContainer = styled.div`
    //width: 78rem;
    width: 100%;
    height: 100%;
    //position :relative;
    display: flex;
    //overflow: hidden;
`;
const LeftButton = styled.div`
    position: absolute;
    left:20.82%;
    bottom: 50%;
    width: 3.3rem;
    height: 3.3rem;
    font-size: 1.5rem ;
    color: white;
    cursor: pointer;
    z-index: 2;
    border: solid ${({theme}) => theme.primary} 2px;
    border-radius: 50%;
    color: ${({theme}) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    &::after{
        font-size: 1.5rem ;
    } 
`;
const RightButton = styled.div`
    width: 3.3rem;
    height: 3.3rem;
    font-size: 1.5rem;
    position: absolute;
    right:20.82%;//79.18%;
    bottom:50%;
    color: white;
    cursor: pointer;
    z-index: 2;
    border: solid ${({theme}) => theme.primary} 2px;
    border-radius: 50%;
    color: ${({theme}) => theme.primary};
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
                "예나의 motiiv1"
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
                "movie",
                "예나의 motiiv2"
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
                "예나의 motiiv3"
            ]
        },
        VideoInfo : {
            src : "https://www.youtube.com/embed/8xCfGlYQiPI",
            runningTime: "22:01"
        }
    }
]
function UseSwiper() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef();
    const [choice, setChoice] = useState(0);

    const LeftButtonHandler = () =>{
        if(choice !== 0){
            setChoice(choice-1);
        }else{
            setChoice(2);
        }
    }
    const RightButtonHandler = () =>{
        if(choice !== 2){
            setChoice(choice+1);
        }else{
            setChoice(0);
        }
    }
    const params = {
        navigation : {
        prevEl: prevRef.current ? prevRef.current : null,
        nextEl: nextRef.currnet ? nextRef.current : null,
        },
        onInit : (swiper) =>{
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.update();
        },
/*         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }, */
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
/*         autoplay:{
            //autoplayStart: true,
            disableOnInteraction : false,
        }, */
        loop:"true",
        spaceBetween:127, 
        slidesPerView:3,
        centeredSlides: true,
        //slidesPerGroup : 3,
        style:{
            width: "80%",
            maxWidth: "128rem",
            height: "100%",
            position: "relative",
        },
        onSlideChangeStart: function(s){
            console.log(s);
/*             if (s.activeIndex === 3) {
                // do something here, 4th slide is active now and so on
                console.log('hi! Try to reach 4th slides');
                s.startAutoplay(); // calling autoplay on 4th slides.
            } */
        }
    }
    return (
        <BannerSection>
            <SliderContainer>
                <ContentContainer>
                <Swiper
                ref={swiperRef}
                {...params}
                onAutoplay={RightButtonHandler}
                //onTransitionEnd={RightButtonHandler}
                //onSlideChangeTransitionEnd={RightButtonHandler}
                //onSlideNextTransitionEnd={RightButtonHandler}
                //onSliderMove={RightButtonHandler}
                //onSlideChange={RightButtonHandler}
                //slidesPerGroup={5}
                //slidesPerGroupSkip={1}
                //navigation
                //spaceBetween={10}
                //slidesPerView={1}
/*                 breakpoints={
                    {
                        100:{
                            slidesPerView: 1
                        },
                        600: {
                            slidesPerView: 2
                        },
                        900:{
                            slidesPerView: 3
                        },
                        1380:{
                            slidesPerView: 4
                        }
                    }
                }  */
                //slidesPerColumnFill='column'
                //loopedSlides={6}
                //loop={true}
                
                //loopFillGroupWithBlank={true}
                >
                    <div class="swiper-pagination">•</div>
                    <LeftButton  onClick={LeftButtonHandler}  ref={prevRef}  /* className="swiper-button-prev" */ > &#xE000; </LeftButton>
                    <RightButton  onClick={RightButtonHandler}   ref={nextRef}  /* className="swiper-button-next" */  > &#xE001; </RightButton>
                    {
                        SliderObject.map((obj, idx)=>(
                            <SwiperSlide>
                                <ContentSwiper choice={choice} key={`content-${idx}`} obj={obj}></ContentSwiper>
                            </SwiperSlide>
                        ))
                    } 
                </Swiper>
                </ContentContainer>
            </SliderContainer>
        </BannerSection>
    )
}

export default UseSwiper
