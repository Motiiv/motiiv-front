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

const SliderSection = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 1280px;
  padding: 0 5.5rem;
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
`;

function ImageSlider({ SliderObject, type, size }) {
  const swiperRef = useRef();
  const num = type === 'top' ? 3 : 4;
  const space = type === 'top' ? 20 : 25;
  return (
    <SliderSection size={size}>
      <Swiper
        spaceBetween={space}
        slidesPerView={num}
        loop={true}
        ref={swiperRef}
        navigation
        style={{ position: 'static', width: '100%' }}
      >
        {SliderObject.map((obj, idx) => (
          <SwiperSlide>
            <Card size={size} key={`card-${idx}`} obj={obj}></Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderSection>
  );
}

export default ImageSlider;
