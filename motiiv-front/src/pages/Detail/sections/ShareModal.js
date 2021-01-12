import React from 'react';
import styled, { css } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const ModalWrapper = styled.div`
  width: 28rem;
  height: 9rem;
  border-radius: 0.8rem;
  ${props =>
    props.shareModal
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
  flex-direction: column;
  z-index: 2;
  position: absolute;
  background-color: white;
  top: 4rem;
  right: 0;
  justify-content: center;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.lightGray};
`;
const TitleText = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-left: 1.5rem;
`;
const InputBox = styled.div`
  width: 90%;
  height: 3.7rem;
  background-color: ${({ theme }) => theme.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  margin: 0 auto;
`;
const InputText = styled.div`
  font-size: 1.4rem;
  overflow: scroll;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
const CopyButton = styled.div`
  font-size: 1.5rem;
  height: 100%;
  padding-right: auto;
  color: white;
  cursor: pointer;
  //background-color: ${({ theme }) => theme.gray};
  margin-right: auto;
  color: black !important;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
`;
function ShareModal({ pageURL, shareModal }) {
  return (
    <ModalWrapper shareModal={shareModal}>
      <TitleText>공유하기</TitleText>
      <InputBox>
        <InputText>{pageURL}</InputText>
        <CopyToClipboard text={pageURL}>
          <CopyButton>복사하기</CopyButton>
        </CopyToClipboard>
      </InputBox>
    </ModalWrapper>
  );
}

export default ShareModal;
