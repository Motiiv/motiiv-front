import styled, { css } from 'styled-components';
import React from 'react';

const Wrap = styled.div`
  margin-left: 5.5rem;
  display: flex;
  flex-direction: column;
  font-family: 'Campton' !important;
  font-weight: 700;
  letter-spacing: -0.8px;
  margin-bottom: ${props => (props.text ? '5.1rem' : '3rem')};
  padding-left: 1rem;
  @media ${props => props.theme.mobile} {
    margin-left: 2rem;
    margin-top: 1.5rem;
    margin-bottom: ${props => (props.text ? '2rem' : '1rem')};
    ${props =>
      !props.nonfix
        ? css`
            padding-top: 3.5rem;
          `
        : null}
  }
  @media ${props => props.theme.tablet} {
    margin-left: 4rem;
    margin-bottom: ${props => (props.text ? '3.1rem' : '3 .4rem')};
    padding-top: 0;
  }
  @media ${props => props.theme.desktop} {
    margin-left: 5.5rem;
    margin-bottom: ${props => (props.text ? '3.1rem' : '3rem')};
  }
`;
const Title = styled.div`
  & span {
    background: ${({ theme }) => theme.primary};
    background: var(--highlight);
  }
  font-size: 3rem;
  margin-bottom: 1rem;
  font-style: bold;
  color: var(--categorytext);

  ${props =>
    props.nonfix
      ? css`
          font-family: 'Spoqa-Han-Sans';
        `
      : null}
  @media ${props => props.theme.mobile} {
    font-size: 1.8rem;
    ${props =>
      props.nonfix
        ? css`
            font-size: 1.6rem;
          `
        : css`
            font-size: 1.8rem;
          `}
  }
  @media ${props => props.theme.tablet} {
    ${props =>
      props.nonfix
        ? css`
            font-size: 2rem;
          `
        : css`
            font-size: 2.5rem;
          `}
  }
  @media ${props => props.theme.desktop} {
    font-size: 3rem;
    ${props =>
      props.nonfix
        ? css`
            font-size: 2.5rem;
          `
        : css`
            font-size: 3rem;
          `}
  }
`;

const SubTitle = styled.div`
  font-size: 1.6rem;
  color: var(--categorytext);
  @media ${props => props.theme.mobile} {
    font-size: 1.2rem;
  }
  @media ${props => props.theme.tablet} {
    font-size: 1.4rem;
  }
  @media ${props => props.theme.desktop} {
    font-size: 1.6rem;
  }
`;
const TitleText = styled.div`
  margin-bottom: 1rem;
  font-size: 3rem;
  margin-top: 2rem;
  font-weight: bold; // 여기 props처리
  color: var(--keywordtag);
  & span {
    background: ${({ theme }) => theme.primary};
    background: var(--highlight);
  }
  @media ${props => props.theme.mobile} {
    font-size: 1.8rem;
  }
  @media ${props => props.theme.tablet} {
    font-size: 2.5rem;
  }
  @media ${props => props.theme.desktop} {
    font-size: 3rem;
  }
`;

const TitleContent = ({ nonfix, text, subText }) => {
  const highlightedText = text => {
    const re1 = /(?=(?:[^\|]*\|[^|]*\|)*[^\|]*$)\|/gm;
    const subst1 = '<span>';
    const re2 = /\|/gm;
    const subst2 = '</span>';
    const result = text.replace(re1, subst1).replace(re2, subst2);
    return result;
  };
  return (
    <Wrap text={text} nonfix={nonfix}>
      {text && subText && nonfix ? (
        <>
          <Title
            dangerouslySetInnerHTML={{ __html: `${highlightedText(text)}` }}
            nonfix={nonfix}
          ></Title>
          {/* <Title>{text}</Title> */}
          <SubTitle>{subText}</SubTitle>
        </>
      ) : (
        <>
          <TitleText
            nonfix={nonfix}
            dangerouslySetInnerHTML={{ __html: `${highlightedText(text)}` }}
          ></TitleText>
          <SubTitle>{subText}</SubTitle>
        </>
      )}
    </Wrap>
  );
};

export default React.memo(TitleContent);
