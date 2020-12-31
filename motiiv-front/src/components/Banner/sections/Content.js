import React from 'react'
import styled,{ css } from 'styled-components';

const ContentWrapper = styled.div`
    width: 71.4rem;
    height: 100%;
    display: flex;
    justify-content: center;
    ${props =>
        css`
            transform: translate(-${(props.choice)*100}%,0px);
            transition: 0.5s;
        `
    };
    ${props => 
            props.choice === props.idx?
            css`background-color: black;`
            :null
    };
    ${props => 
            props.idx === 0?
            css`padding: 0 3.2rem;`
            :
            props.idx === 1?
            css`padding-right: 3.2rem;`
            : css`padding-right: 3.2rem`
    };
`;
const TextCard = styled.div`
    width: 32.5rem;
    display: flex;
    flex-direction: column;
    margin-left: 3.2rem;
`;
const VideoCard = styled.div`
    width: 32.5rem;
    position: relative;
    margin-right: 3.2rem;
    ${props => 
            props.choice === props.idx?
            css`color: rgba(0,0,0,0.8);`
            :null
    };
`;
const VideoRunningTime = styled.div`
    color: white;
    background-color: black;
    padding: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
`;
const HeaderInfo = styled.div`
    font-size: 2rem;
    color: #2CFF2C;
    display: flex;
    flex-direction: column;
`;
const HeaderTitleText = styled.div`
    font-size: 2rem;
    color: #2CFF2C;
    font-weight: bold;
`;
const HeaderSubText = styled.div`
    font-size: 1.3rem;
    margin-top: 0.5rem;
    color: white;
`;
const VideoText = styled.div`
    font-size:2.8rem;
    color: white;
    margin-top:2.4rem;
`;
function Content({obj, choice}) {
    return (
        <ContentWrapper choice={choice} idx={obj.idx}>
            <TextCard>
                <HeaderInfo>
                    <HeaderTitleText>{obj.TextInfo.category}</HeaderTitleText>
                    <HeaderSubText>{obj.TextInfo.categoryTxt}</HeaderSubText>
                </HeaderInfo>
                <VideoText>{`${obj.TextInfo.videoTxt}`}</VideoText>
            </TextCard>
            <VideoCard choice={choice} idx={obj.idx}>
                <iframe width="100%" style={{height: "100%", width: "100%"}} src={obj.VideoInfo.src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <VideoRunningTime>{obj.VideoInfo.runningTime}</VideoRunningTime>
            </VideoCard>
        </ContentWrapper>
    )    
}

export default Content
