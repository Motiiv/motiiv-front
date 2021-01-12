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

function InterestModal({show}) {

  const interest = ['자기계발','성장','목표','도전','인물','스타트업','변화','위로','조언','개발','디자인','기획']

  const [selectedBtnCountState, setSelectedBtnCountState] = useState(1);
  const [okBtnState, setOkBtnState] = useState("ok-disabled");

  //카운트로 활성화/비활성화 하는 로직 필요
  const onClickInterestBtn = () => {
    (async () => {
      try {
        if(selectedBtnCountState != 0){
          setOkBtnState("ok");
          console.log(okBtnState);
        }else{
          setOkBtnState("ok-disabled");
          console.log(okBtnState);
        }
      } catch (e) {
        
      }
    })();
  }

    return(
        <ModalWrap show = {show}>
          <InterestGrid>
            {interest.map((tag, i) => <InterestComponent key = {"interest-" + i} type={'unselected'} text={tag} />)}
          </InterestGrid>

        <BottomContianer>
          <InterestComponent type="cancel" text={"취소"}></InterestComponent>
          <InterestComponent type={okBtnState} text={"확인"}></InterestComponent>
        </BottomContianer>
      </ModalWrap>
    );
}

export default InterestModal;
