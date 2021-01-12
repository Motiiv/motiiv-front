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
    newKeywordNames: user.newKeywordNames
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
  updateUserProfile
  /* IWantCookies  */
};
