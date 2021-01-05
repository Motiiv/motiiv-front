import React,{useState} from 'react'
import styled from 'styled-components';
import MyModal from '../../pages/MyMotiiv/MyModal/MyModal';
import Section from '../../components/common/Section/Section';

const MotiivWrapper = styled.div`
    width: 100%;
    display : flex;
    justify-content : center;
    align-content : center;
    flex-direction: column;
    z-index : 0;
`; 


const SliderObject = [
  
    {
        idx: 0,
        TextInfo : {
            category: "Hot Motiiv",
            categoryTxt: "어제 하루 조회수가 가장 높았던 모티브",
            videoTxt : `"영화 "굿 윌 헌팅" 명장면"`,
            hashTag: [
                "movie",
                "pride"
            ]
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
            videoTxt : `"영화 "울프 오브 월스트리트" 명장면"`,
            hashTag: [
                "무무",
                "프라"
            ]
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
            videoTxt : "The Devil Wears Prada final scene",
            hashTag: [
                "movie",
                "pride"
            ]
        },
        VideoInfo : {
            src : "https://www.youtube.com/embed/8xCfGlYQiPI",
            runningTime: "22:01"
        }
    },
    {
        idx: 3,
        TextInfo : {
            category: "Most motivated motiiv",
            categoryTxt: "어제 워크스페이스로 가장 많이 이동한 모티브",
            videoTxt : "The Devil Wears Prada final scene",
            hashTag: [
                "movie",
                "pride"
            ]
        },
        VideoInfo : {
            src : "https://www.youtube.com/embed/8xCfGlYQiPI",
            runningTime: "22:01"
        }
    },
    {
        idx: 4,
        TextInfo : {
            category: "Most motivated motiiv",
            categoryTxt: "어제 워크스페이스로 가장 많이 이동한 모티브",
            videoTxt : "The Devil Wears Prada final scene",
            hashTag: [
                "movie",
                "pride"
            ]
        },
        VideoInfo : {
            src : "https://www.youtube.com/embed/8xCfGlYQiPI",
            runningTime: "22:01"
        }
    }
  ]
  
// const textArray = ["내가 자주본 모티브", "내가 저장한 모티브", "최근 재생한 모티브"];
function MyMotiiv() {

    const [loginState, setLoginState] = useState({
        isLogin: false,
    });
    return (loginState.isLogin ? 
        <> 
            <MotiivWrapper isLoggined = {loginState.isLogin}>
            <Section object = {SliderObject} text = "내가 자주 본 모티브"></Section>
            <Section object = {SliderObject} text = "내가 저장한 모티브"></Section>
            <Section object = {SliderObject} text = "최근 재생한 모티브"></Section>
            </MotiivWrapper>
        </> : <MyModal />
    )
}
export default MyMotiiv;
