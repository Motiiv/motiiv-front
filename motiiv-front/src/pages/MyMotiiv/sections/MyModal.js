import React from 'react'
import styled, {css} from 'styled-components';
import { NavLink } from 'react-router-dom';
import ModalCoverImage from '../../../assets/global/0109_mymotiiv_login_mockup.png';
import ModalMobileImage from '../../../assets/global/0109_mobile_mymotiiv_mockup.png';
import MyNavBar from '../sections/MyNavbar';
// const ModalContainer = styled.div`
//     width: 100%;
//     height:100%;
//     position : fixed;
//     display: flex;
//     justify-content: center;
//     align-items: center; 
//     z-index :998;
//     background-color: rgba(0, 0, 0, 0.7);
//     @media ${props => props.theme.mobile}{
//     max-width: 76.8rem;
//     max-height: 64.3rem;
//   }
// `;
const ModalOverlay = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%; 
    height: 100%;
    background-size: cover;
    border : none;
    overflow : hidden;
    background-image: url(${ModalCoverImage});
    @media ${props => props.theme.mobile}{
    background-image : url(${ModalMobileImage});

    /* max-width: 76.8rem;
    max-height: 64.3rem; */
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

const ToggleGif = styled.div`
    background : ${({theme}) => theme.primary};
    width: 9rem;
    height : 3.7rem;
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

const Signup = styled(NavLink)`
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

const Login = styled(NavLink)`
    display : flex;
    align-items : center;
    font-weight: bold; 
    font-size : 1.4rem;
    cursor : pointer;
    font-family: Campton;
    color : ${({theme}) => theme.primary};
    text-decoration: none;
`;




function MyModal() {

    return (
         <>  
            <ModalOverlay />
            <ModalWrapper>
                <ModalInner>
                    <ToggleGif></ToggleGif>
                    <Title>회원만 접근할 수 있어요!</Title> 
                    <Subtitle>지금 가입하고<br /><b>나만을 위한 작업 공간</b>을<br/>구성해보세요</Subtitle>
                    <TagWrapper>
                        <ContentWrapper> 
                            <Signup  exact to="/signup">sign up</Signup>
                            <Devider>&#47;</Devider>
                            <Login  exact to="/signin">login</Login>
                        </ContentWrapper>
                    </TagWrapper>
                </ModalInner>
            </ModalWrapper>
            
        </>
    )
}

export default MyModal;