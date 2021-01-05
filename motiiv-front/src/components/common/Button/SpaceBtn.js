import React from 'react';
import styled, { keyframes } from 'styled-components';

function SpaceBtn({ isActive, transPosition, space, delay }) {
  const goSpace = () => {
    window.open(space.url);
  };
  const popUp = keyframes`
  0% {
    transform: scale(0);
    transform: translate(0, 0);
    opacity:0;
  }

  100% {
    transform: scale(1);
    transform: translate(${transPosition.x}, ${transPosition.y});
    opacity:1;
  }
`;
  const SpaceBtn = styled.button`
    // 포지션 관련
    visibility: hidden;
    position: absolute;
    top: -0.7rem;
    left: -0.7rem;
    width: 5.4rem;
    height: 5.4rem;
    transform: translate(0, 0);
    // 형태 관련
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 2.5rem 2.5rem;
    background-color: white;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
    background-image: url(${space.iconSrc});
    &:hover {
      background-color: ${isActive ? '#efefef' : '#ffffff'};
    }
    &.active {
      transform: translate(${transPosition.x}, ${transPosition.y});
      z-index: 2;
      animation: ${popUp} 0.3s both ease-in;
      animation-delay: ${delay};
      visibility: visible;
      opacity: 1;
    }
  `;

  return (
    <SpaceBtn className={isActive ? 'active' : ''} onClick={goSpace}></SpaceBtn>
  );
}
export default SpaceBtn;
