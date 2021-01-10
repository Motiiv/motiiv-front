import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import starIcon from '../../../assets/global/star.png';
import SpaceBtn from './SpaceBtn';
const popUp = keyframes`
  0% {
    transform: scale(0);
    transform: translate(-50%, 4rem);
    opacity:0;
  }

  100% {
    transform: scale(1);
    transform:translate(-50%, 0);
    opacity:1;
  }
`;

const FloatBtnWrapper = styled.div`
  position: fixed;
  bottom: 3.5rem;
  left: 50%;
  width: ${props => (props.isActive || props.isHover ? '4rem' : '14.5rem')};
  height: 4rem;
  transform: translateX(-50%);
  transform-origin: center center;
  z-index: 2147483647;
  @media ${props => props.theme.tablet768} {
    display: none;
  }
  animation: ${popUp} 0.2s both ease-in;
`;
const FloatButton = styled.button`
  width: ${props => (props.isActive || props.isHover ? '4rem' : '14.5rem')};
  height: 4rem;
  border-radius: ${props => (props.isActive || props.isHover ? '50%' : '3rem')};
  border: none;
  outline: none;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 2rem 2rem;
  background-color: black;
  background-image: ${props =>
    props.isActive || props.isHover ? `url(${starIcon})` : `none`};
  position: absolute;
  transform-origin: center center;
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
  font-family: 'Campton';
  font-size: 1.6rem;
`;

function FloatBtn({ isShow }) {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const onTransfrom = () => {
    setIsActive(!isActive);
  };
  const spaceNum = 6;
  const positionTable = [
    [{ x: '0rem', y: '-7.7rem' }],
    [
      { x: '-3.7rem', y: '-7.7rem' },
      { x: '3.7rem', y: '-7.7rem' },
    ],
    [
      { x: '-6.6rem', y: '-4.6rem' },
      { x: '0rem', y: '-7.7rem' },
      { x: '6.6rem', y: '-4.6rem' },
    ],
    [
      { x: '-9.7rem', y: '-3.9rem' },
      { x: '-3.6rem', y: '-7.7rem' },
      { x: '3.6rem', y: '-7.7rem' },
      { x: '9.7rem', y: '-3.9rem' },
    ],
    [
      { x: '-11.9rem', y: '-0.7rem' },
      { x: '-7rem', y: '-6rem' },
      { x: '0rem', y: '-7.7rem' },
      { x: '7rem', y: '-6rem' },
      { x: '11.9rem', y: '-0.7rem' },
    ],
    [
      { x: '-12.4rem', y: '-0.7rem' },
      { x: '-8.3rem', y: '-4.9rem' },
      { x: '-3rem', y: '-7.5rem' },
      { x: '3rem', y: '-7.5rem' },
      { x: '8.3rem', y: '-4.9rem' },
      { x: '12.4rem', y: '-0.7rem' },
    ],
  ];
  const mySpaces = [
    {
      iconSrc: 'https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg',
      text: '웹파트 노션웹파트 노션',
      url: 'https://www.notion.so/WEB-7ea63413a235451198c3e770cceb8044',
    },

    {
      iconSrc: 'https://image.flaticon.com/icons/png/512/2111/2111615.png',
      text: '슬랙슬랙슬랙슬랙슬랙슬랙',
      url: 'https://www.notion.so/WEB-7ea63413a235451198c3e770cceb8044',
    },
    {
      iconSrc: 'https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg',
      text: '웹파트 노션웹파트 노션',
      url: 'https://www.notion.so/WEB-7ea63413a235451198c3e770cceb8044',
    },

    {
      iconSrc: 'https://image.flaticon.com/icons/png/512/2111/2111615.png',
      text: '슬랙슬랙슬랙슬랙슬랙슬랙',
      url: 'https://www.notion.so/WEB-7ea63413a235451198c3e770cceb8044',
    },
    {
      iconSrc: 'https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg',
      text: '웹파트 노션웹파트 노션',
      url: 'https://www.notion.so/WEB-7ea63413a235451198c3e770cceb8044',
    },

    {
      iconSrc: 'https://image.flaticon.com/icons/png/512/2111/2111615.png',
      text: '슬랙슬랙슬랙슬랙슬랙슬랙',
      url: 'https://www.notion.so/WEB-7ea63413a235451198c3e770cceb8044',
    },
  ];

  const onHandleMouseOver = () => {
    !isActive && setIsHover(true);
  };

  const onHandleMouseLeave = () => {
    !isActive && setIsHover(false);
  };

  return (
    isShow && (
      <FloatBtnWrapper isActive={isActive} isHover={isHover}>
        {positionTable[spaceNum - 1].map((pos, idx) => (
          <SpaceBtn
            isActive={isActive}
            key={'content-' + idx}
            delay={`${idx / 10}s`}
            transPosition={pos}
            space={mySpaces[idx]}
          />
        ))}
        <FloatButton
          isActive={isActive}
          isHover={isHover}
          onClick={onTransfrom}
          onMouseOver={onHandleMouseOver}
          onMouseLeave={onHandleMouseLeave}
        >
          {isActive || isHover ? '' : 'my workspace'}
        </FloatButton>
      </FloatBtnWrapper>
    )
  );
}
export default FloatBtn;
