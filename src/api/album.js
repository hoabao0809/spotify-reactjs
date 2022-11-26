import axiosClient from './axiosClient';

const albumApi = {
  getAlbumTracks: (id) => {
    const uri = `albums/${id}/tracks`;
    return axiosClient.get(uri);
  },
};

export default albumApi;
