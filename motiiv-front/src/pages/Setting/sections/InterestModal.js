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

  @media ${props => props.theme.maxdesktop} {
    width: 43.6rem;
    height: 23.4rem;
  }
  @media ${props => props.theme.mobile} {
    width: 22.4rem;
    height: 21rem;
    top:3rem;
  }
`;

const InterestGrid = styled.div`
  max-width:60.4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8.4rem, 1fr));
  gap: 1rem;

  @media ${props => props.theme.maxdesktop} {
    gap: 2rem;

  }
  @media ${props => props.theme.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(5.3rem, 1fr));
    column-gap: 0.5rem;
    row-gap:1.2rem;
  }
`

const BottomContianer = styled.div`
  display:flex;
  justify-content:center;
  margin-top:3.5rem;

  background:none;
  border:none;

  cursor:pointer;

  @media ${props => props.theme.maxdesktop} {
    margin-top:3rem;
  }
  @media ${props => props.theme.mobile} {
    margin-top:2.5rem;
  }
`

function InterestModal({ show, keywordsfunc }) {

  console.log(keywordsfunc);

  const interest = ['자기계발','성장','목표','도전','인물','스타트업','변화','위로','조언','개발','디자인','기획']
  var chosenInterest = [];

  const [selectedBtnCountState, setSelectedBtnCountState] = useState(0);
  const [okBtnState, setOkBtnState] = useState("ok-disabled");
  
  const onClickInterestBtn = () => {
        if(chosenInterest.length<=2){
          //선택된게 2개 이하일 때만 정보 받아와서 배열에 넣고
          if(chosenInterest.includes()){
            const idx = chosenInterest.indexOf('어쩌구')
            chosenInterest.splice(idx, 1);
            setSelectedBtnCountState(selectedBtnCountState-1);
          }else{
            chosenInterest.append('어쩌구');
            setSelectedBtnCountState(selectedBtnCountState+1);
          }
        }

        keywordsfunc(chosenInterest);

        //선택된게 1개 이상일 때 완료 버튼 활성화
        if(selectedBtnCountState>=1){
          setOkBtnState('ok');
        }else{
          setOkBtnState('ok-disabled');
        }

        console.log(chosenInterest);
  }

    return(
        <ModalWrap show = {show}>
          <InterestGrid>
            {interest.map((tag, i) => <InterestComponent
                                        key = {"interest-" + i}
                                        type={'unselected'}
                                        text={tag}
                                        onClick={onClickInterestBtn}
                                        />)}
          </InterestGrid>

        <BottomContianer>
          <InterestComponent type="cancel" text={"취소"}></InterestComponent>
          <InterestComponent type={okBtnState} text={"확인"}></InterestComponent>
        </BottomContianer>
      </ModalWrap>
    );
}

export default InterestModal;
