import React, { useRef } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import theme from '../../../style/theme';
import { getCategoryTagVideos } from '../../../modules/video';
import { useDispatch, useSelector } from 'react-redux';

const HashTag = styled.div`
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  &:hover {
    color: ${({ theme }) => theme.primary};
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
  color: ${props => props.color};
  padding: 0.4rem 0.9rem;
  padding-top: 0.6rem;
  padding-left: 0.2rem;
  padding-bottom: 0.3rem;
  text-align: center;
  font-family: 'Spoqa-Han-Sans' !important;
  font-weight: 700 !important;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const TagContainer = styled.div`
  border: solid ${props => props.color} 1px;
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
    border: solid ${({ theme }) => theme.primary} 1px;
    ${HashTag} {
      color: ${({ theme }) => theme.primary};
    }
    ${TagText} {
      color: ${({ theme }) => theme.primary};
    }
  }
`;
function Tag({ hashTag, color, text, fontSize, history, id }) {
  const dispatch = useDispatch();
  const onClickTag = () => {
    dispatch(getCategoryTagVideos(id));
    history.push('/category/1');
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
export default withRouter(Tag);
