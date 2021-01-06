import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import InterestComponent from './InterstComponent'

/* 전체 모달 창 */
const ModalWrap = styled.div`
  display: ${props => props.show ? 'inline-block' : 'none'};

  position:absolute;
  top:5rem;
  left:0;
  z-index:3;

  width: 64.4rem;
  height:18.7rem;
  border-radius: 1rem;
  background: #4E4E4E;
  padding: 2rem;

  justify-content: center;
  align-items:left;

  font-family : 'Spoqa-Han-Sans';
`;

const InterestGrid = styled.div`
  max-width:60.4rem;
  height:8.4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8.4rem, 1fr));
  gap: 1rem;
`

const BottomContianer = styled.div`
  display:flex;
  justify-content:center;
  margin-top:3.5rem;

  background:none;
  border:none;

  cursor:pointer;
`

function InterestModal({show}) {
    return(
        <ModalWrap show = {show}>
          <InterestGrid>
            <InterestComponent type="selected" text={"키워드"}></InterestComponent>
            <InterestComponent type="selected" text={"키워드"}></InterestComponent>
            <InterestComponent type="selected" text={"키워드"}></InterestComponent>
            <InterestComponent type="unselected" text={"키워드"}></InterestComponent>
            <InterestComponent type="unselected" text={"키워드"}></InterestComponent>
            <InterestComponent type="unselected" text={"키워드"}></InterestComponent>
            <InterestComponent type="unselected" text={"키워드"}></InterestComponent>
            <InterestComponent type="unselected" text={"키워드"}></InterestComponent>
            <InterestComponent type="unselected" text={"키워드"}></InterestComponent>
            <InterestComponent type="unselected" text={"키워드"}></InterestComponent>
            <InterestComponent type="unselected" text={"키워드"}></InterestComponent>
            <InterestComponent type="unselected" text={"키워드"}></InterestComponent>
        </InterestGrid>

        <BottomContianer>
          <InterestComponent type="cancel" text={"취소"}></InterestComponent>
          <InterestComponent type="ok" text={"확인"}></InterestComponent>
        </BottomContianer>
      </ModalWrap>
    );
}

export default InterestModal;
