import axiosClient from './axiosClient';

const playlistsApi = {
  getPlaylist: () => {
    const uri = `me/playlists`;
    return axiosClient.get(uri);
  },
};

export default playlistsApi;
