import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import DownArrow from '../../../assets/global/downArrow.svg';
import UpperArrow from '../../../assets/global/upperArrow.svg';
import Menu from './Menu';
import MenuActive from '../../../assets/global/menu_active.svg';
import MenuDefault from '../../../assets/global/menu_default.svg';

const DropDownContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 2rem;
  }
  cursor: pointer;
`;
const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.4rem;
`;
const TitleText = styled.div`
  font-size: 1.6rem;
  padding: 0.9rem 1.4rem;
  padding-right: 0;
  font-weight: 700;
`;
const TitleIconBox = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  padding: 1.5rem 0.5rem;
`;
const TitleIconImg = styled.img`
  width: 1.5rem;
  height: 0.75rem;
`;
const DropDownBox = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
  overflow: hidden;
  ${props =>
    props.active
      ? css`
          visibility: visible;
          opacity: 1;
          height: 7rem;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          height: 0;
        `};
`;
const TitleIconBoxAll = styled.img`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  margin: 0.7rem 0;
  //border: solid ${({ theme }) => theme.gray} 1px;
  border-radius: 0.5rem;
`;
function DropDownMenu({ text, active, name, all, onChangeActiveStatus }) {
  const [choice, setChoice] = useState(null);

  const onHandleActive = evt => {
    //console.log(evt.currentTarget.attributes.name.value);
    onChangeActiveStatus(evt.currentTarget.attributes.name.value);
  };
  const onHandleMenuChoice = idx => {
    if (choice === idx) setChoice(null);
    else setChoice(idx);
  };
  return (
    <DropDownContainer>
      {!all ? (
        <>
          <TitleBox name={name} onClick={onHandleActive}>
            <TitleText>{text}</TitleText>
            <TitleIconBox>
              <TitleIconImg src={active ? UpperArrow : DownArrow} />
            </TitleIconBox>
          </TitleBox>
          <DropDownBox active={active}>
            {/* 이부분은 map 예정 */}
            <Menu
              word="word1"
              choice={choice}
              idx={0}
              onHandleMenuChoice={onHandleMenuChoice}
            />
            <Menu
              word="word2"
              choice={choice}
              idx={1}
              onHandleMenuChoice={onHandleMenuChoice}
            />
          </DropDownBox>
        </>
      ) : (
        <TitleBox name={name} onClick={onHandleActive}>
          <TitleText>{text}</TitleText>
          <TitleIconBoxAll
            active={active}
            src={active ? MenuActive : MenuDefault}
          ></TitleIconBoxAll>
        </TitleBox>
      )}
    </DropDownContainer>
  );
}

export default DropDownMenu;
