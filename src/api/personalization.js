import axiosClient from './axiosClient';

const personalizationApi = {
  getUserTopItems: (type, limit) => {
    const uri = limit ? `me/top/${type}?limit=${limit}` : `me/top/${type}`;
    return axiosClient.get(uri);
  },
};

export default personalizationApi;
