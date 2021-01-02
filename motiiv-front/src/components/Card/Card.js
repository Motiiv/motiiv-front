import React from 'react'
import styled, {css} from 'styled-components';
import Tag from '../Tag/Tag';

const CardWrap = styled.div`
    display : flex;
    flex-direction: column;
    width: 37.7rem;
    height: 33.6rem;    
    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.15);
    border-radius: 1rem;
`;

const VideoWrap = styled.div`
    width: 100%;
    background : #C4C4C4;
    height : 21.2rem;
    position : relative;
    `;
// const Video = styled.div`
//     position : absolute;
//     width: 100%;
// `;
const TimeContainer = styled.div`
    position : absolute;
    right : 2.1rem;
    bottom : 2rem;
    width: 3.3rem;
    height : 1.4rem;
    padding : 0.8rem;
    background: rgba(0, 0, 0, 0.6);
    border-radius : 1rem;
    margin-top: 2.8rem;
    display: flex;
    color : white;
    justify-content: center;
    align-items: center;
    font-family: 'Campton';
    & + &{
        margin-left:1.2rem;
    }
`;
const TextWrap = styled.div`
    height: 11.4rem;
    width: 100%;
    display : flex;
    flex-direction: column;
    background: ${props=>props.color ? "white" : "none"};
    `;

const Title = styled.div`
    margin-left : 2rem;
    margin-top : 1.5rem;
    color : black;
    font-size: 1.5rem;
    font-family: 'Spoqa-Han-Sans';
    overflow: hidden;
    line-height: 1.5rem;
    max-height: 3rem;
    text-overflow: ellipsis;
    word-break: keep-all;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    `;
const DescriptionContainer = styled.div`
    display: flex;
    margin-left : 2rem;
    margin-top : 1.4rem;
    `;

const Views = styled.div`
    font-size: 1.5rem;
    font-family: 'Spoqa-Han-Sans';
    color: ${({theme}) => theme.darkGray};
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const Channel = styled.div`
    font-size: 1.5rem;
    font-family: 'Spoqa-Han-Sans';
    border-left : 0.15rem solid;
    margin-left : 1rem;
    padding-left : 1rem;
    color: ${({theme}) => theme.darkGray};
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

`;
const TagContainer = styled.div`
    display : flex;
    width: 100%;
    margin-left : 2rem;
    `;
// Tag 컴포넌트 만들어서 불러오기
function Card({obj,color}) {
    return(
        <>
                <CardWrap>
                    <VideoWrap>
                <iframe width="100%" style={{height: "100%", width: "100%"}} src={obj.VideoInfo.src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <TimeContainer>
                {obj.VideoInfo.runningTime}
                    </TimeContainer></VideoWrap>
                <TextWrap color = {color}>
                    <Title>{obj.TextInfo.videoTxt}</Title>
                    <DescriptionContainer>
                        <Views>100만회</Views>
                        
                        <Channel>dk-master</Channel>
                    </DescriptionContainer>
                    <TagContainer>
                    {
                        obj.TextInfo.hashTag.map((tag, idx)=>(
                            <Tag hashTag={1} color="black" text={obj.TextInfo.hashTag[idx]} fontSize="1.2rem"></Tag>
                        ))
                    }
                    </TagContainer>
                </TextWrap>
    
            </CardWrap>
        </>
    
    )
}


export default Card;