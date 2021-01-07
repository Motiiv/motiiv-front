import client from './_client';

const getSwiperVideo = async (aid, noteContent) => {
  try {
    const { data } = await client.post(`/note/${aid}`, noteContent);
    console.log('[SUCCESS] createNote', data);
    return data;
  } catch (e) {
    console.log('[FAIL] createNote', e);
    throw e;
  }
};

const updateNoteApi = async (aid, noteContent) => {
  try {
    const { data } = await client.put(`/note/${aid}`, noteContent);
    console.log('[SUCCESS] updateNote', data);
    return data;
  } catch (e) {
    console.log('[FAIL] updateNote', e);
    throw e;
  }
};

export { createNoteApi, updateNoteApi };
