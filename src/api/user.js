import axiosClient from './axiosClient';

const userApi = {
  getCurrentUserProfile: () => {
    const uri = `me`;
    return axiosClient.get(uri);
  },
};

export default userApi;
