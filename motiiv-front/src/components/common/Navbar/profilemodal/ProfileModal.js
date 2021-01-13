import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Tag from '../../Tag/ProfileTag';
import ToggleBtn from '../../Button/ToggleBtn';
import naver from '../../../../assets/profile/naverlink_btn_small.png';
import kakao from '../../../../assets/profile/kakaolink_btn_small.png';
import { useSelector } from 'react-redux';
import Loading from '../../Loading/Loading';
import { darkColors, whiteColors } from '../../../../style/color';

/* 전체 모달 창 */
const ModalWrap = styled.div`
  display: ${props => (props.show === true ? 'flex' : 'none')};
  position: absolute;
  top: 5rem;
  right: 3.5rem;
  z-index: 10000;
  width: 28rem;
  height: 41.3rem;
  border-radius: 1rem;
  box-shadow: 0.2rem 0.3rem 0.7rem rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Spoqa-Han-Sans';
  color: var(--categorytext);
  background: var(--modalbackground);
  //background: white;
  @media ${props => props.theme.maxlaptop} {
    width: 25rem;
    height: 36.8rem;
  }
  @media ${props => props.theme.mobile} {
    width: 17rem;
    height: 28.5rem;
  }
`;

const FirstLetter = styled.div`
  color: #2cff2c;
  ${props => (props.src ? `display : none;` : ``)};
  ${props =>
    props.lang === 'kor'
      ? `
    font-size : 5.5rem;
  `
      : `
    font-size : 6.5rem;
  `};
  @media ${props => props.theme.maxlaptop} {
    ${props =>
      props.lang === 'kor'
        ? `
    font-size : 4rem;
  `
        : `
    font-size : 5.3rem;
  `};
  }
  @media ${props => props.theme.mobile} {
    ${props =>
      props.lang === 'kor'
        ? `
    font-size : 2.8rem;
  `
        : `
    font-size : 3.5rem;
  `};
  }
`;

/* 프로필 이미지 */
const ProfileImage = styled.div`
  width: 10rem;
  height: 10rem;
  margin-top: 2.5rem;
  margin-bottom: 1.8rem;
  z-index: 11;
  border-radius: 100%;
  position: relative;

  @media ${props => props.theme.maxlaptop} {
    width: 8.5rem;
    height: 8.5rem;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
  }
  @media ${props => props.theme.mobile} {
    width: 5rem;
    height: 5rem;
    margin-top: 2rem;
    margin-bottom: 1.9rem;
  }

  background-image: url(${props => props.src});

  ${props =>
    props.src
      ? `
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  `
      : `
    background-color: #4E4E4E;
  `};

  ${FirstLetter} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

/* 닉네임 + 소셜 로그인 아이콘 */
const FirstDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  @media ${props => props.theme.maxlaptop} {
    margin-bottom: 1.2rem;
  }
  @media ${props => props.theme.mobile} {
    margin-bottom: 1.5rem;
  }
`;

const SocialImage = styled.img`
  height: 1.6rem;
  margin-left: 0.5rem;
  margin-top: 0.2rem;

  @media ${props => props.theme.mobile} {
    margin-top: 0;
  }
`;

const ProfileName = styled.div`
  font-weight: 700;
  font-size: 2rem;
  @media ${props => props.theme.maxlaptop} {
    font-size: 1.7rem;
  }
  @media ${props => props.theme.mobile} {
    font-size: 1.2rem;
  }
`;

/* 관심사 태그 컨테이너 */
const TagBox = styled.div`
  display: flex;
  margin-bottom: 3.6rem;
  @media ${props => props.theme.maxlaptop} {
    margin-bottom: 3rem;
  }
  @media ${props => props.theme.mobile} {
    margin-bottom: 2rem;
  }
`;

/* 다크 모드 버튼 영역 */
const DarkToggleContainer = styled.div`
  display: flex;
  width: 28rem;
  height: 6.1rem;

  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  border-top: 1px solid #a7a7a7;
  border-bottom: 1px solid #a7a7a7;
  margin-top: 2rem;
  margin-bottom: 1.7rem;

  padding: 0 2.5rem;
  @media ${props => props.theme.maxlaptop} {
    width: 25rem;
    height: 5.1rem;
    margin-bottom: 1.5rem;
  }
  @media ${props => props.theme.mobile} {
    width: 17rem;
    height: 3.9rem;
  }
`;

const ToggleText = styled.div`
  font-weight: 'Spoqa-Han-Sans';
  font-size: 1.4rem;
  font-weight: 700;
  @media ${props => props.theme.mobile} {
    font-size: 1rem;
  }
`;

function ProfileModal({ hideModal, showModal }) {
  const [isToggled, setIsToggled] = useState(false); //추후 isToggled 여부로 다크모드 설정
  const [langState, setLangState] = useState('kor');
  const myRef = useRef();
  const { userInfo, loading } = useSelector(({ user, loading }) => ({
    userInfo: user.userInfo,
    loading: loading['user/GET_PROFILE'],
  }));

  // 아웃 사이드 클릭
  const handleClickOutside = e => {
    if (!myRef?.current?.contains(e.target)) {
      hideModal();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  // 다크모드
  const setColorType = colors => {
    for (const [key, value] of Object.entries(colors)) {
      document.documentElement.style.setProperty(`--${key}`, `${value}`);
    }
  };
  const onToggle = e => {
    const isToggledNow = e.target.checked;
    setIsToggled(isToggledNow);
    isToggledNow ? setColorType(darkColors) : setColorType(whiteColors);
  };

  return (
    <ModalWrap show={showModal} ref={myRef}>
      {!loading ? (
        <ProfileImage src={userInfo.profileImageUrl}>
          <FirstLetter lang={langState} src={userInfo.profileImageUrl}>
            {userInfo.username && userInfo.username.substr(0, 1)}
          </FirstLetter>
        </ProfileImage>
      ) : (
        <Loading></Loading>
      )}

      <FirstDiv>
        <ProfileName>{userInfo.username}</ProfileName>
        <SocialImage src={userInfo.socialType === 'kakao' ? kakao : naver} />
      </FirstDiv>

      <TagBox>
        {userInfo.UserKeywords &&
          userInfo.UserKeywords.map((tag, i) => (
            <Tag
              key={'interest-' + i}
              text={tag.name}
              padding="0.45rem 0.8rem 0.2rem 0.8rem"
            />
          ))}
      </TagBox>

      <NavLink
        exact
        to="/setting"
        style={{ textDecoration: 'none' }}
        onClick={hideModal}
      >
        <Tag
          color="white"
          text={'계정 관리'}
          fontWeight="100"
          bgColor="#A7A7A7"
          padding="0.45rem 0.8rem 0.2rem 0.8rem"
        />
      </NavLink>

      <DarkToggleContainer>
        <ToggleText>다크 모드</ToggleText>
        <ToggleBtn
          id="profile-toggle"
          toggled={isToggled}
          onChange={onToggle}
        />
      </DarkToggleContainer>

      <div style={{ marginBottom: '1.7rem' }}>
        <Tag
          text={'logout'}
          fontSize="1.6rem"
          fontFamily="Campton"
          padding="0.7rem 1.5rem"
        />
      </div>
    </ModalWrap>
  );
}

export default ProfileModal;
