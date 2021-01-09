import React from 'react';
import styled, { css } from 'styled-components';

const TitleText = styled.div`
  font-size: 1.6rem;
  padding: 0.9rem 2.4rem;
  padding-right: 0;
  ${props =>
    props.choice === props.idx
      ? css`
          font-weight: 700;
        `
      : css`
          font-weight: 400;
        `};
`;
const MenuWrapper = styled.div`
  width: 100%;
  height: 3.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  padding-right: 1.1rem;

  &:hover {
    background-color: ${({ theme }) => theme.lightGray};
  }
`;
const TitleIconBox = styled.img`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  margin: 0.7rem 0;
  border-radius: 0.5rem;
`;
function Menu({ word, choice, idx, onHandleMenuChoice }) {
  const onClickHandle = evt => {
    onHandleMenuChoice(idx, evt.currentTarget.attributes.name.value);
    console.log(idx, evt.currentTarget.attributes.name.value);
  };
  return (
    <MenuWrapper name={word} onClick={onClickHandle}>
      <TitleText idx={idx} choice={choice}>
        {word}
      </TitleText>
      {/*       <TitleIconBox
        src={choice === idx ? MenuActive : MenuDefault}
      ></TitleIconBox> */}
    </MenuWrapper>
  );
}

export default Menu;
