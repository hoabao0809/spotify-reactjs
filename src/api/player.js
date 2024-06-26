import axiosClient from './axiosClient';

const playerApi = {
  getCurrentPlayingTrack: () => {
    const uri = `me/player/currently-playing`;
    return axiosClient.get(uri);
  },
  getTrack: (id) => {
    const uri = `tracks/${id}`;
    return axiosClient.get(uri);
  },
};

export default playerApi;
