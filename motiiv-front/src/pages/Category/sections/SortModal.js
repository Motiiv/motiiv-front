import React from 'react';
import styled, { css } from 'styled-components';
import { getCategoryVideos } from '../../../modules/video';
import { useDispatch, useSelector } from 'react-redux';

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
  background: var(--modalbackground);
  top: 2.5rem;
  right: 0;
  justify-content: center;
  padding: 1.4rem;
`;
const SortText = styled.div`
  color: var(--categorytext);
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
    background-color: var(--sortbg);
    color: black !important;
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
function SortModal({ sortModal, onHandleSortText, keyword }) {
  const dispatch = useDispatch();
  const { loading } = useSelector(({ loading }) => ({
    loading: loading['video/GET_CATEGORY_VIDEOS'],
  }));

  const onHandleSortButton = evt => {
    onHandleSortText(
      evt.target.attributes.name.value,
      evt.target.attributes.id.value,
    );
    dispatch(
      getCategoryVideos({
        keyword: keyword,
        filters: evt.target.attributes.id.value,
      }),
    );
  };
  return (
    <ModalWrapper sortModal={sortModal}>
      <SortText
        sortModal={sortModal}
        name="최신순"
        id="new"
        onClick={onHandleSortButton}
      >
        최신순
      </SortText>
      <SortText
        sortModal={sortModal}
        name="좋아요순"
        id="like"
        onClick={onHandleSortButton}
      >
        좋아요순
      </SortText>
      <SortText
        sortModal={sortModal}
        name="저장순"
        id="save"
        onClick={onHandleSortButton}
      >
        저장순
      </SortText>
      <SortText
        sortModal={sortModal}
        name="조회순"
        id="view"
        onClick={onHandleSortButton}
      >
        조회순
      </SortText>
    </ModalWrapper>
  );
}

export default React.memo(SortModal);
