import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../../assets/global/motiiv_logo.png';
import star from '../../../assets/global/star.png';
import profile from '../../../assets/profile/sampleImage.png';
import SigninModal from './SigninModal/SignInModal';
import ProfileModal from './ProfileModal';

const activeStyle = {
  color: '#2cff2c',
  borderBottom: '0.2rem solid #2cff2c',
};

const Header = styled.header`
  width: 100%;
  height: 5rem;
  background-color: black;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
  font-family: 'Campton';
  font-weight: 700;
  /* z-index: 1001; */
`;

const Logo = styled.img`
  height: 1.8rem;
  z-index: 3;
  padding-left: 5rem;
`;

/*  중앙 네비게이션  */
const TabContainer = styled.div`
  display: flex;
  width: auto;
`;

const TabElem = styled(NavLink)`
  object-fit: contain;
  color: white;
  text-decoration: none;
  padding: 1.6rem 0.8rem;
  &:nth-child(7) {
    display: ${props => (props.show === 'true' ? 'flex' : 'none')};
  }
`;

const Star = styled.img`
  height: 1.2rem;
  margin: 1.6rem 1.7rem;
  z-index: 3;
  &:nth-child(6) {
    display: ${props => (props.show === 'true' ? 'flex' : 'none')};
  }
`;

/*  우측 로그인 관련  */
const LoginContainer = styled.div`
  display: flex;
  height: 5rem;
  align-items: center;
  align-self: flex-end;
  justify-content: end;
  padding-right: 5rem;
`;

const Login = styled.div`
  display: ${props => (props.login === 'false' ? 'flex' : 'none')};
  color: white;
  text-align: left;
  text-decoration: none;
  cursor:pointer;
`;

const Profile = styled.div`
  display: ${props => (props.login === 'true' ? 'flex' : 'none')};
  width: 3rem;
  height: 3rem;
  z-index: 3;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 100%;
  border: ${props => (props.onclick === true ? '2px solid #2CFF2C' : 'none')};
  background-image: ${props => 'url(' + props.src + ')'};
  cursor: pointer;
`;

function Navbar() {
  //로그인 여부 판단 + 어드민 여부 판단
  const [loginState, setLoginState] = useState({
    isLoggined: true,
    admin: false,
  });

  //프로필 드롭다운 나타나고 없애기
  const [profileModalState, setProfileModalState] = useState(false);
  const onClickProfileImage = () => {
    (async () => {
      try {
        setProfileModalState(prev => !prev);
      } catch (e) {}
    })();
  };

  //로그인 모달 나타나고 없애기
  const [loginModalState, setLoginModalState] = useState(false);
  const onClickLoginBtn = () => {
    (async () => {
      try {
        setLoginModalState(prev => !prev);
      } catch (e) {
        
      }
    })();
  }

  return (
    <>
    <Header>
      <NavLink exact to="/main">
        <Logo src={logo} />
      </NavLink>
      <TabContainer>
        <TabElem exact to="/main" activeStyle={activeStyle}>
          main
        </TabElem>
        <Star src={star} />
        <TabElem to="/category/0" activeStyle={activeStyle}>
          category
        </TabElem>
        <Star src={star} />
        <TabElem exact to="/mymotiiv" activeStyle={activeStyle}>
          mymotiiv
        </TabElem>
        <Star src={star} show={loginState.admin.toString()} />
        <TabElem
          exact
          to="/admin"
          show={loginState.admin.toString()}
          activeStyle={activeStyle}
        >
          admin
        </TabElem>
      </TabContainer>

      <LoginContainer>
        <Login login={loginState.isLoggined.toString()} onClick={onClickLoginBtn}>login</Login>
        <Profile src={profile} login={loginState.isLoggined.toString()} onClick={onClickProfileImage} onclick = {profileModalState}/>
        <ProfileModal showModal = {profileModalState}/>

      </LoginContainer>
    </Header>
    <SigninModal showModal={loginModalState}/>
    </>
  );
}

export default Navbar;
