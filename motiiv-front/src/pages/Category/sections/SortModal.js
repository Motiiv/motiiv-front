import React from 'react';
import styled, { css } from 'styled-components';
const ModalWrapper = styled.div`
  width: 10rem;
  border-radius: 1rem;
  display: flex;
  transition: 0.5s;
  overflow: hidden;
  ${props =>
    props.sortModal
      ? css`
          height: 13.2rem;
          visibility: visible;
          opacity: 1;
        `
      : css`
          height: 0;
          visibility: hidden;
          opacity: 0;
        `}
  flex-direction: column;
  z-index: 3;
  position: absolute;
  background-color: white;
  top: 2.5rem;
  right: 0;
  justify-content: center;
  box-shadow: 2px 2px 2px 2px gray;
  padding: 1.4rem;
`;
const SortText = styled.div`
  font-size: 1.4rem;
  width: 100%;
  padding: 0.4rem 0.6rem;
  border-radius: 0.5rem;
  cursor: pointer;
  & + & {
    margin-top: 0.5rem;
  }
  &:hover {
    font-weight: 700;
    background-color: ${({ theme }) => theme.lightGray};
  }
  ${props =>
    props.sortModal
      ? css`
          //height: fit-content;
        `
      : css`
          //height: 0;
        `}
`;
function SortModal({ sortModal, onHandleSortText }) {
  const onHandleSortButton = evt => {
    onHandleSortText(evt.target.attributes.name.value);
  };
  return (
    <ModalWrapper sortModal={sortModal}>
      <SortText
        sortModal={sortModal}
        name="최신순"
        onClick={onHandleSortButton}
      >
        최신순
      </SortText>
      <SortText
        sortModal={sortModal}
        name="좋아요순"
        onClick={onHandleSortButton}
      >
        좋아요순
      </SortText>
      <SortText
        sortModal={sortModal}
        name="저장순"
        onClick={onHandleSortButton}
      >
        저장순
      </SortText>
      <SortText
        sortModal={sortModal}
        name="조회순"
        onClick={onHandleSortButton}
      >
        조회순
      </SortText>
    </ModalWrapper>
  );
}

export default SortModal;
