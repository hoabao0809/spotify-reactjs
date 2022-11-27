import axiosClient from './axiosClient';

const artistApi = {
  getArtistTopTracks: (id) => {
    const uri = `artists/${id}/top-tracks?market=VN`;
    return axiosClient.get(uri);
  },
};

export default artistApi;
