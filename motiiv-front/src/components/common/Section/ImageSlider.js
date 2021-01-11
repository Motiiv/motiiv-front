import React, { useRef } from 'react';
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
    color: ${({ theme }) => theme.darkGray};
    cursor: pointer !important;
    z-index: 2 !important;
  }
  & .swiper-button-next::after {
    position: absolute !important;
    left: 2.5rem !important;
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
    color: ${({ theme }) => theme.darkGray};
    cursor: pointer !important;
    z-index: 2 !important;
  }
  & .swiper-slide {
    flex: 1 !important;
  }
  & .swiper-scrollbar {
    display: none !important;
  }
  @media ${props => props.theme.mobile} {
    padding: 0 2rem;
    & .swiper-button-prev::after {
      display: none !important;
    }
    & .swiper-button-next::after {
      display: none !important;
    }
  }

  @media ${props => props.theme.tablet} {
    padding: 0 4rem;
    & .swiper-button-prev::after {
      display: flex !important;
    }
    & .swiper-button-next::after {
      display: flex !important;
    }
  }

  @media ${props => props.theme.desktop} {
    ${props =>
      props.size === 'large'
        ? css`
            padding: 0 4.5rem;
            padding-left: 5.1rem;
          `
        : css`
            padding: 0 5.5rem;
          `}
  }
`;

function ImageSlider({ object, type, size, text, saveButton }) {
  const swiperRef = useRef();
  const num = type === 'top' ? 3 : 4;
  const space = type === 'top' ? 20 : 25;
  const largeHeight = size === 'large' ? '36rem' : 'auto';
  return (
    <>
      <SliderSection size={size}>
        <Swiper
          spaceBetween={space}
          slidesPerView={num}
          ref={swiperRef}
          navigation
          scrollbar
          breakpoints={{
            768: {
              spaceBetween: 23,
              slidesPerView: 3,
            },
            600: {
              spaceBetween: 18,
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
          {object.map((obj, idx) => (
            <SwiperSlide>
              <Card
                size={size}
                text={text}
                key={`card-${idx}`}
                obj={obj}
                saveButton={saveButton}
              ></Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderSection>
    </>
  );
}

export default ImageSlider;
