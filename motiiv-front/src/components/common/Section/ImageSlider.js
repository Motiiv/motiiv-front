import React, { useRef, useEffect } from 'react';
import Card from '../Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled, { css } from 'styled-components';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

// imageslider따로 쓰이니까 max-width : 1280으로 잡아놨습니다.
const SliderSection = styled.div`
  display: flex;
  position: relative;
  max-width: 1280px;
  width: 100%;
  padding: 0 5rem;
  justify-content: center;
  & .swiper-button-prev::after {
    display: flex;
    justify-content: center;
    position: absolute !important;
    right: 0 !important;
    ${props =>
      props.size === 'large'
        ? css`
            top: -4rem !important;
          `
        : css`
            top: -4.5rem !important;
          `}
    font-weight: 2rem !important;
    width: 3rem !important;
    height: 3rem !important;
    font-size: 1.5rem !important;
    color: var(--swiperafter);
    cursor: pointer !important;
    z-index: 2 !important;
  }
  & .swiper-button-next::after {
    display: flex;
    justify-content: center;
    position: absolute !important;
    left: 0.5rem !important;
    ${props =>
      props.size === 'large'
        ? css`
            top: -4rem !important;
          `
        : css`
            top: -4.5rem !important;
          `}
    font-weight: 2rem !important;
    width: 3rem !important;
    height: 3rem !important;
    font-size: 1.5rem !important;
    color: var(--swiperafter);
    cursor: pointer !important;
    z-index: 2 !important;
  }
  & .swiper-slide {
    flex: ${props => (props.defaultSpace ? 'none' : '1')};
  }
  & .swiper-scrollbar {
    display: none !important;
  }
  @media ${props => props.theme.mobile} {
    padding: 0 2rem;
    padding-right: 0;
    & .swiper-button-prev::after {
      display: none !important;
    }
    & .swiper-button-next::after {
      display: none !important;
    }
    & .swiper-slide {
      flex: ${props => (props.defaultSpace ? '1' : '1')}!important;
      max-width : ${props => (props.defaultSpace ? '300px' : 'none')}!important;
    }
  }

  @media ${props => props.theme.tablet} {
    padding: 0 4rem;
    max-width: 1024px;
    & .swiper-button-prev::after {
      display: flex !important;
    }
    & .swiper-button-next::after {
      display: flex !important;
    }
    & .swiper-slide {
      flex: ${props => (props.defaultSpace ? '1' : '1')}!important;
      max-width : ${props => (props.defaultSpace ? '216px' : 'none')}!important;
    }
  }

  @media ${props => props.theme.laptop} {
    max-width: 1280px;
    padding: 0 4rem;
    & .swiper-button-prev::after {
      display: flex !important;
    }
    & .swiper-button-next::after {
      display: flex !important;
    }
    & .swiper-slide {
      flex: ${props => (props.defaultSpace ? 'none' : '1')}!important;
      max-width : none !important;
    }
  }

  @media ${props => props.theme.desktop} {
    max-width: 1280px;
    ${props =>
      props.size === 'large'
        ? css`
            padding: 0 4.5rem;
            padding-left: 5.1rem;
          `
        : css`
            padding: 0 5.5rem;
          `}
          & .swiper-slide {
         max-width : none !important;
    }

          
  }
`;

function ImageSlider({
  object,
  type,
  size,
  text,
  saveButton,
  nonfix,
  BlackModalConfirm,
  isLoggined,
  myObject,
}) {
  const swiperRef = useRef();
  const num = type === 'top' ? 3 : 4;
  const space = type === 'top' ? 20 : 25;
  const largeHeight = size === 'large' ? '36rem' : 'auto';
  let defaultSpace = false;
  if (object && (object.length < 4)) {
    defaultSpace = true;
  }
  const defaultNum = defaultSpace === true ? 2 : 3;
  return (
    <>
      <SliderSection size={size} defaultSpace={defaultSpace}>
        <Swiper
          spaceBetween={space}
          slidesPerView={num}
          ref={swiperRef}
          navigation
          scrollbar
          breakpoints={{
            1280: {
              spaceBetween: space,
              slidesPerView: num,
            },
            1024: {
              spaceBetween: 16,
              slidesPerView: num,
            },
            768: {
              spaceBetween: 20,
              slidesPerView: 3,
            },
            600: {
              spaceBetween: 16,
              slidesPerView: 1,
            },
            468: {
              spaceBetween: 16,
              slidesPerView: 1,
            },
            300: {
              spaceBetween: 16,
              slidesPerView: 1,
            },
            // 1024 : {
            //   spaceBetween : 20,
            //   slidesePerView: 3,
            // }
            // 769 : {
            //   spaceBetween: 20,
            //   slidesPerView: 3
            // },
            // 1024 : {
            //   spaceBetween: space,
            //   slidesPerView: num,
            // },
            // 1280 : {
            //   spaceBetween : space,
            //   slidesPerView : num
            // },
          }}
          style={{
            position: 'static',
            width: '100%',
            height: largeHeight,
            paddingLeft: '0.5rem',
            paddingRight: '0.7rem',
          }}
        >
          {object &&
            object.map((obj, idx) => (
              <SwiperSlide>
                <Card
                  size={size}
                  text={text}
                  key={`card-${idx}`}
                  obj={obj}
                  saveButton={saveButton}
                  nonfix={nonfix}
                  BlackModalConfirm ={BlackModalConfirm}
                  isLoggined = {isLoggined}
                  defaultSpace = {defaultSpace}
                ></Card>
              </SwiperSlide>
            ))}
        </Swiper>
      </SliderSection>
    </>
  );
}

export default React.memo(ImageSlider);
