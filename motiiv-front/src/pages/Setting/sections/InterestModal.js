import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import InterestComponent from './InterstComponent';

/* 전체 모달 창 */
const ModalWrap = styled.div`
  display: ${props => (props.show ? 'inline-block' : 'none')};

  position: absolute;
  top: 5rem;
  left: 0;
  z-index: 3;

  width: 64.4rem;
  height: 18.7rem;
  border-radius: 1rem;
  background: #4e4e4e;
  padding: 2rem;

  justify-content: center;
  align-items: left;

  font-family: 'Spoqa-Han-Sans';

  @media ${props => props.theme.maxdesktop} {
    width: 43.6rem;
    height: 23.4rem;
  }
  @media ${props => props.theme.mobile} {
    width: 22.4rem;
    height: 21rem;
    top: 3rem;
  }
`;

const InterestGrid = styled.div`
  max-width: 60.4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8.4rem, 1fr));
  column-gap: 1rem;
  row-gap: 2rem;

  @media ${props => props.theme.maxdesktop} {
    gap: 2rem;
  }
  @media ${props => props.theme.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(5.3rem, 1fr));
    column-gap: 1rem;
    row-gap: 1.2rem;
  }
`;

const BottomContianer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.5rem;

  background: none;
  border: none;

  cursor: pointer;

  @media ${props => props.theme.maxdesktop} {
    margin-top: 3rem;
  }
  @media ${props => props.theme.mobile} {
    margin-top: 2.5rem;
  }
`;

function InterestModal({ show, keywordsfunc, onClickInterstBtn }) {
  const interest = [
    '자기계발',
    '성장',
    '목표',
    '도전',
    '인물',
    '스타트업',
    '변화',
    '위로',
    '조언',
    '개발',
    '디자인',
    '기획',
  ];

  const [selectedBtnCountState, setSelectedBtnCountState] = useState(0);
  const [okBtnState, setOkBtnState] = useState('ok-disabled');
  const [chosenInterestState, setChosenInterestState] = useState([]);

  //selectedBtnCountState가 3이 되는 순간 기존 버튼 삭제 말고는 다른 버튼은 눌리지 않아야 함.

  const onClickInterestBtn = i => {
    //이미 배열에 해당 태그가 포함되어 있다면 삭제
    if (chosenInterestState.includes(interest[i])) {
      const clicked = interest[i];
      setChosenInterestState(
        chosenInterestState.filter(interest => interest !== clicked),
      );
      setSelectedBtnCountState(selectedBtnCountState - 1);
    } else {
      //배열에 없다면 선택된게 2개 이하일 때만 배열에 삽입
      if (chosenInterestState.length <= 2) {
        setChosenInterestState([...chosenInterestState, interest[i]]);
        setSelectedBtnCountState(selectedBtnCountState + 1);
      }
    }

    //해당 내용을 state에 업데이트
    keywordsfunc(chosenInterestState);

    //선택된게 1개 이상일 때 완료 버튼 활성화
    if (selectedBtnCountState >= 1) {
      setOkBtnState('ok');
    } else {
      setOkBtnState('ok-disabled');
    }
  };

  return (
    <ModalWrap show={show}>
      <InterestGrid>
        {interest.map((tag, i) => (
          <InterestComponent
            key={i}
            idx={i}
            type="unselected"
            text={tag}
            onClickInterestBtn={onClickInterestBtn}
            count={selectedBtnCountState}
          />
        ))}
      </InterestGrid>

      <BottomContianer>
        <InterestComponent type="cancel" text={'취소'}></InterestComponent>
        <InterestComponent
          type={chosenInterestState.length === 3 ? 'ok-disabled' : 'ok'}
          text={'확인'}
          onClickInterstBtn={onClickInterstBtn}
        ></InterestComponent>
      </BottomContianer>
    </ModalWrap>
  );
}

export default React.memo(InterestModal);
