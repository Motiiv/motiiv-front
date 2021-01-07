import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Tag from '../../../components/common/Tag/ProfileTag';
import ToggleBtn from '../Button/ToggleBtn';
import profile from '../../../assets/profile/sampleImage.png';
import naver from '../../../assets/profile/naverlink_btn_small.png';
import kakao from '../../../assets/profile/kakaolink_btn_small.png';
import camera from '../../../assets/profile/ic_camera.png';

import { useSelector } from 'react-redux';
import Loading from '../Loading/Loading';

/* 전체 모달 창 */
const ModalWrap = styled.div`
  display: ${props => (props.show === true ? 'flex' : 'none')};

  position: absolute;
  top: 5rem;
  right: 3.5rem;
  z-index: 10;

  width: 28rem;
  height: 41.3rem;
  border-radius: 1rem;
  background: white;
  box-shadow: 0.2rem 0.3rem 0.7rem rgba(0, 0, 0, 0.15);

  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-family: 'Spoqa-Han-Sans';
`;

/* 프로필 이미지 */

const ProfileImageContainer = styled.div`
  width: 10rem;
  height: 10rem;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
`;

const InputContainer = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 2.8rem;
  height: 2.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;
  background-color: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);

  cursor: pointer;
`;

const PhotoInput = styled.input`
  position: absolute;
  clip: rect(0, 0, 0, 0);
`;

const CameraIcon = styled.img`
  width: 1.6rem;
`;

const ProfileImage = styled.img`
  width: 10rem;
  height: 10rem;
  z-index: 11;
  border-radius: 100%;
`;

/* 닉네임 + 소셜 로그인 아이콘 */
const FirstDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.8rem;
`;

const SocialImage = styled.img`
  height: 1.6rem;
  margin-left: 0.5rem;
  margin-top: 0.2rem;
`;

const ProfileName = styled.div`
  font-weight: 700;
  font-size: 2rem;
`;

/* 관심사 태그 컨테이너 */
const TagBox = styled.div`
  display: flex;
  margin-bottom: 3.6rem;
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
`;
const ToggleText = styled.div`
  font-weight: 'Spoqa-Han-Sans';
  font-size: 1.4rem;
  font-weight: 700;
`;

function ProfileModal({ showModal }) {
  //추후 서버 연결시 kakao/naver 구분해서 state 관리
  const [socialState, setSocialState] = useState(true);
  const [isToggled, setIsToggled] = useState(false); //추후 isToggled 여부로 다크모드 설정

  const { userInfo, loading } = useSelector(({ user, loading }) => ({
    userInfo: user.userInfo,
    loading: loading['user/GET_PROFILE'],
  }));

  return (
    <ModalWrap show={showModal}>
      <ProfileImageContainer>
        {!loading ? (
          <ProfileImage src={userInfo.profileImageUrl} />
        ) : (
          <Loading></Loading>
        )}
        <InputContainer for="upload">
          <CameraIcon src={camera} />
          <PhotoInput type="file" id="upload" />
        </InputContainer>
      </ProfileImageContainer>

      <FirstDiv>
        <ProfileName>모디부</ProfileName>
        <SocialImage src={socialState === true ? kakao : naver} />
      </FirstDiv>

      <TagBox>
        <Tag text={'여기는'} padding="0.4rem 0.8rem" />
        <Tag text={'카테고리'} padding="0.4rem 0.8rem" />
        <Tag text={'들어감'} padding="0.4rem 0.8rem" />
      </TagBox>

      <NavLink exact to="/setting" style={{ textDecoration: 'none' }}>
        <Tag
          color="white"
          text={'계정 관리'}
          fontWeight="100"
          bgColor="#A7A7A7"
          padding="0.4rem 0.8rem"
        />
      </NavLink>

      <DarkToggleContainer>
        <ToggleText>다크 모드</ToggleText>
        <ToggleBtn
          id="profile-toggle"
          toggled={isToggled}
          onChange={e => setIsToggled(e.target.checked)}
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
