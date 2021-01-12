import React ,{useState,useEffect,useCallback,useRef}from 'react'
import {useSpring,animated} from 'react-spring';
import styled, {css} from 'styled-components';
import { NavLink } from 'react-router-dom';
import ModalCoverImage from '../../../assets/global/0109_mymotiiv_login_mockup.png';
import ModalMobileImage from '../../../assets/global/0109_mobile_mymotiiv_mockup.png';
import toggle from '../../../assets/global/toggle.gif';
import SignInModal from '../../../components/common/Login/SignInModal';
import MyNavBar from '../sections/MyNavbar';
import {MdClose} from 'react-icons/md';
const ModalContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; 
`;
const ModalOverlay = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%; 
    height: 100%;
    background-size: cover;
    border : none;
    overflow : hidden;
    /* background-color : black;
    opacity: 0.7; */
    background-image: url(${ModalCoverImage});
    @media ${props => props.theme.mobile}{
    background-image : url(${ModalMobileImage});

    max-width: 76.8rem;
    max-height: 64.3rem;
  }

`;
const ModalWrapper = styled.div`
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.8);
    width: 35rem;
    height: 43.6rem;
    border-radius: 1.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display : ${props => ( !props.showLogin ? 'block' : 'none')};
    @media ${props => props.theme.mobile}{
    width : 27.5rem;
    height : 35.3rem;
  }

  @media ${props => props.theme.tablet}{
    width : 30rem;
    height : 38rem;
  }
  @media ${props => props.theme.desktop}{
    width: 35rem;
    height: 43.6rem;
  }
`;

const ModalInner = styled.div`
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
`

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
    font-size : 2rem;
    color : ${({theme}) => theme.primary};
    margin-top : 6rem;
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
    font-size : 1.6rem;
    color : white;
    line-height: 150%;
    margin-top : 4.5rem;
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
    width : 13.8rem;
    height: 3.2rem;
    border: solid ${({theme}) => theme.primary} 1px;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top : 7rem;
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
    display : flex;
    justify-content: center;
    align-items : center;
`;

const Signup = styled.div`
    display : flex;
    align-items : center;
    cursor : pointer;
    font-weight: bold;
    font-size : 1.4rem;
    font-family: Campton;
    color : ${({theme}) => theme.primary};
    text-decoration: none;
`;

const Devider = styled.div`
    display : flex;
    align-items : center;
    font-family: Cantarell;
    font-weight : bold;
    margin : 0.5rem;
    width: 0.5rem;
    height: 1.2rem;
    color : ${({theme}) => theme.primary};
`;

const Login = styled.div`
    display : flex;
    align-items : center;
    font-weight: bold; 
    font-size : 1.4rem;
    cursor : pointer;
    font-family: Campton;
    color : ${({theme}) => theme.primary};
    text-decoration: none;
`;


// const Background = styled.div`
//   width: 100%;
//   height: 100%;
//   background: rgba(0,0,0,0.8);
//   position : fixed;
//   display: flex;
//   justify-content: center;
//   align-items : center; 
// `;

// const ModalWrapper = styled.div`
//   width: 800px;
//   height: 500px;
//   box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
//   background: #fff;
//   color: #000;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   position: relative;
//   z-index: 10;
//   border-radius: 10px;
// `;
// const ModalImg = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 10px 0 0 10px;
//   background: #000;
// `;

// const ModalContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   line-height: 1.8;
//   color: #141414;
//   p {
//     margin-bottom: 1rem;
//   }
//   button {
//     padding: 10px 24px;
//     background: #141414;
//     color: #fff;
//     border: none;
//   }
// `;

// const CloseModalButton = styled(MdClose)`
//   cursor: pointer;
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   width: 32px;
//   height: 32px;
//   padding: 0;
//   z-index: 10;
// `;
function MyModal() {
    const [showLogin,setShowLogin] = useState(false);

    const showLoginModal = () => {
        setShowLogin(!showLogin)
    };
    // document.body.style.overflow = "hidden";
    // document.body.style.overflow = "unset"

    return (
         <> 
          {/* {showModal ? <Background ref={modalRef} onClick={closeModal}>
            <animated.div style = {animation}>
            <ModalWrapper showModal={showModal}>
            <ModalContent>
              <h1>Are you ready?</h1>
              </ModalContent>
              <CloseModalButton aria-label="Close modal" onClick={() => setShowModal(prev=> !prev)}></CloseModalButton>
            </ModalWrapper>
            </animated.div>
          </Background> : null} */}
          {/* <ModalContainer> */}
            <ModalOverlay />
            {/* <animated.div style={animation}> */}
           { !showLogin && (<> <ModalWrapper showLogin = {showLogin}>
                <ModalInner>
                    <ToggleGif src = {toggle}></ToggleGif>
                    <Title>회원만 접근할 수 있어요!</Title> 
                    <Subtitle>지금 가입하고<br /><b>나만을 위한 작업 공간</b>을<br/>구성해보세요</Subtitle>
                    <TagWrapper>
                        <ContentWrapper> 
                            <Signup onClick = {showLoginModal} >sign up</Signup>
                            <Devider>&#47;</Devider>
                            <Login>login</Login>
                        </ContentWrapper>
                    </TagWrapper>
                </ModalInner>
            </ModalWrapper> </>)
} {showLogin && <SignInModal isShow = {true} num = {1} />}
            {/* </animated.div> */}
            {/* </ModalContainer> */}
        </>
    )
}

export default MyModal;