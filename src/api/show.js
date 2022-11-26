import axiosClient from './axiosClient';

const showApi = {
  getShowEpisodes: (id) => {
    const uri = `shows/${id}/episodes?market=VN`;
    return axiosClient.get(uri);
  },
};

export default showApi;
