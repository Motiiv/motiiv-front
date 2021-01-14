import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import LoginInterestComponent from './LoginInterestComponent';

const Container = styled.div`
  display: ${props => (props.page === 3 ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Spoqa-Han-Sans';
  color: black;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 2.5rem;

  @media ${props => props.theme.maxlaptop} {
    font-size: 2.3rem;
  }
  @media ${props => props.theme.mobile} {
    font-size: 1.8rem;
    width: 24.5rem;
    text-align: center;
    line-height: 1.3;
  }
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 4rem;
  color: ${props => props.theme.darkGray};
  @media ${props => props.theme.maxlaptop} {
    font-size: 1.5rem;
    margin-bottom: 3.5rem;
  }
  @media ${props => props.theme.mobile} {
    font-size: 1.2rem;
    margin-bottom: 4.3rem;
    margin-top: 1.8rem;
  }
`;

const InterestGrid = styled.div`
  max-width: 39.6rem;
  height: 16rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8.4rem, 1fr));
  gap: 1rem;

  margin-bottom: 4rem;

  @media ${props => props.theme.mobile} {
    max-width: 25.4rem;
    height: 18rem;
    grid-template-columns: repeat(auto-fill, minmax(7.8rem, 1fr));
    gap: 1rem;
    margin-bottom: 7rem;
  }
`;

function LastPage({ page, selectKeywords }) {
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
  const [countState, setCountState] = useState(0);
  const [chosenInterestState, setChosenInterestState] = useState('');

  /*
  //selectedBtnCountState가 3이 되는 순간 기존 버튼 삭제 말고는 다른 버튼은 눌리지 않아야 함.

  const onClickInterestBtn = (i) => {

    //이미 배열에 해당 태그가 포함되어 있다면 삭제
    if (chosenInterestState.includes(interest[i])) {
      const clicked = interest[i];
      setChosenInterestState(chosenInterestState.filter(interest => interest !== clicked));
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
  }
  */

  return (
    <Container page={page}>
      <Title>선택하신 관심사에 맞는 동기부여 영상을 추천드려요!</Title>
      <SubTitle>보고 싶은 관심사는 최대 3개까지 선택 가능해요!</SubTitle>

      <InterestGrid>
        {interest.map((tag, i) => (
          <LoginInterestComponent
            key={'interest-' + i}
            type={false}
            text={tag}
          />
        ))}
      </InterestGrid>
    </Container>
  );
}

export default React.memo(LastPage);
