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
  @media ${props => props.theme.laptop} {
  }
  @media ${props => props.theme.mobile} {
        width: 4.5rem;
        height: 1.7rem;
        margin-left : 0.3rem;
        margin-right: 0.3rem;
  }
`;

const TagText = styled.div`
  font-size: ${props => (props.fontSize != null ? props.fontSize: '1.2rem')};
  color: ${props => (props.color != null ? props.color: 'black')};
  text-align: center;
  font-family: ${props => (props.fontFamily != null ? props.fontFamily: 'Spoqa-Han-Sans')};
  font-weight: ${props => (props.fontWeight != null ? props.fontWeight: '700')};
  padding: ${props => props.padding};
  @media ${props => props.theme.laptop} {
  }
  @media ${props => props.theme.mobile} {
    padding: 0.4rem 0rem;
    font-size:0.9rem;
  }
`;

function Tag({ color, text, fontSize, fontFamily, fontWeight, bgColor, padding}) {
  return (
    <TagContainer color={color} bgColor = {bgColor}>
      <TagText fontSize={fontSize} color={color} fontFamily={fontFamily} fontWeight={fontWeight} padding={padding}> {text} </TagText>
    </TagContainer>
  );
}
export default Tag;
