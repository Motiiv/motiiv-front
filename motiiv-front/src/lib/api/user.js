import client from './_client';

const getUserProfile = async () => {
  try {
    const { data } = await client.get(`/users/profile`);
    console.log('[SUCCESS] getProfile', data);
    return data;
  } catch (err) {
    console.log('[FAIL] getProfile', err);
    console.log(err.data);
  }
};
const IWantCookies = async () => {
  try {
    const data = await client.post(
      `/users/login`,
      {
        snsId: '1',
        socialType: 'kakao',
      },
      { withCredentials: 'include' },
    );
    console.log('[SUCCESS] IWantCookies', data);
    //console.log(data.headers);
    return data.data;
  } catch (err) {
    console.log('[FAIL] IWantCookies', err);
  }
};

export { getUserProfile, IWantCookies };
