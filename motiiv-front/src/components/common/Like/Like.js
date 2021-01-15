import React from 'react';
import styled, { css } from 'styled-components';
import LikeImage from '../../../assets/global/like_icon.svg';
import LikeClickImage from '../../../assets/global/likeclick_icon.svg';
import { changeLikeStatus, changeLike } from '../../../modules/video';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading/Loading';

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
          color: var(--tag);
        `
      : css`
          color: ${({ theme }) => theme.gray};
        `}
`;
const LikeImg = styled.img`
  width: 2rem;
  height: 2rem;
`;
function Like({ BlackModalConfirm, id, blackModal, isLoggined }) {
  const dispatch = useDispatch();
  const { loading_like, like } = useSelector(({ video, loading }) => ({
    like: video.like,
    loading_like: loading['video/CHANGE_LIKE_STATUS'],
  }));
  const LikeToggle = () => {
    if (isLoggined === true) {
      dispatch(changeLikeStatus(id));
    } else BlackModalConfirm();
  };
  return (
    <LikeBox onClick={LikeToggle}>
      <LikeText like={like}>좋아요</LikeText>
      <LikeImg src={like ? LikeClickImage : LikeImage} />
    </LikeBox>
  );
}

export default React.memo(Like);
