import client from './_client';

const getBanners = async () => {
  try {
    const { data } = await client.get(`/users/profile`);
    console.log('[SUCCESS] getBanners', data);
    return data.data;
  } catch (err) {
    console.log('[FAIL] getBanners', err);
  }
};

export { getBanners };
