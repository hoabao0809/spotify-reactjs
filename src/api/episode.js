import axiosClient from './axiosClient';

const episodeApi = {
  getEpisodes: (id) => {
    const uri = `episodes/${id}?market=VN`;
    return axiosClient.get(uri);
  },
};

export default episodeApi;
