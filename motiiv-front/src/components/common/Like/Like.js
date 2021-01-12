import React from 'react';
import styled, { css } from 'styled-components';
import LikeImage from '../../../assets/global/like_icon.svg';
import LikeClickImage from '../../../assets/global/likeclick_icon.svg';

const LikeBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  line-height: 0 !important;
  cursor: pointer;
`;
const LikeText = styled.div`
  font-size: 2rem;
  margin-right: 0.5rem;
  line-height: 0 !important;
  padding-top: 0.4rem;
  ${props =>
    props.like
      ? css`
          color: black;
        `
      : css`
          color: ${({ theme }) => theme.gray};
        `}
`;
const LikeImg = styled.img`
  width: 2rem;
  height: 2rem;
`;
function Like({ LikeToggle, like }) {
  return (
    <LikeBox onClick={LikeToggle}>
      <LikeText like={like}>좋아요</LikeText>
      <LikeImg src={like ? LikeClickImage : LikeImage} />
    </LikeBox>
  );
}

export default Like;
