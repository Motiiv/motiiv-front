import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const InterstComponent = styled.button`
    border: none;
    outline: none;
    border-radius: 3rem;
    font-family:'Spoqa-Han-Sans';

    @media ${props => props.theme.mobile} {
            width: 5.3rem;
            height: 2rem;
            font-size: 1.1rem;
    }

${props =>
    props.type === "selected" ?
      `
          width: 8.4rem;
          height: 3.2rem;
          background-color : #2CFF2C;
          margin-right: 1rem;
          color: #4E4E4E;
          font-size: 1.6rem;
          font-weight: 700;
          cursor:pointer;
      `
    :  props.type === "selected-login" ?
      `
          width: 8.4rem;
          height: 3.2rem;
          background-color : #2CFF2C;
          margin-right: 1rem;
          color: #4E4E4E;
          font-size: 1.6rem;
          font-weight: 700;
          cursor:pointer;
      `
    : props.type === "unselected" ?
      `
          width: 8.4rem;
          height: 3.2rem;
          background-color : #6C6C6C;
          margin-right: 1rem;
          color: #F3F3F3;
          font-size: 1.6rem;
          font-weight: 100;
          cursor:pointer;
      `
      : props.type === "unselected-login" ?
      `
          width: 8.4rem;
          height: 3.2rem;
          background-color : #F3F3F3;
          margin-right: 1rem;
          color: #A7A7A7;
          font-size: 1.6rem;
          font-weight: 100;
          cursor:pointer;
      `
    : props.type === "cancel" ?
      `
          width: 6.2rem;
          height: 2.8rem;
          background-color : white;
          margin: 0 1rem;
          color: #4E4E4E;
          font-size: 1.2rem;
          font-weight: 400;
          cursor:pointer;
      `
    : props.type === "ok" ?
      `
          width: 6.2rem;
          height: 2.8rem;
          background-color : white;
          margin: 0 1rem;
          color: #4E4E4E;
          font-size: 1.2rem;
          font-weight: 700;
          cursor:pointer;
      `
    : props.type === "ok-disabled" ?
      `
          width: 6.2rem;
          height: 2.8rem;
          background-color : #A7A7A7;
          margin: 0 1rem;
          color: #4E4E4E;
          font-size: 1.2rem;
          font-weight: 700;
          cursor:pointer;
      `
    :
      `
          width: 8.4rem;
          height: 3.2rem;
          background-color : #2CFF2C;
          margin-right: 1rem;
          color: #4E4E4E;
          font-size: 1.6rem;
          font-weight: 700;
      `
  };
`

function InterestComponent({ type, text }) {

  const [btnState, setBtnState] = useState(type);

  const selectBtn = () => {
    (async () => {
      try {
        if(btnState === "selected"){
          setBtnState("unselected");
        }else if(btnState === "unselected"){
          setBtnState("selected");
        }else if(btnState === "selected-login"){
          setBtnState("unselected-login");
        }else if(btnState === "unselected-login"){
          setBtnState("selected-login");
        }
      } catch (e) {
        
      }
    })();
  }

    return (
      <InterstComponent type = {btnState} onClick={selectBtn}>{text}</InterstComponent>
    );
  }
  export default InterestComponent;