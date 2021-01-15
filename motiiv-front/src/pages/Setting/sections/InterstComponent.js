import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Component = styled.button`
  border: none;
  outline: none;
  border-radius: 3rem;
  font-family: 'Spoqa-Han-Sans';

  @media ${props => props.theme.mobile} {
    width: 5.7rem;
    height: 2.2rem;
    font-size: 1.2rem;
  }

  ${props =>
    props.type2 === 'selected'
      ? `
          width: 8.4rem;
          height: 3.2rem;
          background-color : #2CFF2C;
          color: #4E4E4E;
          font-size: 1.6rem;
          font-weight: 700;
          cursor:pointer;
      `
      : props.type2 === 'unselected'
      ? `
          width: 8.4rem;
          height: 3.2rem;
          background-color : #6C6C6C;
          color: #F3F3F3;
          font-size: 1.6rem;
          font-weight: 100;
          cursor:pointer;
      `
      : props.type2 === 'cancel'
      ? `
          width: 6.2rem;
          height: 2.8rem;
          background-color : white;
          margin: 0 1rem;
          color: #4E4E4E;
          font-size: 1.2rem;
          font-weight: 400;
          cursor:pointer;
      `
      : props.type2 === 'ok'
      ? `
          width: 6.2rem;
          height: 2.8rem;
          background-color : white;
          margin: 0 1rem;
          color: #4E4E4E;
          font-size: 1.2rem;
          font-weight: 700;
          cursor:pointer;
      `
      : props.type2 === 'ok-disabled'
      ? `
          width: 6.2rem;
          height: 2.8rem;
          background-color : #A7A7A7;
          margin: 0 1rem;
          color: #4E4E4E;
          font-size: 1.2rem;
          font-weight: 700;
          cursor:pointer;
      `
      : `
          width: 8.4rem;
          height: 3.2rem;
          background-color : #2CFF2C;
          margin-right: 1rem;
          color: #4E4E4E;
          font-size: 1.6rem;
          font-weight: 700;
      `};
`;

function InterestComponent({
  type,
  text,
  onClickInterestBtn,
  idx,
  count,
  disabled,
  onClickInterstBtn,
}) {
  const [btnState, setBtnState] = useState(type);

  const selectBtn = () => {
    if (type === 'selected' || type === 'unselected') {
      onClickInterestBtn(idx);
      if (count >= 3) {
        if (btnState === 'selected') {
          setBtnState('unselected');
        }
      } else {
        if (btnState === 'selected') {
          setBtnState('unselected');
        } else if (btnState === 'unselected') {
          setBtnState('selected');
        }
      }
    } else if (type === 'ok' || type === 'ok-disabled') {
      onClickInterstBtn();
    }
  };
  return (
    <Component type="button" type2={btnState} onClick={selectBtn}>
      {text}
    </Component>
  );
}
export default React.memo(InterestComponent);
