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
    //overflow: hidden;
`;
const LeftButton = styled.div`
    position: absolute;
    left:0;
    bottom: 50%;
    width: 3.3rem;
    height: 3.3rem;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    z-index: 2;
    border: solid ${({theme}) => theme.primary};;
    border-radius: 50%;
    color: ${({theme}) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
`;
const RightButton = styled.div`
    width: 3.3rem;
    height: 3.3rem;
    font-size: 1.5rem;
    position: absolute;
    right:0;
    bottom: 50%;
    color: white;
    cursor: pointer;
    z-index: 2;
    border: solid ${({theme}) => theme.primary};;
    border-radius: 50%;
    color: ${({theme}) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
`;
const IndicatorBox = styled.div`
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
            videoTxt : `"영화 "굿 윌 헌팅" 명장면"`
        },
        VideoInfo : {
            src : "https://www.youtube.com/embed/ZzTQFe5qX_0",
            runningTime: "02:09"
        }
    },
    {
        idx: 1,
        TextInfo : {
            category: "Best Motiiv",
            categoryTxt: "어제 하루 좋아요가 가장 많았던 모티브",
            videoTxt : `"영화 "울프 오브 월스트리트" 명장면"`
        },
        VideoInfo : {
            src : "https://www.youtube.com/embed/GIoofmjN-8U",
            runningTime: "03:32"
        }
    },
    {
        idx: 2,
        TextInfo : {
            category: "Most motivated motiiv",
            categoryTxt: "어제 워크스페이스로 가장 많이 이동한 모티브",
            videoTxt : "The Devil Wears Prada final scene"
        },
        VideoInfo : {
            src : "https://www.youtube.com/embed/8xCfGlYQiPI",
            runningTime: "22:01"
        }
    }
]
function Banner({theme}) {
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
                    <ContentContainer>
                        {
                            SliderObject.map((obj, idx)=>(
                                <Content choice={choice} key={`content-${idx}`} obj={obj}></Content>
                            ))
                        }
                        <LeftButton theme={theme} onClick={LeftButtonHandler}>&#xE000;</LeftButton>
                        <RightButton onClick={RightButtonHandler}>&#xE001;</RightButton>
                    </ContentContainer>

            </SliderContainer>
            <IndicatorBox>
                
            </IndicatorBox>
        </BannerSection>
    )
}

export default Banner
