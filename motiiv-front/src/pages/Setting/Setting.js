import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import profile from '../../assets/profile/sampleImage.png';
import camera from '../../assets/profile/ic_camera.png';
import polygon from '../../assets/profile/ic_polygon.png'
import JobModal from './JobModal'
import InterestModal from './InterestModal'
import InterestComponent from './InterstComponent'

/* 타이틀 */
const Border = styled.div`
    background-color: #2CFF2C;
    width: 11.4rem;
    height:1.3rem;
`

const Title = styled.div`
    font-size : 3rem;
    font-family:'Spoqa-Han-Sans';
    font-weight: 700;
    margin : 5rem 5.5rem;
    position:relative;

    ${Border}{
        position:absolute;
        z-index:-1;
        top:1rem;
        left: 0.2rem;
    }
`


/*  전체 마진  */
const Container = styled.div`
    width:100%;
    padding-bottom : 7.5rem;

    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;

    font-family:'Spoqa-Han-Sans';
    font-weight:700;
`

/* 프로필 이미지 */
const ProfileImageContainer = styled.div`
    width:20rem;
    height:20rem;
    position:relative;
    margin-bottom: 3rem;
`

const InputContainer = styled.label`
    position:absolute;
    bottom:0;
    right:0;

    width:5rem;
    height:5rem;

    display:flex;
    justify-content:center;
    align-items:center;

    border-radius: 100%;
    background-color:white;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);

    cursor: pointer;
`

const PhotoInput = styled.input`
    position: absolute;
    clip:rect(0,0,0,0);
`

const CameraIcon = styled.img`
`

const ProfileImage = styled.img`
  width: 20rem;
  height: 20rem;
  z-index: 11;
  border-radius: 100%;
`

/* 정보 입력 컨테이너 */

//전체 컨테이너(마진설정)
const InfoContainer = styled.div`
    margin-top:8rem;
    margin-bottom:17rem;
`

//한줄씩 묶음
const InfoWrapper = styled.div`
    display:flex;
    margin-bottom:5.5rem;
    align-items: center;
`
//왼쪽 타이틀
const Text = styled.div`
    font-size:2rem;
`
//이름 입력
const NameInput = styled.input`
    width: 40rem;
    height: 5rem;
    background-color: #F3F3F3;
    border: none;
    outline:none;
    border-radius: 1rem;
    padding-left : 2rem;
    margin-left: 10.7rem;

    font-size: 1.6rem;
    color:#4E4E4E;
    font-family:'Spoqa-Han-Sans';
    font-weight:700;
`

//직군 선택
const ChooseJob = styled.div`
    margin-left: 10.7rem;
    font-size: 1.6rem;
    color:#4E4E4E;
    position:relative;
`

const PolygonBtn = styled.img`
    width:1.4rem;
    height:1rem;
    cursor:pointer;
    margin-bottom:0.2rem;
    transform:${props => props.show ? 'rotate(180deg)' : 'none'};
`

//관심사 선택
const ChooseInterst = styled.div`
    margin-left: 4.7rem;
    margin-top: 0.1rem;
    display:flex;
    align-items:center;
    position:relative;
`

/* 하단 버튼 */
const ButtonContainer = styled.div`
    display: flex;
`
const Button = styled.button`
    width: 30rem;
    height: 6rem;
    margin : 0 2.5rem;
    border-radius: 3rem;
    border: none;
    outline: none;
    background-color : ${props => props.bgColor};
    cursor:pointer;

    text-align:center;
    color: #4E4E4E;
    font-weight: 700;
    font-family: 'Spoqa-Han-Sans';
    font-size: 1.6rem;
`

function Setting() {

    //폴리건 버튼 모달 체크용
    const [showJobModalState, setShowJobModalState] = useState(false);
    const [showInterestModalState, setInterestJobModalState] = useState(false);

    const onClickJobBtn = () => {
        (async () => {
          try {
            setShowJobModalState(prev => !prev);
            setInterestJobModalState(false);
          } catch (e) {
            
          }
        })();
    }

    const onClickInterstBtn = () => {
        (async () => {
          try {
            setInterestJobModalState(prev => !prev);
            setShowJobModalState(false);
          } catch (e) {
            
          }
        })();
    }

    return (
        <>
            <Title><Border/>계정 관리</Title>

            <Container>
                <ProfileImageContainer>
                    <ProfileImage src = {profile}/>
                        <InputContainer for="upload">
                            <CameraIcon src = {camera}/>
                            <PhotoInput type="file" id="upload"/>
                        </InputContainer>
                </ProfileImageContainer>

                <div style={{fontSize : "1.6rem", color:"#A7A7A7", fontWeight:"100"}}>
                    300X300 이상의 이미지 사용을 권장합니다
                </div>

                <InfoContainer>
                    <InfoWrapper>
                        <Text>이름</Text>
                        <NameInput/>
                    </InfoWrapper>

                    <InfoWrapper>
                        <Text>직군</Text>
                        <ChooseJob>디자인
                            <PolygonBtn src = {polygon}
                                        show={showJobModalState}
                                        onClick={onClickJobBtn}
                                        style={{marginLeft:"1rem"}}
                            />
                            <JobModal show={showJobModalState}/>
                        </ChooseJob>
                    </InfoWrapper>

                    <InfoWrapper>
                        <Text>관심 키워드</Text>
                        <ChooseInterst>
                            <InterestComponent text={"키워드"} disabled></InterestComponent>
                            <InterestComponent text={"키워드"} disabled>키워드</InterestComponent>
                            <InterestComponent text={"키워드"} disabled>키워드</InterestComponent>
                            <PolygonBtn src = {polygon}
                                        show={showInterestModalState} 
                                        onClick={onClickInterstBtn}
                            />
                            <InterestModal show={showInterestModalState}/>
                        </ChooseInterst>
                    </InfoWrapper>
                </InfoContainer>

                <ButtonContainer>
                    <Button bgColor="#F3F3F3">취소</Button>
                    <Button bgColor="#2CFF2C">저장</Button>
                </ButtonContainer>
            </Container>
        </>
    )
}
export default Setting
