import instance from './axiosInstance';

const Api = {
  // [shared]
  getSharedData: () => instance.get('/api/sample/folder'),

  // [user]
  getUserProfile: () => instance.get('/api/sample/user'),
  getUserData: () => instance.get('/api/users/1'),

  // [folder]
  getFolderList: () => instance.get(`/api/users/1/folders`),
  getTargetFolder: (currentId) => {
    const param = currentId !== undefined ? `?folderId=${currentId}` : '';
    return instance.get(`/api/users/1/links${param}`);
  },

  // [auth]
  signin: (email, password) => instance.post('/api/sign-in', { email, password }),
  signup: (email, password) => instance.post('/api/sign-up', { email, password }),
  emailCheck: (email) => instance.post('/api/check-email', { email }),
};

export default Api;
