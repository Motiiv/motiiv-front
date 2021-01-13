import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import btnKakao from '../../assets/global/btn_kakao.png';
import { createProfile, login } from '../../modules/user';
//import KaKaoLogin from "react-kakao-login";
//import axios from "axios";

const { Kakao } = window;

const LoginBtn = styled.button`
  cursor:pointer;
  outline:none;
  background:none;
  border:none;
`

function KaKao({ props, pageUp }) {

  const dispatch = useDispatch();

  const Login = (user) => {
    dispatch(login(user));
  }


  const onHandleLoginKaKao = () => {

    Kakao.Auth.login({
      success: (authObj) => {
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

            //로그인 정보 없을 시 회원가입으로 이동
            const signin = {
              username: response.kakao_account.profile.nickname,
              profileImageUrl: response.kakao_account.profile.profile_image_url,
              snsId: response.id,
              socialType: 'kakao'
            }


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