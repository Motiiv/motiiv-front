import React, { useRef } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import theme from '../../../style/theme';
import { getCategoryTagVideos } from '../../../modules/video';
import { useDispatch, useSelector } from 'react-redux';

const HashTag = styled.div`
  font-size: ${props => props.fontSize};
  color: ${props =>
    props.color !== 'black' ? props.theme.primary : 'var(--tag)'} !important;
  &:hover {
    color: ${props =>
      props.color !== 'black'
        ? props.theme.primary
        : 'var(--taghover)'} !important;
  }
  padding: 0.4rem 0.9rem;
  padding-top: 0.3rem;
  padding-bottom: 0.5rem;
  padding-right: 0;
  font-family: 'Cantarell' !important;
  font-weight: 700 !important;
  text-align: center;
`;
const TagText = styled.div`
  font-size: ${props => props.fontSize};
  color: ${props =>
    props.color !== 'black' ? props.theme.primary : 'var(--tag)'} !important;
  padding: 0.4rem 0.9rem;
  padding-top: 0.6rem;
  padding-left: 0.2rem;
  padding-bottom: 0.3rem;
  text-align: center;
  font-family: 'Spoqa-Han-Sans' !important;
  font-weight: 700 !important;
  &:hover {
    color: ${props =>
      props.color !== 'black'
        ? props.theme.primary
        : 'var(--taghover)'} !important;
  }
`;
const TagContainer = styled.div`
  white-space: nowrap;
  border: ${props =>
    props.color !== 'black'
      ? `solid ${props.theme.primary} 1px`
      : 'solid var(--tag) 1px'} !important;
  border-radius: 3rem;
  margin-top: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  & + & {
    margin-left: 0.7rem;
  }
  cursor: pointer;
  &:hover {
    border: ${props =>
      props.color !== 'black'
        ? `solid ${props.theme.primary} 1px`
        : 'solid var(--taghover) 1px'} !important;
    ${HashTag} {
      color: ${props =>
        props.color !== 'black'
          ? props.theme.primary
          : 'var(--taghover)'} !important;
    }
    ${TagText} {
      color: ${props =>
        props.color !== 'black'
          ? props.theme.primary
          : 'var(--taghover)'} !important;
    }
  }
`;
function Tag({ hashTag, color, text, fontSize, history, id }) {
  const dispatch = useDispatch();
  const onClickTag = () => {
    dispatch(getCategoryTagVideos(id));
    history.push('/category/1');
    window.scrollTo(0, 0);
  };
  return (
    <TagContainer color={color} onClick={onClickTag}>
      {hashTag === 1 && (
        <HashTag fontSize={fontSize} color={color}>
          &#x00023;
        </HashTag>
      )}
      <TagText fontSize={fontSize} color={color}>
        {text}
      </TagText>
    </TagContainer>
  );
}
export default withRouter(React.memo(Tag));
