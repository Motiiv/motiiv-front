import React from 'react'
import styled from 'styled-components';

const TagContainer = styled.div `
    border: solid ${props => props.color} 1px;
    border-radius: 3rem;
    margin-top: 2.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    & + &{
        margin-left:1.2rem;
    }
`;
const HashTag = styled.div `
    font-size: ${props => props.fontSize};
    color: ${props=> props.color};
    padding: 0.6rem 0.8rem;
    padding-top: 0.8rem;
    padding-right: 0;
    font-family: 'Spoqa-Han-Sans';
    font-weight: 700;
    text-align: center;
`;
const TagText = styled.div `
    font-size: ${props => props.fontSize};
    color: ${props=> props.color};
    padding: 0.6rem 0.8rem;
    padding-top: 0.8rem;
    padding-left: 0.2rem;
    text-align: center;
    font-family: 'Campton';
    font-weight: 700;
`;

function Tag({
    hashTag,
    color,
    text,
    fontSize
}) {

    return ( <
        TagContainer color = {
            color
        } > {
            hashTag === 1 &&
            <
            HashTag fontSize = {
                fontSize
            }
            color = {
                color
            } > # < /HashTag>
        } <
        TagText fontSize = {
            fontSize
        }
        color = {
            color
        } > {
            text
        } < /TagText> <
        /TagContainer>
    );
}
export default Tag;