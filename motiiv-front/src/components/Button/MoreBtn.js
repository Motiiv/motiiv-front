import React from 'react';
import { Router } from 'react-router-dom';
import styled from 'styled-components';

function MoreBtn({ color, linkUrl, type }) {
  const goPage = () => {
    type === 'blank' ? window.open(linkUrl) : Router.push(linkUrl);
  };
  const RoundBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    color: ${props => (color ? color : props.theme.primary)};
    border: 1px solid ${props => (color ? color : props.theme.primary)};
    font-family: 'Spoqa-Han-Sans';
    font-size: 1.3rem;
    padding: 0.8rem 2rem;
    border-radius: 3rem;
    outline: none;
    white-space: nowrap;
    cursor: pointer;
  `;

  return <RoundBtn onClick={goPage}>더 알아보기 &nbsp; &#xE001;</RoundBtn>;
}
export default MoreBtn;
