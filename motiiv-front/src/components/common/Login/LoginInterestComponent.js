import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpKeywords } from '../../../modules/user';

const InterestComponent = styled.button`
  border: none;
  outline: none;
  border-radius: 3rem;
  font-family: 'Spoqa-Han-Sans';

  @media ${props => props.theme.mobile} {
    width: 7.8rem;
    height: 3rem;
    font-size: 1.4rem;
  }

  ${props =>
    props.type === true
      ? `
          width: 8.4rem;
          height: 3.2rem;
          background-color : #2CFF2C;
          margin-right: 1rem;
          color: #4E4E4E;
          font-size: 1.6rem;
          font-weight: 700;
          cursor:pointer;
      `
      : `
          width: 8.4rem;
          height: 3.2rem;
          background-color : #F3F3F3;
          margin-right: 1rem;
          color: #A7A7A7;
          font-size: 1.6rem;
          font-weight: 100;
          cursor:pointer;
      `};
`;

function LoginInterestComponent({ type, text }) {
  const dispatch = useDispatch();

  const selectBtn = () => {
    dispatch(signUpKeywords(text));
  }

  return (
    <InterestComponent type={type} onClick={selectBtn}>
      {text}
    </InterestComponent>
  );
}
export default React.memo(LoginInterestComponent);
