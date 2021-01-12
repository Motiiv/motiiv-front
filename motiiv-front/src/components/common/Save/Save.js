import React from 'react';
import styled, { css } from 'styled-components';
import SaveImage from '../../../assets/global/save_icon.svg';
import SaveClickImage from '../../../assets/global/saveclick_icon.svg';

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
function Save({ SaveToggle, save }) {
  return (
    <SaveBox onClick={SaveToggle}>
      <SaveText save={save}>저장</SaveText>{' '}
      <SaveImg src={save ? SaveClickImage : SaveImage} />
    </SaveBox>
  );
}

export default Save;