import axios from 'axios';
import client from './_client';

const getUserProfile = async () => {
  try {
    const { data } = await client.get(`/users/profile`);
    console.log('[SUCCESS] getProfile', data);
    return data;
  } catch (err) {
    console.log('[FAIL] getProfile', err);
  }
};

const updateUserProfile = async ({ user }) => {
  const payload = {
    newName: user.newName,
    imageFile: user.imageFile,
    newJobName: user.newJobName,
    newKeywordNames: user.newKeywordNames,
  };
  try {
    const { data } = await client.put(`/users`, payload);
    console.log('[SUCCESS] updateUserProfile', data);
    return data;
  } catch (e) {
    console.log('[FAIL] updateUserProfile', e);
    throw e;
  }
};

const createUser = async user => {
  try {
    console.log(user);
    const { data } = await client.post(`/users/signup`, user);
    console.log('[SUCCESS] createUser', data);
    return data;
  } catch (e) {
    console.log('[FAIL] createUser', e);
    throw e;
  }
};

const login = async user => {
  try {
    const { data } = await client.post(`/users/login`, user);
    console.log('[SUCCESS] login', data);
    if (data.data.isSignedUp === true) {
      // api 토큰 바꿔치기
      client.defaults.headers.userToken = data.data.userToken;
      localStorage.setItem('userToken', JSON.stringify(data.data.userToken));
    }
    return data;
  } catch (e) {
    console.log('[FAIL] login', e);
    throw e;
  }
};

/* const IWantCookies = async () => {
  try {
    const data = await client.post(
      `/users/login`,
      {
        snsId: '1',
        socialType: 'kakao',
      },
      { withCredentials: true },
    );
    console.log('[SUCCESS] IWantCookies', data);
    return data.data;
  } catch (err) {
    console.log('[FAIL] IWantCookies', err);
  }
}; */

export {
  getUserProfile,
  updateUserProfile,
  createUser,
  login,
  /* IWantCookies  */
};
