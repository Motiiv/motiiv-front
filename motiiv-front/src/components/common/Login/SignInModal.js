import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import LastPage from './LastPage';
import loginCancelBtn from '../../../assets/global/login_cancel.svg';

const ModalBackgorundWrap = styled.div`
  display: ${props => props.show ? `flex` : `none`};
  background: #000000;
  opacity: 0.5;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index:100000;

  width: auto;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const CancelBtn = styled.div`
  display: ${props => props.page === 1 ? 'display' : 'none'};
  background-image:url(${loginCancelBtn});
  width:1.5rem;
  height:1.5rem;
  cursor:pointer;
`

const NextBtn = styled.div`
  ${props => props.page !== 2 ?
    `display:none;` :
    `opacity: 100; cursor:pointer;`
  };
  font-weight:400;
  font-size:1.5rem;
`

const PrevBtn = styled.div`
    ${props => props.page !== 3 ?
    `display:none;` :
    `display:flex; cursor:pointer;`
  };
  font-weight:400;
  font-size:1.5rem;
`

const FinBtn = styled.div`
    ${props => props.page === 3 ?
    `display:flex; cursor:pointer;` :
    `display:none;`
  };
  font-weight:400;
  font-size:1.5rem;
`

const ModalWrap = styled.div`
  display: ${props => props.show ? `flex` : `none`};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:100000;

  padding : 5rem 2.6rem 2.6rem 3rem;
  width: 65rem;
  height:38rem;
  border-radius: 2rem;
  background: white;
  box-shadow: 0.2rem 0.3rem 0.7rem rgba(0, 0, 0, 0.15);

  justify-content: center;
  align-items:center;
  flex-direction: column;
  font-family : 'Spoqa-Han-Sans';
  color:black;

  @media ${props => props.theme.maxlaptop} {
    width: 59rem;
    height: 35.3rem;
    padding : 4.5rem 2.5rem 2.5rem 3.3rem;
  }
  @media ${props => props.theme.mobile} {
    width: 31.1rem;
    height: 44.2rem;
    padding : 5rem 2rem 2rem 2rem;
  }

  ${NextBtn}{
    position:absolute;
    right:2.5rem;
    bottom:2.5rem;
    @media ${props => props.theme.maxlaptop} {
      bottom:3.3rem;
    }
    @media ${props => props.theme.mobile} {
      right:2rem;
      bottom:2rem;
    }
  };
  ${PrevBtn}{
    position:absolute;
    left:2.5rem;
    bottom:2.5rem;
    @media ${props => props.theme.maxlaptop} {
      bottom:3.3rem;
    }
    @media ${props => props.theme.mobile} {
      left:2rem;
      bottom:2rem;
    }
  };
  ${FinBtn}{
    position:absolute;
    right:2.5rem;
    bottom:2.5rem;
    @media ${props => props.theme.maxlaptop} {
      bottom:3.3rem;
    }
    @media ${props => props.theme.mobile} {
      right:2rem;
      bottom:2rem;
    }
  };
  ${CancelBtn}{
    position:absolute;
    right:2rem;
    top:2rem;
  }
`;

/*
const Indicator = styled.div`
  ${props => props.activeBtn =='true' ?
    `
    width:1.4rem;
    height:0.5rem;
    background: #2CFF2C;
    border-radius: 0.35rem;
    `
  :
    `
    width:0.5rem;
    height:0.5rem;
    border-radius: 100%;
    background: #A7A7A7;
    opacity: 0.3;
    `
  };
`

const pageData = [
  {
    'first' : 'true',
    'second' : 'false',
    'last' : 'false'
  },
  {
    'first' : 'false',
    'second' : 'true',
    'last' : 'false'
  },
  {
    'first' : 'false',
    'second' : 'false',
    'last' : 'true'
  }
];

const IndicatorContainer = styled.div`
  display:flex;
  width:3.6rem;
  justify-content:space-between;
`
*/

function SigninModal({ hideModal, isShow }) {

  // 아웃 사이드 클릭
  const myRef = useRef();
  const handleClickOutside = e => {
    if (!myRef?.current?.contains(e.target)) {
      hideModal();
      pageReset();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  const [nameState, setNameState] = useState("");
  const [imageState, setImageState] = useState("");
  const [snsIdState, setSnsIdState] = useState("");
  const [socialState, setSocialState] = useState("");
  const [jobState, setJobState] = useState("");
  const [keywordState, setKeywordState] = useState("");

  const { userInfo } = useSelector(({ user }) => ({
    userInfo: user.userInfo
  }));

  const setSocialProfile = () => {
    //   setNameState(user && user.username);
    //   setImageState(user && user.profileImageUrl);
    //   setSnsIdState(user && user.snsId);
    //   setSocialState(user && user.socialType);
    //   setJobState(user && user.Job);
    //   setKeywordState(user && user.UserKeywords);

    //   console.log(nameState);
    //   console.log(imageState);
    //   console.log(snsIdState);
    //   console.log(socialState);
    //   console.log(jobState);
    //   console.log(keywordState);
  }

  const [pageState, setPageState] = useState(1);
  const pageDown = () => {
    if (pageState > 1) {
      setPageState(pageState - 1);
    }
  }
  const pageUp = () => {
    if (pageState < 3) {
      setPageState(pageState + 1);
    }
  }
  const pageReset = () => {
    setPageState(1);
  }

  //회원가입 완료
  const finishSignup = () => {
    hideModal();
  }

  return (
    <>
      <ModalBackgorundWrap show={isShow} />
      <ModalWrap show={isShow} ref={myRef}>
        <CancelBtn onClick={hideModal} page={pageState} />
        <FirstPage page={pageState} pageUp={pageUp} socialfunc={setSocialProfile} hideModal={hideModal} />
        <SecondPage page={pageState} />
        <LastPage page={pageState} />
        <PrevBtn page={pageState} onClick={pageDown}>&#xE000; &nbsp; 이전</PrevBtn>
        <NextBtn page={pageState} onClick={pageUp}>다음 &nbsp; &#xE001;</NextBtn>
        <FinBtn page={pageState} onClick={finishSignup}>완료</FinBtn>
      </ModalWrap>
    </>
  );
}

export default SigninModal;