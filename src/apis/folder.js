import instance from './axiosInstance';

export const getFolders = async () => {
  const res = await instance.get('/folders');
  return res.data;
};

export const getFolder = async (folderId) => {
  const res = await instance.get(`/folders/${folderId}`);
  return res.data[0];
};

export const createFolder = async (name) => {
  const res = await instance.post('/folders', name);
  return res.data;
};

export const editFolder = async (newFolder) => {
  const { folderId } = newFolder;
  const { name } = newFolder;
  const res = await instance.put(`/folders/${folderId}`, name);
  return res.data;
};

export const deleteFolder = async (folderId) => {
  const res = await instance.delete(`/folders/${folderId}`);
  return res;
};

export const getUserFolders = async (userId) => {
  const res = await instance.get(`/users/${userId}/folders`);
  return res;
};
