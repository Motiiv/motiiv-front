import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../../assets/global/motiiv_logo.png';
import star from '../../../assets/global/star.png';
import Loading from '../Loading/Loading';
import ProfileModal from './profilemodal/ProfileModal';

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
  & {
    letter-spacing: -0.3px;
  }
  position: fixed;
  top: 0;
  z-index: 444;
`;

const Logo = styled.img`
  height: 1.8rem;
  z-index: 3;
  padding-left: 5rem;
  @media ${props => props.theme.mobile} {
    padding-left: 1.6rem;
  }
`;

/*  중앙 네비게이션  */
const TabContainer = styled.div`
  display: flex;
  width: auto;
  @media ${props => props.theme.mobile} {
    display: none;
  }
`;

const TabElem = styled(NavLink)`
  object-fit: contain;
  //color: white;
  text-decoration: none;
  padding: 1.6rem 0.8rem;
  &:nth-child(7) {
    display: ${props => (props.show === 'true' ? 'flex' : 'none')};
  }
  color: ${props => (props.isActiveNav ? '#2cff2c' : 'white')};
  border-bottom: ${props =>
    props.isActiveNav ? '0.2rem solid #2cff2c' : 'none'};
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
  @media ${props => props.theme.mobile} {
    padding-right: 1.6rem;
  }
`;

const Login = styled.div`
  display: ${props => (props.login === false ? 'flex' : 'none')};
  color: white;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
`;

const FirstLetter = styled.div`
  color: #2cff2c;
  font-size: 1.75rem;
  font-family: 'Spoqa-Han-Sans';

  ${props =>
    props.src
      ? css`
          display: none;
        `
      : css``};
`;

const Profile = styled.div`
  display: ${props => (props.login === true ? 'flex' : 'none')};
  width: 3rem;
  height: 3rem;
  z-index: 3;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 100%;
  border: ${props => (props.onclick === true ? '2px solid #2CFF2C' : 'none')};
  cursor: pointer;
  background-image: url(${props => props.src});
  ${props =>
    props.src
      ? css`
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        `
      : css`
          background-color: #4e4e4e;
        `};
  ${FirstLetter} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media ${props => props.theme.mobile} {
    padding-right: 1.6rem;
  }
`;

function Navbar({ showModal, isloggined, location }) {
  //프로필 드롭다운 나타나고 없애기
  const [profileModalState, setProfileModalState] = useState(false);
  const onClickProfileImage = () => {
    (async () => {
      try {
        setProfileModalState(prev => !prev);
      } catch (e) { }
    })();
  };
  const hideModal = () => {
    setProfileModalState(false);
  };

  const { userInfo, loading } = useSelector(({ user, loading }) => ({
    userInfo: user.userInfo,
    loading: loading['user/GET_PROFILE'],
  }));

  /*
  const [nameLangState, setNamelangState] = useState('kor');
  const firstletter = userInfo && userInfo.username.substr(0,1);

  const onChangeName = () => {
    firstLetter(firstletter) ? setNameKorState('eng') : setNameKorState('kor');
  };

  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  );
  const firstLetter = str => {
    return !str || pattern.test(str);
  };
*/

  return (
    <>
      <Header>
        <NavLink exact to="/main">
          <Logo src={logo} />
        </NavLink>
        <TabContainer>
          <TabElem exact to="/main" isActiveNav={location === '/main'}>
            main
          </TabElem>
          <Star src={star} />
          <TabElem to="/category/0" isActiveNav={location.includes('category')}>
            category
          </TabElem>
          <Star src={star} />
          <TabElem exact to="/mymotiiv" isActiveNav={location === '/mymotiiv'}>
            mymotiiv
          </TabElem>
        </TabContainer>

        <LoginContainer>
          <Login login={isloggined} onClick={showModal}>
            login
          </Login>

          {!loading ? (
            <Profile
              src={userInfo && userInfo.profileImageUrl}
              login={isloggined}
              onClick={onClickProfileImage}
              onclick={profileModalState}
            >
              <FirstLetter src={userInfo && userInfo.profileImageUrl}>
                {userInfo && userInfo.username.substr(0, 1)}
              </FirstLetter>
            </Profile>
          ) : (
              <Loading></Loading>
            )}
          <ProfileModal hideModal={hideModal} showModal={profileModalState} />
        </LoginContainer>
      </Header>
    </>
  );
}

export default Navbar;
