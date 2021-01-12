import React, { useRef, useEffect } from 'react';
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
    @media ${props => props.theme.tablet768} {
      width: 65% !important;
      margin-right: 8rem !important;
    }
    @media ${props => props.theme.mobile375} {
      width: 100% !important;
    }
  }
  & .swiper-slide-prev {
    width: 15.89% !important;
    overflow: hidden !important;
    @media ${props => props.theme.tablet768} {
      width: 7% !important;
      margin-right: 8rem !important;
    }
    @media ${props => props.theme.mobile375} {
      display: none !important;
    }
  }
  /*   & .swiper-slide {
    @media ${props => props.theme.tablet768} {
      margin-right: 8rem !important;
    }
  } */
  & .swiper-slide-duplicate-next {
    @media ${props => props.theme.mobile375} {
      & div {
        display: none;
      }
    }
  }
  & .swiper-slide-next {
    width: 15.89% !important;
    overflow: hidden !important;
    @media ${props => props.theme.mobile375} {
      display: none !important;
    }
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
  @media ${props => props.theme.tablet768} {
    left: calc(15.89% - 47px);
  }
  @media ${props => props.theme.mobile375} {
    display: none;
  }
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
  left: calc(64.32% + 174px);
  @media ${props => props.theme.tablet768} {
    left: calc(64.32% + 167px);
  }
  @media ${props => props.theme.mobile375} {
    display: none;
  }
  bottom: 50%;
  cursor: pointer;
  z-index: 2;
`;
const str = [
  {
    titleText: 'Today’s hot motiiv',
    subText: '어제 하루 인기가 가장 높았던 모티브',
  },
  {
    titleText: 'Best motiiv',
    subText: '어제 하루 조회수가 가장 높았던 모티브',
  },
  {
    titleText: 'Most motivated motiiv',
    subText: '어제 하루 조회수가 가장 높았던 모티브',
  },
];
function SwiperBanner({ mostLikeVideo, mostViewVideo, bestVideo }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef();
  var bannerObj = [bestVideo, mostViewVideo, mostLikeVideo];
  useEffect(() => {}, []);

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
    breakpoints: {
      772: {
        spaceBetween: 127,
        slidesPerView: 3,
      },
      769: {
        spaceBetween: 80,
        slidesPerView: 3,
      },
      768: {
        spaceBetween: 80,
        slidesPerView: 3,
      },
      468: {
        spaceBetween: 40,
        slidesPerView: 3,
      },
    },
    style: {
      width: '100%',
      maxWidth: '128rem',
      height: '100%',
      position: 'relative',
    },
  };
  console.log(bannerObj);
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
            {bannerObj.map((obj, idx) => (
              <SwiperSlide key={`content-${idx}`}>
                {({ isActive, isPrev, isNext }) => (
                  <SwiperContent
                    titleText={str[idx].titleText}
                    subText={str[idx].subText}
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
