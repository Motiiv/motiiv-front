import React, { useState } from 'react';
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
  position: absolute;
  top: 1.4rem;
  right: -0.2rem;
  z-index: 2;
`;
const SaveImg = styled.img`
  @media ${props => props.theme.mobile} {
    width: 3rem;
    height: 3rem;
  }
  @media ${props => props.theme.tablet} {
    width: 2.2rem;
    height: 2.2rem;
  }
  @media ${props => props.theme.laptop} {
    ${props =>
      props.size === 'large'
        ? css`
            width: 3.5rem;
            height: 3.5rem;
          `
        : css`
            width: 3rem;
            height: 3rem;
          `}
  }
`;
function CardSave({ isSave, id, BlackModalConfirm, size }) {
  const [save, setSave] = useState(isSave ? true : false);
  const dispatch = useDispatch();
  const SaveToggle = () => {
    //BlackModalConfirm();
    dispatch(changeSaveStatus(id));
    setSave(!save);
  };
  return (
    <SaveBox onClick={SaveToggle}>
      <SaveImg size={size} src={save ? SaveClickImage : SaveImage} />
    </SaveBox>
  );
}

export default CardSave;
