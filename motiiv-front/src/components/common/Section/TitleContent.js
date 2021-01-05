import styled from 'styled-components';

const Wrap = styled.div`
    margin-left: 5.5rem;
    display: flex;
    flex-direction: column;
    margin-bottom : ${props => props.text ? '5.1rem': '3.8rem'};
`;
const Title = styled.div`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom : 0.4rem;
    color: black;
`;

const SubTitle = styled.div`
  font-size: 1.6rem;
  color: black;
`;

const TitleText = styled.div`
    font-size: 3rem;
    font-weight: bold; // 여기 props처리
    color: black;
`



const TitleContent = ({object, text}) => {
    console.log(object)
    return(
            <Wrap>
                {object[0].TextInfo.category ? ( 
                <>
                <Title>{object[0].TextInfo.category}</Title>
                <SubTitle>{object[0].TextInfo.categoryTxt}</SubTitle>
                </>) :
                <TitleText>{text}</TitleText>}
            </Wrap>
        
    );
}

export default TitleContent;
