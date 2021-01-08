import styled from 'styled-components';

const Wrap = styled.div`
    margin-left: 5.5rem;
    display: flex;
    flex-direction: column;
    margin-bottom : ${props => props.text ? '5.1rem': '3.8rem'};
    /* @media ${props => props.theme.tablet}{
    margin-left : 4rem;
    margin-bottom : ${props => props.text ? '4rem': '3.4rem'};
  }
    @media ${props => props.theme.mobile}{
    margin-left: 2rem;
    margin-bottom : ${props => props.text ? '2rem': '1rem'};
    } */
`;
const Title = styled.div`
    font-size: 3rem; 
    font-weight: bold;
    margin-bottom : 0.4rem; 
    color: black;
    /* @media ${props => props.theme.tablet}{
    font-size : 2rem;
  } 
    @media ${props => props.theme.mobile}{
    font-size : 1.8rem;
    } */
`;

const SubTitle = styled.div`
  font-size: 1.6rem;
  color: black;
  /* @media ${props => props.theme.tablet}{
  font-size : 1.4rem;
  }
  @media ${props => props.theme.mobile}{
    font-size : 1.2rem;
  } */
`;

const TitleText = styled.div`
    font-size: 3rem;
    font-weight: bold; // 여기 props처리
    color: black;
    /* @media ${props => props.theme.tablet}{
    font-size : 2rem; 
  } 
    @media ${props => props.theme.mobile}{
    font-size : 1.8rem;
    } */
`;



const TitleContent = ({object, text}) => {
    console.log(object)
    return(
            <Wrap text={text}>
                { !text ? ( 
                <>
                <Title>{object[0].TextInfo.category}</Title>
                <SubTitle>{object[0].TextInfo.categoryTxt}</SubTitle>
                </>) :
                <TitleText>{text}</TitleText>}
            </Wrap>
        
    );
}

export default TitleContent;