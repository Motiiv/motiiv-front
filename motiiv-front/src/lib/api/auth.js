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

export { getInfoNaver };
