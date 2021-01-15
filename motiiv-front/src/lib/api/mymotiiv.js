import client from './_client';

const getMyVideos = async () => {
  try {
    const { data } = await client.get(`/videos/myMotiiv`);
    console.log('[SUCCESS] getMyVideos', data);
    return data;
  } catch (err) {
    console.log('[FAIL] getMyVideos', err);
    throw err;
  }
};


const getMyWorkspaces = async () => {
  try {
    const { data } = await client.get(`/workspaces/`);
    console.log('[SUCCESS] getMyWorkspaces', data);
    return data;
  } catch (e) {
    console.log('[FAIL] getMyWorkspaces', e);
    throw e;
  }
};

const deleteMyeWorkSpace = async id => {
  try {
    const { data } = await client.delete(`/workspaces/${id}`);
    console.log('[SUCCESS] deleteWorkSpace', data);
    return data;
  } catch (e) {
    console.log('[FAIL] deleteWorkSpace', e);
    throw e;
  }
};

const createMyeWorkSpace = async spaceContent => {
  try {
    const { data } = await client.post(`/workspaces`, spaceContent);
    console.log('[SUCCESS] createMyeWorkSpace', data);
    return data;
  } catch (e) {
    console.log('[FAIL] createMyeWorkSpace', e);
    throw e;
  }
};

const updateMyeWorkSpace = async ({ id, spaceContent }) => {
  const payload = { newName: spaceContent.name, newUrl: spaceContent.url };
  try {
    const { data } = await client.put(`/workspaces/${id}`, payload);
    console.log('[SUCCESS] updateMyeWorkSpace', data);
    return data;
  } catch (e) {
    console.log('[FAIL] updateMyeWorkSpace', e);
    throw e;
  }
};

export {
  getMyWorkspaces,
  deleteMyeWorkSpace,
  createMyeWorkSpace,
  updateMyeWorkSpace,
  getMyVideos,
};
