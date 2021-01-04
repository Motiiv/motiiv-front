import React from 'react';
import styled from 'styled-components';

function SpaceBtn({ isActive, transPosition, space }) {
  const goSpace = () => {
    window.open(space.url);
  };
  const SpaceBtn = styled.button`
    // 포지션 관련
    display: ${isActive ? 'block' : 'none'};
    position: absolute;
    top: -0.7rem;
    left: -0.7rem;
    width: 5.4rem;
    height: 5.4rem;
    transform: translate(${transPosition.x}, ${transPosition.y});
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
      background-color: #efefef;
    }
  `;

  return <SpaceBtn onClick={goSpace}></SpaceBtn>;
}
export default SpaceBtn;
