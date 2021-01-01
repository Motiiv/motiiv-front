import React from 'react'
import styled,{ css } from 'styled-components';

const TextCard = styled.div`
    width: 32.5rem;
    display: flex;
    flex-direction: column;
    padding-right: 6.4rem;
`;
const VideoCard = styled.div`
    width: 32.5rem;
    height: 18.5rem;
    position: relative;
`;
const ContentWrapper = styled.div`
    //width:100%;
    width:62rem;
    display: flex;
    //overflow:hidden;
    //margin-right: 12.7rem;
    //justify-content: center;
    margin-top:3rem;
    ${props => 
            props.choice === props.idx?
            css`opacity: 1;`
            :css`opacity: 0.25;`
    }; 
    ${props => 
            props.choice === props.idx?
            css`width:100%;`
            :null
    }; 
    ${props => 
            props.choice === 0 && props.idx === 2?
            `${TextCard}{
                display:none;
            }`
                :props.choice-1 === props.idx?
                `${TextCard}{
                display:none;
            }`
                :null
    };
        ${props => 
            props.choice === 2 && props.idx === 0?
            `${VideoCard}{
                display:none;
            }`
                :props.choice+1 === props.idx?
                `${VideoCard}{
                display:none;
            }`
                :null
    };
/*     ${props => 
            props.choice === 0 && props.idx === 2?
            css`flex-direction: row-reverse`
                :props.choice-1 === props.idx?
                css`flex-direction: row-reverse;`
                :null
    };  */
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
