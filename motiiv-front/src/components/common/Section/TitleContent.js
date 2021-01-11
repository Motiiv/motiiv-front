import styled, { css } from 'styled-components';

const Wrap = styled.div`
  margin-left: 5.5rem;
  display: flex;
  flex-direction: column;
  font-family: 'Campton' !important;
  font-weight: 700;
  letter-spacing: -0.8px;
  margin-bottom: ${props => (props.text ? '5.1rem' : '3rem')};
  @media ${props => props.theme.mobile} {
    margin-left: 2rem;
    margin-top: 1.5rem;
    margin-bottom: ${props => (props.text ? '2rem' : '1rem')};
  }
  @media ${props => props.theme.tablet} {
    margin-left: 4rem;
    margin-bottom: ${props => (props.text ? '5.1rem' : '3 .4rem')};
  }
  @media ${props => props.theme.desktop} {
    margin-left: 5.5rem;
    margin-bottom: ${props => (props.text ? '5.1rem' : '3rem')};
  }
`;
const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: black;
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
  color: black;
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
  font-size: 3rem;
  font-weight: bold; // 여기 props처리
  color: black;
  @media ${props => props.theme.mobile} {
    font-size: 1.8rem;
  }
  @media ${props => props.theme.tablet} {
    font-size: 2rem;
  }
  @media ${props => props.theme.desktop} {
    font-size: 3rem;
  }
`;

const TitleContent = ({ object, text, nonfix }) => {
  return (
    <Wrap text={text}>
      {!text ? (
        <>
          <Title nonfix={nonfix}>{object[0].TextInfo.category}</Title>
          <SubTitle>{object[0].TextInfo.categoryTxt}</SubTitle>
        </>
      ) : (
        <TitleText>{text}</TitleText>
      )}
    </Wrap>
  );
};

export default TitleContent;
