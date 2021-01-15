import client from './_client';

const getInfoNaver = async () => {
  try {
    const { data } = await client.post(`/users/naver`);
    console.log('[SUCCESS] getInfoNaver', data);
    return data;
  } catch (err) {
    console.log('[FAIL] getInfoNaver', err);
  }
};

const authToken = async token => {
  try {
    const { data } = await client.post(`/users/token`, null, {
      headers: { userToken: token },
    });
    console.log('[SUCCESS] authToken', data);
    client.defaults.headers.userToken = token;
    return data;
  } catch (err) {
    console.log('[FAIL] authToken', err);
  }
};
export { getInfoNaver, authToken };
