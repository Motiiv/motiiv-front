import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import btnKakao from '../../assets/global/btn_kakao.png';
import { createProfile, login } from '../../modules/user';
import client from '../api/_client';
//import KaKaoLogin from "react-kakao-login";
//import axios from "axios";

const { Kakao } = window;

const LoginBtn = styled.button`
  cursor:pointer;
  outline:none;
  background:none;
  border:none;
`

function KaKao({ props, pageUp, hideModal }) {

  const dispatch = useDispatch();

  const [nameState, setNameState] = useState('');
  const [profileImageUrlState, setProfileImageUrlState] = useState('');
  const [snsIDState, setSnsidState] = useState('');
  const [socialTypeState, setSocialTypeState] = useState('kakao');
  const [userToken, setUserToken] = useState('')


  const Login = (user) => {
    console.log(user);
    dispatch(login(user));
  }

  /*
  const onCreateUser = () => {
    const user = {
      username: nameState,
      profileImageUrl: profileImageUrlState,
      snsId: snsIDState,
      socialType: socialTypeState
    };
    dispatch(createProfile({user}));
    pageUp();
  };
  */

  const onHandleLoginKaKao = () => {

    Kakao.Auth.login({
      success: (authObj) => {

        // console.log("access token: ", authObj.access_token);
        // console.log("refresh token: ", authObj.refresh_token);
        //setUserToken(authObj.access_token);

        Kakao.Auth.setAccessToken(authObj.access_token);

        Kakao.API.request({
          url: "/v2/user/me",
          success: function (response) {

            const user = {
              snsId: response.id,
              socialType: 'kakao'
            };

            //로그인 시도
            Login(user);

            setNameState(response.kakao_account.profile.nickname);
            setProfileImageUrlState(response.kakao_account.profile.profile_image_url);
            setSnsidState(response.id);

            // console.log(response.id);
            // console.log(response.kakao_account.profile.nickname);
            // console.log(response.kakao_account.profile.profile_image_url);
            // console.log(response);
          },
          fail: function (error) {
            console.log(error);
          },
        });
        //props.history.push("/auth");
      },
      fail: (err) => {
        console.log(err);
      },
    });
  };

  return (
    <LoginBtn style={{ marginBottom: "1.6rem" }} value="KaKao" onClick={onHandleLoginKaKao}><img src={btnKakao} /></LoginBtn>
  );
}
export default KaKao;