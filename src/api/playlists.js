import axiosClient from './axiosClient';

const playlistsApi = {
  getUserPlaylists: () => {
    const uri = `me/playlists`;
    return axiosClient.get(uri);
  },
  getPlaylist: (idPlaylist) => {
    const uri = `playlists/${idPlaylist}`;
    return axiosClient.get(uri);
  },
};

export default playlistsApi;
