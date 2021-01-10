import client from './_client';


const getMyMotiiv = async () => {
  try {
    const { data } = await client.get(`/videos/myMotiiv`);
    console.log('[SUCCESS] getMyMotiiv', data);
    return data;
  } catch (err) {
    console.log('[FAIL] getMyMotiiv', err);
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

// const updateNoteApi = async (aid, noteContent) => {
//   try {
//     const { data } = await client.put(`/note/${aid}`, noteContent);
//     console.log('[SUCCESS] updateNote', data);
//     return data;
//   } catch (e) {
//     console.log('[FAIL] updateNote', e);
//     throw e;
//   }
// };

export { getMyMotiiv,getMyWorkspaces };
