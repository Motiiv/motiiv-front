import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../modules/user';
import styled, { css } from 'styled-components';
import camera from '../../assets/profile/ic_camera.png';
import polygon from '../../assets/profile/ic_polygon.png';
import backBtn from '../../assets/global/ic_setting_back.svg';
import JobModal from './sections/JobModal';
import InterestModal from './sections/InterestModal';
import InterestComponent from './sections/InterstComponent';
import Loading from '../../components/common/Loading/Loading';

const TitleContainer = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  position: relative;
`;

/* 타이틀 */
const Border = styled.div`
  background-color: ${props => props.theme.primary};
  width: 11.6rem;
  height: 1.3rem;
  @media ${props => props.theme.maxdesktop} {
    width: 8rem;
    height: 1rem;
  }
  @media ${props => props.theme.mobile} {
    width: 6.2rem;
    height: 0.7rem;
  }
`;

const BackBtn = styled.div`
  background-image: url(${backBtn});
  display: none;
  margin-bottom: 0.5rem;
  filter: var(--backbtn);
  @media ${props => props.theme.mobile} {
    display: flex;
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    margin-left: 1.6rem;
    cursor: pointer;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  font-family: 'Spoqa-Han-Sans';
  font-weight: 700;
  margin: 5rem 5.5rem;
  position: relative;

  @media ${props => props.theme.maxdesktop} {
    color: var(--categorytext);
    font-size: 2rem;
    margin: 5rem 4rem;
  }
  @media ${props => props.theme.mobile} {
    font-size: 1.6rem;
    margin: 3rem 3.6rem;
  }

  ${Border} {
    position: absolute;
    z-index: -1;
    top: 0.8rem;
    left: 0.2rem;
    @media ${props => props.theme.maxdesktop} {
      top: 0.6rem;
      left: 0rem;
    }
    @media ${props => props.theme.mobile} {
      top: 0.55rem;
      left: 0.1rem;
    }
  }
`;

/*  전체 마진  */
const Container = styled.div`
  width: 100%;
  padding-bottom: 7.3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-family: 'Spoqa-Han-Sans';
  font-weight: 700;

  @media ${props => props.theme.maxdesktop} {
    padding-bottom: 20rem;
  }
  @media ${props => props.theme.mobile} {
    padding-bottom: 15rem;
  }
`;

/* 프로필 이미지 */

const FirstLetter = styled.div`
  color: ${props => props.theme.primary};
  font-size: 12rem;

  ${props => (props.src ? `display : none;` : ``)};

  @media ${props => props.theme.maxdesktop} {
    font-size: 11rem;
  }
  @media ${props => props.theme.mobile} {
    font-size: 10rem;
  } ;
`;

const ProfileImageContainer = styled.div`
  width: 20rem;
  height: 20rem;
  position: relative;
  margin-bottom: 3rem;
  @media ${props => props.theme.maxdesktop} {
    width: 18rem;
    height: 18rem;
  }
  @media ${props => props.theme.mobile} {
    width: 18rem;
    height: 18rem;
  }
`;

const InputContainer = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;
  background-color: var(--camera);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);

  cursor: pointer;

  @media ${props => props.theme.maxdesktop} {
    width: 5rem;
    height: 5rem;
  }
  @media ${props => props.theme.mobile} {
    width: 5rem;
    height: 5rem;
  }
`;

const PhotoInput = styled.input`
  position: absolute;
  clip: rect(0, 0, 0, 0);
`;

const CameraIcon = styled.img``;

const ProfileImage = styled.img`
  width: 20rem;
  height: 20rem;
  z-index: 11;
  border-radius: 100%;

  @media ${props => props.theme.maxdesktop} {
    width: 18rem;
    height: 18rem;
  }
  @media ${props => props.theme.mobile} {
    width: 18rem;
    height: 18rem;
  }

  background-image: url(${props => props.src});

  ${props =>
    props.src
      ? css`
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

const InfoText = styled.div`
  font-size: 1.6rem;
  font-weight: 100;
  color: ${props => props.theme.gray};
  ${props =>
    props.bottom === 'true'
      ? `
        margin-left : 14.4rem;
        margin-top: -3.5rem;
        `
      : ``};
  @media ${props => props.theme.maxdesktop} {
    font-size: 1.4rem;
    ${props =>
      props.bottom === 'true'
        ? `
        margin-left : 12.5rem;
        margin-top: -2rem;
        `
        : ``};
  }
  @media ${props => props.theme.mobile} {
    font-size: 1.2rem;
    ${props =>
      props.bottom === 'true'
        ? `
        margin-left : 9.5rem;
        margin-top: -5.5rem;
        `
        : ``};
  }
`;

/* 정보 입력 컨테이너 */

//전체 컨테이너(마진설정)
const InfoContainer = styled.div`
  margin-top: 8rem;
  margin-bottom: 18.4rem;
  @media ${props => props.theme.maxdesktop} {
    margin-bottom: 12.4rem;
  }
  @media ${props => props.theme.mobile} {
    margin-bottom: 12.1rem;
  }
`;

//한줄씩 묶음
const InfoWrapper = styled.div`
  display: flex;
  margin-bottom: 5.5rem;
  align-items: center;
  @media ${props => props.theme.maxdesktop} {
    margin-bottom: 4rem;
  }
  @media ${props => props.theme.mobile} {
    margin-bottom: 6.8rem;
  }
`;
//왼쪽 타이틀
const Text = styled.div`
  font-size: 2rem;
  color: var(--categorytext);
  @media ${props => props.theme.maxdesktop} {
    font-size: 1.8rem;
  }
  @media ${props => props.theme.mobile} {
    font-size: 1.6rem;
  }
`;
//이름 입력
const NameInput = styled.input`
  width: 40rem;
  height: 5rem;
  background-color: var(--setting);
  border: none;
  outline: none;
  border-radius: 1rem;
  padding-left: 2rem;
  margin-left: 10.7rem;
  font-size: 1.6rem;
  color: var(--inputTxt);
  font-family: 'Spoqa-Han-Sans';
  font-weight: 700;

  @media ${props => props.theme.maxdesktop} {
    width: 29.6rem;
    height: 3.6rem;
    margin-left: 9.2rem;
  }
  @media ${props => props.theme.mobile} {
    width: 20rem;
    height: 4rem;
    margin-left: 6.6rem;
  }
`;

//직군 선택
const ChooseJob = styled.div`
  margin-left: 10.7rem;
  font-size: 1.6rem;
  color: var(--settingtxt);
  position: relative;
  @media ${props => props.theme.maxdesktop} {
    margin-left: 9.2rem;
  }
  @media ${props => props.theme.mobile} {
    margin-left: 6.6rem;
  }
`;

const PolygonBtn = styled.img`
  width: 1.4rem;
  height: 1rem;
  cursor: pointer;
  margin-bottom: 0.2rem;
  transform: ${props => (props.show ? 'rotate(180deg)' : 'none')};
`;

//관심사 선택
const ChooseInterst = styled.div`
  margin-left: 5rem;
  margin-top: 0.1rem;
  display: flex;
  align-items: center;
  position: relative;
  @media ${props => props.theme.maxdesktop} {
    margin-left: 4rem;
  }
  @media ${props => props.theme.mobile} {
    margin-left: 2rem;
  }
`;

/* 하단 버튼 */
const ButtonContainer = styled.div`
  display: flex;
`;
const Button = styled.button`
  width: 30rem;
  height: 6rem;
  margin: 0 2.5rem;
  border-radius: 3rem;
  border: none;
  outline: none;
  background-color: ${props => props.bgColor};
  cursor: pointer;

  text-align: center;
  color: ${props => props.theme.darkGray};
  font-weight: 700;
  font-family: 'Spoqa-Han-Sans';
  font-size: 1.6rem;

  @media ${props => props.theme.maxdesktop} {
    width: 20rem;
    height: 5rem;
    margin: 0 1.5rem;
  }
  @media ${props => props.theme.mobile} {
    width: 14.2rem;
    height: 3.2rem;
    margin: 0 0.75rem;
  }
`;

function Setting() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const { userInfo, loading, settingKeywords } = useSelector(
    ({ user, loading }) => ({
      userInfo: user.userInfo,
      settingKeywords: user.settingKeywords,
      loading: loading['user/GET_PROFILE'],
    }),
  );
  //바인딩
  const [nameInput, SetNameInput] = useState(userInfo && userInfo.username);
  const [profileImageInput, SetProfileImageInput] = useState(
    userInfo && userInfo.profileImageUrl,
  );
  const [profileImageFileInput, SetProfileImageFileInput] = useState(
    userInfo && userInfo.profileImageUrl,
  );
  const [jobInput, SetJobInput] = useState(userInfo && userInfo.Job.name);
  const [keywordsInput, SetKeywordsInput] = useState(
    userInfo ? settingKeywords : [],
  );
  const InputFlag = useRef(0);
  const UpdateProfile = evt => {
    evt.preventDefault();
    const newProfileData = new FormData();
    const name = evt.target.name.value
      ? evt.target.name.value
      : userInfo.username;
    const file = evt.target.newProfileImageFile.files[0]
      ? evt.target.newProfileImageFile.files[0]
      : null;
    const job = jobInput ? jobInput : userInfo.Job.name;
    const keywords = keywordsInput.length ? keywordsInput : settingKeywords;

    console.log('newName', name);
    console.log('imageFile', file);
    console.log('newJobName', job);
    console.log('newKeywordNames', keywords);

    newProfileData.append('newName', name);
    newProfileData.append('imageFile', file);
    newProfileData.append('newJobName', job);
    for (var i in keywords) {
      newProfileData.append('newKeywordNames', keywords[i]);
    }
    /*     for (var key of newProfileData.entries()) {
      console.log(key[0] + ', ' + key[1]);
    } */
    dispatch(updateProfile(newProfileData));
  };

  const onChangeName = e => {
    SetNameInput(e.target.value);
  };

  const onChangeProfileImage = evt => {
    console.log(evt.target.files[0]);
    if (evt.target.files.length) {
      var imgTarget = evt.target.files[0];
      var fileReader = new FileReader();
      fileReader.readAsDataURL(imgTarget);
      fileReader.onload = function (e) {
        SetProfileImageInput(e.target.result);
        //setImgSrc(e.target.result);
      };
    } else {
      SetProfileImageInput(userInfo.profileImageUrl);
      //setImgSrc("/images/default.gif");
    }

    /*     let reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]); // 파일 읽어 버퍼 저장
      SetProfileImageFileInput(e.target.files[0]); // 파일 상태 업데이트
    }

    //읽기 완료시 아래코드가 실행
    reader.onloadend = () => {
      const profileImg = reader.result;
      if (profileImg) {
        SetProfileImageInput(profileImg.toString());
      }
    }; */
  };

  const onChangeJob = job => {
    SetJobInput(job);
    setShowJobModalState(false);
  };

  const onChangeKeywords = keywords => {
    SetKeywordsInput(keywords);
    console.log(keywordsInput);
  };

  //폴리건 버튼 모달 체크용
  const [showJobModalState, setShowJobModalState] = useState(false);
  const [showInterestModalState, setInterestJobModalState] = useState(false);

  const onClickJobBtn = () => {
    setShowJobModalState(prev => !prev);
    setInterestJobModalState(false);
  };
  const onClickInterstBtn = () => {
    setInterestJobModalState(prev => !prev);
    setShowJobModalState(false);
  };

  return (
    <form onSubmit={UpdateProfile}>
      <TitleContainer>
        <BackBtn
          onClick={() => {
            window.history.back();
            window.history.back();
          }}
        />
        <Title>
          <Border />
          계정 관리
        </Title>
      </TitleContainer>
      {!loading ? (
        <>
          <Container>
            <ProfileImageContainer>
              <ProfileImage
                src={
                  profileImageInput
                    ? profileImageInput
                    : userInfo.profileImageUrl
                }
              >
                {/* <FirstLetter>{nameInput && nameInput.substr(0, 1)}</FirstLetter> */}
              </ProfileImage>
              <InputContainer for="upload">
                <CameraIcon src={camera} />
                <PhotoInput
                  type="file"
                  id="upload"
                  name="newProfileImageFile"
                  onChange={onChangeProfileImage}
                  ref={inputRef}
                />
              </InputContainer>
            </ProfileImageContainer>

            <InfoText>300X300 이상의 이미지 사용을 권장합니다</InfoText>

            <InfoContainer>
              <InfoWrapper>
                <Text>이름</Text>
                <NameInput
                  name="name"
                  type="text"
                  value={nameInput ? nameInput : userInfo.username}
                  onChange={onChangeName}
                ></NameInput>
              </InfoWrapper>

              <InfoWrapper>
                <Text>직군</Text>
                <ChooseJob
                  name="job"
                  text={jobInput ? jobInput : userInfo.Job.name}
                >
                  {jobInput ? jobInput : userInfo.Job.name}
                  {/* {jobInput ? jobInput : userInfo.Job.name} */}
                  <PolygonBtn
                    src={polygon}
                    show={showJobModalState}
                    onClick={onClickJobBtn}
                    style={{ marginLeft: '1rem' }}
                  />
                  <JobModal show={showJobModalState} jobfunc={onChangeJob} />
                </ChooseJob>
              </InfoWrapper>

              <InfoWrapper>
                <Text>관심 키워드</Text>
                <ChooseInterst name="keywords">
                  {(keywordsInput.length ? keywordsInput : settingKeywords).map(
                    (tag, i) => (
                      <InterestComponent
                        key={'interest-' + i}
                        text={tag}
                        disabled
                      />
                    ),
                  )}
                  <PolygonBtn
                    src={polygon}
                    show={showInterestModalState}
                    onClick={onClickInterstBtn}
                  />
                  <InterestModal
                    show={showInterestModalState}
                    keywordsfunc={onChangeKeywords}
                  />
                </ChooseInterst>
              </InfoWrapper>
              <InfoText bottom="true">
                최대 3개의 관심사 선택이 가능합니다.
              </InfoText>
            </InfoContainer>

            <ButtonContainer>
              <Button bgColor="#F3F3F3">취소</Button>
              <Button type="submit" bgColor="#2CFF2C">
                저장
              </Button>
            </ButtonContainer>
          </Container>
        </>
      ) : (
        <Loading></Loading>
      )}
    </form>
  );
}
export default React.memo(Setting);
