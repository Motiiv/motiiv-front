import styled from 'styled-components';


const Wrap = styled.div`
    margin-left: 5.5rem;
    display: flex;
    flex-direction: column;
    margin-bottom : 3.8rem;
`;
const Title = styled.div`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom : 0.5rem;
    color: black;
`;

const SubTitle = styled.div`
    font-size: 1.6rem;
    color: black;
`;



const TitleContent = () => {
    return(
        <>  
            <Wrap>
                <Title>motiiv top 10</Title>
                <SubTitle>이 영상을 본 80%가 바로 일을 시작했어요!</SubTitle>  
            </Wrap>
        </>
    );
}

export default TitleContent;