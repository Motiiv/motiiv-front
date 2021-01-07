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

export { getUserProfile };
