import React from 'react'
import styled, {css, ThemeConsumer, ThemeProvider} from 'styled-components';
import Tag from '../../Tag/Tag';

const TextCard = styled.div`
    width: 32.5rem;
    display: flex;
    flex-direction: column;
    padding-right: 6.4rem;
    font-family: 'Spoqa-Han-Sans';
    font-weight: 700;
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
    }
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
    color: ${({theme}) => theme.primary};
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

    overflow: hidden; 
    text-overflow: ellipsis;
    word-wrap: break-word;
    word-break: keep-all;
    line-height: 2.8rem;
    max-height: 5.4rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding-top:0.2rem;
`;
const TagBox = styled.div`
    display: flex;
    width: 100%;
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
                <TagBox>
                    {
                        obj.TextInfo.hashTag.map((tag, idx)=>(
                            <Tag hashTag={1} color={({theme})=> theme.primary} text={obj.TextInfo.hashTag[idx]} fontSize="1.2rem"></Tag>
                        ))
                    }
                </TagBox>
            </TextCard>
            <VideoCard choice={choice} idx={obj.idx}>
                <iframe width="100%" style={{height: "100%", width: "100%"}} src={obj.VideoInfo.src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <VideoRunningTime>{obj.VideoInfo.runningTime}</VideoRunningTime>
            </VideoCard>
        </ContentWrapper>
    )    
}
export default Content
