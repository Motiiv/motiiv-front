import React from 'react';
import styled from 'styled-components';

const TagContainer = styled.div`
  border: solid ${props => (props.color != null ? props.color: 'black')} 1.5px;
  background-color : ${props => (props.bgColor != null ? props.bgColor: 'none')};
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left : 0.4rem;
  margin-right: 0.4rem;
  @media ${props => props.theme.maxlaptop}{
    ${props => props.text == 'logout' ?
    `
      width: 7.2rem;
      height: 2.8rem;
    `
    :``};
  }
  @media ${props => props.theme.mobile} {
      ${props => props.text == 'logout' ?
      `
        width: 4.6rem;
        height: 2rem;
      `
      :
      `
      width: 4.5rem;
      height: 1.7rem;
      margin-left : 0.3rem;
      margin-right: 0.3rem;
      `};
  }
`;

const TagText = styled.div`
  font-size: ${props => (props.fontSize != null ? props.fontSize: '1.2rem')};
  color: ${props => (props.color != null ? props.color: 'black')};
  text-align: center;
  font-family: ${props => (props.fontFamily != null ? props.fontFamily: 'Spoqa-Han-Sans')};
  font-weight: ${props => (props.fontWeight != null ? props.fontWeight: '700')};
  padding: ${props => props.padding};
  @media ${props => props.theme.maxlaptop}{
    ${props => props.text == 'logout' ?
    `
      font-size:1.4rem;
    `
    :``};
  }
  @media ${props => props.theme.mobile} {
    ${props => props.text == 'logout' ?
    `
      font-size:1rem;
      margin-top:0.2rem;
    `
    :
    `
      padding: 0.2rem 0 0.3rem 0;
      font-size:0.9rem;
    `};
  }
`;

function Tag({ color, text, fontSize, fontFamily, fontWeight, bgColor, padding}) {
  return (
    <TagContainer color={color} bgColor = {bgColor} text={text}>
      <TagText fontSize={fontSize} color={color} fontFamily={fontFamily} fontWeight={fontWeight} padding={padding} text={text}> {text} </TagText>
    </TagContainer>
  );
}
export default Tag;
