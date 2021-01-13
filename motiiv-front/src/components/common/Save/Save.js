import React from 'react';
import styled, { css } from 'styled-components';
import SaveImage from '../../../assets/global/save_icon.svg';
import SaveClickImage from '../../../assets/global/saveclick_icon.svg';
import { changeSaveStatus, changeSave } from '../../../modules/video';
import { useDispatch, useSelector } from 'react-redux';

const SaveBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  line-height: 0 !important;
  cursor: pointer;
`;
const SaveText = styled.div`
  ${props =>
    props.save
      ? css`
          color: black;
        `
      : css`
          color: ${({ theme }) => theme.gray};
        `}
  font-size: 2rem;
  margin-right: 0.5rem;
  line-height: 0 !important;
  padding-top: 0.4rem;
`;
const SaveImg = styled.img`
  width: 2rem;
  height: 2rem;
`;
function Save({ id, BlackModalConfirm, isLoggined }) {
  const dispatch = useDispatch();
  const { loading_save, save } = useSelector(({ video, loading }) => ({
    save: video.save,
    loading_save: loading['video/CHANGE_SAVE_STATUS'],
  }));
  // [ Black Modal] 사용하고자 하는 버튼에 blackmodalconfirm 함수 넣어주면 됨
  const SaveToggle = () => {
    if (isLoggined) {
      dispatch(changeSaveStatus(id));
    } else BlackModalConfirm(); // 블랙모달에 상태를 active로 바꿔서 가져오는 함수
  };

  return (
    <SaveBox onClick={SaveToggle}>
      <SaveText save={save}>저장</SaveText>
      <SaveImg src={save ? SaveClickImage : SaveImage} />
    </SaveBox>
  );
}

export default React.memo(Save);
