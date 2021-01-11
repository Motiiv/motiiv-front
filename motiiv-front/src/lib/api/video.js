import client from './_client';

const getCategoryKeywords = async () => {
  try {
    const { data } = await client.get(`/videos/category/keywords`);
    console.log('[SUCCESS] getCategoryKeywords', data);
    return data;
  } catch (err) {
    console.log('[FAIL] getCategoryKeywords', err);
  }
};
const getCategoryVideos = async ({ keyword, filters }) => {
  try {
    const { data } = await client.get(`/videos/category/${keyword}/${filters}`);
    console.log('[SUCCESS] getCategoryVideos', data);
    return data;
  } catch (err) {
    console.log('[FAIL] getCategoryVideos', err);
  }
};
const getDetailVideoInfo = async videoId => {
  try {
    const { data } = await client.get(`videos/${videoId}`);
    console.log('[SUCCESS] getDetailVideoInfo', data);
    return data;
  } catch (err) {
    console.log('[FAIL] getDetailVideoInfo', err);
  }
};
const getCategoryTagVideos = async tagId => {
  try {
    console.log('tagId', tagId);
    const { data } = await client.get(`/videos/category/${tagId}`);
    console.log('[SUCCESS] getCategoryTagVideos', data);
    return data;
  } catch (err) {
    console.log('[FAIL] getCategoryTagVideos', err);
  }
};
const changeLike = async videoId => {
  try {
    console.log(videoId);
    const { data } = await client.put(`/videos/like/${videoId}`);
    console.log('[SUCCESS] changeLike', data);
    return data;
  } catch (err) {
    console.log('[FAIL] changeLike', err);
  }
};
const changeSave = async videoId => {
  try {
    const { data } = await client.put(`/videos/save/${videoId}`);
    console.log('[SUCCESS] changeSave', data);
    return data;
  } catch (err) {
    console.log('[FAIL] changeSave', err);
  }
};
export {
  getCategoryKeywords,
  getCategoryVideos,
  getDetailVideoInfo,
  getCategoryTagVideos,
  changeLike,
  changeSave,
};
