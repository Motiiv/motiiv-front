import React from 'react';
import styled from 'styled-components';

const TagContainer = styled.div`
  border: solid ${props => (props.color ? 'none' : 'var(--keywordtag)')} 1.5px;
  background-color: ${props =>
    props.bgColor ? 'var(--settingbtnbg)' : 'transparent'};
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  cursor: pointer;
  @media ${props => props.theme.maxlaptop} {
    ${props =>
      props.text === 'logout'
        ? `
      width: 7.2rem;
      height: 2.8rem;
      margin-bottom: -1rem;
    `
        : ``};
  }
  @media ${props => props.theme.mobile} {
    ${props =>
      props.text === 'logout'
        ? `
        width: 4.6rem;
        height: 2rem;
      `
        : `
        padding: 0 0.6rem;
        height: 1.7rem;
        margin-left : 0.3rem;
        margin-right: 0.3rem;
      `};
  }
`;

const TagText = styled.div`
  font-size: ${props => (props.fontSize ? props.fontSize : '1.2rem')};
  color: ${props => (props.color ? 'white' : 'var(--keywordtag)')};
  text-align: center;
  font-family: ${props =>
    props.fontFamily ? props.fontFamily : 'Spoqa-Han-Sans'};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '700')};
  padding: ${props => props.padding};

  @media ${props => props.theme.maxlaptop} {
    ${props =>
      props.text === 'logout'
        ? `
      font-size:1.4rem;
    `
        : ``};
  }
  @media ${props => props.theme.mobile} {
    ${props =>
      props.text === 'logout'
        ? `
        font-size:1rem;
        margin-top:0.2rem;
      `
        : `
        padding: 0.2rem 0 0.3rem 0;
        font-size:0.9rem;
      `};
  }
`;

function Tag({
  color,
  text,
  fontSize,
  fontFamily,
  fontWeight,
  bgColor,
  padding,
  onHandleLogout,
}) {
  return (
    <TagContainer
      color={color}
      bgColor={bgColor}
      text={text}
      onClick={onHandleLogout}
    >
      <TagText
        fontSize={fontSize}
        color={color}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        padding={padding}
        text={text}
      >
        {text}
      </TagText>
    </TagContainer>
  );
}
export default React.memo(Tag);
