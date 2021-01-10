import client from './_client';

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

export { getMyWorkspaces, deleteMyeWorkSpace };
