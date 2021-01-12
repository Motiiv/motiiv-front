import React ,{useState,useEffect,useCallback,useRef}from 'react'
import {useSpring,animated} from 'react-spring';
import {MdClose} from 'react-icons/md';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import toggle from '../../../assets/global/toggle.gif';

// const ModalContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   background-color: rgba(0, 0, 0, 0);
// `;

const ModalOverlay = styled.div`
    position: fixed;
    top : 0;
    left : 0;
    right: 0;
    bottom : 0;
    background-size: cover;
    border : none;
    background-color : rgba(0,0,0,0.5);
    z-index : 10;
`;

const ModalWrapper = styled.div`
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);
  width: 35rem;
  height: 43.6rem;
  border-radius: 1.5rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media ${props => props.theme.mobile} {
    width: 27.5rem;
    height: 35.3rem;
    transform: translate(-50%, -50%);
  }
  @media ${props => props.theme.mobile375} {
    width: 27.5rem;
    height: 35.3rem;

    
  }
  @media ${props => props.theme.tablet} {
    width: 30rem;
    height: 38rem;
  
  }
  @media ${props => props.theme.desktop}{
    width: 35rem;
    height: 43.6rem;
  }
`;

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
`;

const ToggleGif = styled.img`
    background-size: cover;
    border-radius: 3rem;
    margin-top : 5rem;
    @media ${props => props.theme.mobile}{
    width: 8rem;
    hegiht : 3.7rem; 
  }
  @media ${props => props.theme.tablet}{
    width: 6.5rem;
    hegiht : 3rem; 
  }
  @media ${props => props.theme.desktop}{
    width: 9rem;
    height : 3.7rem;
  }
`;

const Title = styled.div`
  font-family: SpoqaHanSans;
  font-weight: bold;
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  margin-top: 6rem;
  @media ${props => props.theme.mobile}{
    margin-top : 3.5rem;
    font-size : 1.6rem;
  }
  @media ${props => props.theme.tablet}{
    font-size : 2rem;
  }
  @media ${props => props.theme.desktop}{
    font-size : 2rem;
  }
`;

const Subtitle = styled.div`
  font-family: SpoqaHanSans;
  font-size: 1.6rem;
  color: white;
  line-height: 150%;
  margin-top: 4.5rem;
  text-align: center;
  @media ${props => props.theme.mobile}{
    margin-top : 3rem;
    font-size : 1.4rem;
  }
  @media ${props => props.theme.tablet}{
    font-size : 1.6rem;
  }
`;

const TagWrapper = styled.div`
  width: 13.8rem;
  height: 3.2rem;
  border: solid ${({ theme }) => theme.primary} 1px;
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
  @media ${props => props.theme.mobile}{
    margin-top : 4rem;
  }
  @media ${props => props.theme.tablet}{
    margin-top : 6.1rem;
  }
  @media ${props => props.theme.desktop}{
    margin-top : 7rem;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Signup = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.4rem;
  font-family: Campton;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
`;

const Devider = styled.div`
  display: flex;
  align-items: center;
  font-family: Cantarell;
  font-weight: bold;
  margin: 0.5rem;
  width: 0.5rem;
  height: 1.2rem;
  color: ${({ theme }) => theme.primary};
`;

const Login = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.4rem;
  cursor: pointer;
  font-family: Campton;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
`;
const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 2.8rem;
  height: 2.8rem;
  padding: 0;
  z-index: 10000;
  color: #A7A7A7;
  opacity: 0.5;
`;

function BlackModal({blackModal,setBlackModal}) {

  const modalRef = useRef();


  const animation = useSpring({
    config : {
      duration : 250
    },
    opacity: BlackModal.active ? 1: 0,
    transform : BlackModal.active ? `translateY(0%)` : `translateY(-100%)`
  })

  const closeModal = e => {
    if(modalRef.current === e.target) {
      setBlackModal({
        ...blackModal,
        active: false,
      });
      document.body.style.overflow = "unset"
    }
  }

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && blackModal.active) {
        setBlackModal({
          ...blackModal,
          active: false,
        });
        console.log('I pressed');
      }
    },
    [setBlackModal, blackModal]
  );
  
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    document.body.style.overflow = "hidden";
    return () => document.removeEventListener('keydown',keyPress)
  }, [keyPress])
  return (
    <>
    {blackModal.active ? (
    // <ModalContainer>
    <>
    {/* <ModalContainer> */}
    <ModalOverlay onClick={closeModal} ref={modalRef}>
      <ModalWrapper  showModal={blackModal.active}>
        <ModalInner>
          <ToggleGif src={toggle}></ToggleGif>
          <Title>회원만 접근할 수 있어요!</Title>
          <Subtitle>
            지금 가입하고
            <br />
            <b>나만을 위한 작업 공간</b>을<br />
            구성해보세요
          </Subtitle>
          <TagWrapper>
            <ContentWrapper>
              <Signup >
                sign up
              </Signup>
              <Devider>&#47;</Devider>
              <Login >
                login
              </Login>
            </ContentWrapper>
          </TagWrapper>
        </ModalInner>
        <CloseModalButton
                aria-label='Close modal'
                onClick={() => {  setBlackModal({
                  ...blackModal,
                  active: false,
                  
                })
                document.body.style.overflow = "unset"}}
              />
      </ModalWrapper>
      </ModalOverlay>
      {/* </ModalOverlay> */}
       {/* </ModalContainer> */}
      </>
    ) : null}
    </>
  );
}

export default BlackModal;
