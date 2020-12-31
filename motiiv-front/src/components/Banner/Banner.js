import React, {useState} from 'react'
import styled from 'styled-components';
import Content from './sections/Content';

const BannerSection = styled.div`
    width: 100%;
    height: 26rem;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SliderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ContentContainer = styled.div`
    width: 78rem;
    height: 100%;
    position :relative;
    display: flex;
`;
const LeftButton = styled.div`
    position: absolute;
    left:0;
    bottom: 50%;
    font-size: 2rem;
    color: white;
    cursor: pointer;
    z-index: 2;
`;
const RightButton = styled.div`
    font-size: 2rem;
    position: absolute;
    right:0;
    bottom: 50%;
    color: white;
    cursor: pointer;
    z-index: 2;
`;
const CoverSide = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SliderObject = [
    {
        idx: 0,
        TextInfo : {
            category: "Hot Motiiv 0",
            categoryTxt: "어제 하루 조회수가 가장 높았던 모티브",
            videoTxt : "브랜딩은 몰랐지만 브랜드가 되었습니다"
        },
        VideoInfo : {
            src : "https://www.youtube.com/embed/ZzTQFe5qX_0",
            runningTime: "22:01"
        }
    },
    {
        idx: 1,
        TextInfo : {
            category: "Hot Motiiv 1",
            categoryTxt: "어제 하루 조회수가 가장 높았던 모티브",
            videoTxt : "브랜딩은 몰랐지만 브랜드가 되었습니다"
        },
        VideoInfo : {
            src : "https://www.youtube.com/embed/ZzTQFe5qX_0",
            runningTime: "22:01"
        }
    },
    {
        idx: 2,
        TextInfo : {
            category: "Hot Motiiv 2",
            categoryTxt: "어제 하루 조회수가 가장 높았던 모티브",
            videoTxt : "브랜딩은 몰랐지만 브랜드가 되었습니다"
        },
        VideoInfo : {
            src : "https://www.youtube.com/embed/ZzTQFe5qX_0",
            runningTime: "22:01"
        }
    }
]
function Banner() {
    const [choice, setChoice] = useState(0);
    const LeftButtonHandler = () =>{
        if(choice !== 0){
            setChoice(choice-1);
        }
    }
    const RightButtonHandler = () =>{
        if(choice !== 2){
            setChoice(choice+1);
        }else{
            setChoice(0);
        }
    }
    return (
        <BannerSection>
            <SliderContainer>
                <CoverSide>
                    <ContentContainer>
                        {
                            SliderObject.map((obj, idx)=>(
                                <Content choice={choice} key={`content-${idx}`} obj={obj}></Content>
                            ))
                        }
                        <LeftButton onClick={LeftButtonHandler}>&#xE000;</LeftButton>
                        <RightButton onClick={RightButtonHandler}>&#xE001;</RightButton>
                    </ContentContainer>
                </CoverSide>
            </SliderContainer>
        </BannerSection>
    )
}

export default Banner
