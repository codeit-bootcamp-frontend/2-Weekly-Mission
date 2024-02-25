import instance from './axiosInstance';

export const getFilteredLinks = async (folderId) => {
  const params = folderId ? `/folders/${folderId}/links` : '/links';
  try {
    const res = await instance.get(params);
    return res.data;
  } catch (e) {
    console.error('Error Fetching Links Data', e);
    throw e;
  }
};

export const createLink = async (linkData) => {
  const res = await instance.post('/links', linkData);
  return res.data;
};

export const deleteLink = async (linkId) => {
  const res = await instance.delete(`/links/${linkId}`);
  return res.data;
};

export const getFolderLinks = async (folderId) => {
  const res = await instance.get(`/folders/${folderId}/links`);
  return res.data;
};
