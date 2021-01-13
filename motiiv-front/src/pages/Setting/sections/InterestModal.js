import React from 'react';
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

function InterestModal({ show, keywordsfunc }) {
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
  var chosenInterest = [];

  const [selectedBtnCountState, setSelectedBtnCountState] = useState(0);
  const [okBtnState, setOkBtnState] = useState('ok-disabled');

  //selectedBtnCountState가 3이 되는 순간 기존 버튼 삭제 말고는 다른 버튼은 눌리지 않아야 함. 이 처리는 어떻게 할까?

  const onClickInterestBtn = () => {
    console.log('들어와지니?');

    //이미 배열에 해당 태그가 포함되어 있다면 삭제
    if (chosenInterest.includes()) {
      const idx = chosenInterest.indexOf(
        '버튼을 클릭했을 때 그 내용을 여기에 어떻게 담을까? e.target.value..?',
      );
      chosenInterest.splice(idx, 1);
      setSelectedBtnCountState(selectedBtnCountState - 1);
    } else {
      //배열에 없다면 선택된게 2개 이하일 때만 배열에 삽입
      if (chosenInterest.length <= 2) {
        chosenInterest.append(
          '버튼을 클릭했을 때 그 내용을 여기에 어떻게 담을까? e.target.value..?',
        );
        setSelectedBtnCountState(selectedBtnCountState + 1);
      }
    }

    //해당 내용을 state에 업데이트
    keywordsfunc(chosenInterest);

    //선택된게 1개 이상일 때 완료 버튼 활성화
    if (selectedBtnCountState >= 1) {
      setOkBtnState('ok');
    } else {
      setOkBtnState('ok-disabled');
    }

    console.log(chosenInterest);
  };

  return (
    <ModalWrap show={show}>
      <InterestGrid>
        {interest.map((tag, i) => (
          <InterestComponent
            key={'interest-' + i}
            type={'unselected'}
            text={tag}
            onClick={onClickInterestBtn}
          />
        ))}
      </InterestGrid>

      <BottomContianer>
        <InterestComponent type="cancel" text={'취소'}></InterestComponent>
        <InterestComponent type={okBtnState} text={'확인'}></InterestComponent>
      </BottomContianer>
    </ModalWrap>
  );
}

export default React.memo(InterestModal);
