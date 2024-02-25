import instance from './axiosInstance';

export const getUser = async () => {
  const res = await instance.get('/users');
  return res.data[0];
};
