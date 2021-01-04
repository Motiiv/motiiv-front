import React, { useRef } from 'react';
import styled from 'styled-components';
import SwiperContent from './SwiperContent';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import LeftButtonImage from '../../../assets/global/btn_previous.png';
import RightButtonImage from '../../../assets/global/btn_next.png';

SwiperCore.use([Pagination, Navigation, Autoplay]);

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
  width: 100%;
  height: 100%;
  display: flex;
  & .swiper-slide-active {
    width: 48.43% !important;
  }
  & .swiper-slide-prev {
    width: 15.89% !important;
    overflow: hidden !important;
  }
  & .swiper-slide-next {
    width: 15.89% !important;
    overflow: hidden !important;
  }
  & .swiper-pagination-bullet {
    border-radius: 50% !important;
    width: 5px !important;
    height: 5px !important;
    background: #ffffff !important;
    opacity: 0.4 !important;
    /* margin-bottom: 2rem !important; */
  }
  & .swiper-pagination-bullets {
    bottom: 2rem !important;
  }
  & .swiper-pagination-bullet-active {
    background: #2cff2c !important;
    border-radius: 3.5px !important;
    width: 14px !important;
    height: 5px !important;
    opacity: 1 !important;
  }
`;
const LeftButton = styled.div`
  background-image: url(${LeftButtonImage});
  background-size: contain;
  position: absolute;
  left: calc(15.89% + 47px);
  bottom: 50%;
  width: 3.3rem;
  height: 3.3rem;
  cursor: pointer;
  z-index: 2;
`;
const RightButton = styled.div`
  background-image: url(${RightButtonImage});
  background-size: contain;
  width: 3.3rem;
  height: 3.3rem;
  position: absolute;
  left: calc(64.32% + 174px); //79.18%;
  bottom: 50%;
  cursor: pointer;
  z-index: 2;
`;

const SliderObject = [
  {
    idx: 0,
    TextInfo: {
      category: 'Hot Motiiv',
      categoryTxt: '어제 하루 조회수가 가장 높았던 모티브',
      videoTxt: `"영화 "굿 윌 헌팅" 명장면"`,
      hashTag: ['movie', 'pride'],
    },
    VideoInfo: {
      src: 'https://www.youtube.com/embed/ZzTQFe5qX_0',
      runningTime: '02:09',
    },
  },
  {
    idx: 1,
    TextInfo: {
      category: 'Best Motiiv',
      categoryTxt: '어제 하루 좋아요가 가장 많았던 모티브',
      videoTxt: `"영화 "울프 오브 월스트리트" 명장면"`,
      hashTag: ['movie', 'pride'],
    },
    VideoInfo: {
      src: 'https://www.youtube.com/embed/GIoofmjN-8U',
      runningTime: '03:32',
    },
  },
  {
    idx: 2,
    TextInfo: {
      category: 'Most motivated motiiv',
      categoryTxt: '어제 워크스페이스로 가장 많이 이동한 모티브',
      videoTxt: 'The Devil Wears Prada final scene',
      hashTag: ['movie', 'pride'],
    },
    VideoInfo: {
      src: 'https://www.youtube.com/embed/8xCfGlYQiPI',
      runningTime: '22:01',
    },
  },
];
function SwiperBanner() {
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
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    loop: 'true',
    spaceBetween: 127,
    slidesPerView: 3,
    centeredSlides: true,
    //slidesPerGroup : 3,
    style: {
      width: '80%',
      maxWidth: '128rem',
      height: '100%',
      position: 'relative',
    },
  };
  return (
    <BannerSection>
      <SliderContainer>
        <ContentContainer>
          <Swiper
            ref={swiperRef}
            {...params}
            autoplay
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
          >
            <div className="swiper-pagination">•</div>
            <LeftButton ref={prevRef}></LeftButton>
            <RightButton ref={nextRef}></RightButton>
            {SliderObject.map((obj, idx) => (
              <SwiperSlide key={`content-${idx}`}>
                {({ isActive, isPrev, isNext }) => (
                  <SwiperContent
                    choice={isActive}
                    isPrev={isPrev}
                    isNext={isNext}
                    key={`content-${idx}`}
                    obj={obj}
                  ></SwiperContent>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </ContentContainer>
      </SliderContainer>
    </BannerSection>
  );
}

export default SwiperBanner;
