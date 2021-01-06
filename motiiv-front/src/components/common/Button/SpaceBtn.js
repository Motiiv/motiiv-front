import React from 'react';
import styled, { keyframes } from 'styled-components';
const popUp = transPosition => keyframes`
  0% {
    transform: scale(0);
    transform: translate(0, 0);
    opacity:0;
  }

  100% {
    transform: scale(1);
    opacity:1;
    transform:translate(${transPosition.x},${transPosition.y})

  }
`;
const SpaceTitle = styled.p`
  display: none;
  font-size: 1.2rem;
  width: 7.6rem;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  top: -2rem;
  left: -1.1rem;
  transform: ${props => `translateX(calc(${props.transX} / 4))`};
`;
const SpaceButton = styled.button`
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
  background-image: url(${props => props.space.iconSrc});
  &:hover {
    background-color: #efefef;
    & .title {
      display: block;
    }
  }
  &.active {
    z-index: 2;
    animation: ${props => popUp(props.transPosition)} 0.3s both ease-in;
    animation-delay: ${props => props.delay};
    visibility: visible;
    opacity: 1;
  }
`;
function SpaceBtn({ isActive, transPosition, space, delay }) {
  const goSpace = () => {
    window.open(space.url);
  };
  return (
    <SpaceButton
      className={isActive ? 'active' : ''}
      onClick={goSpace}
      space={space}
      transPosition={transPosition}
      delay={delay}
    >
      <SpaceTitle className="title" transX={transPosition.x}>
        {space.text}
      </SpaceTitle>
    </SpaceButton>
  );
}
export default SpaceBtn;
