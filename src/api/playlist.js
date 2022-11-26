import axiosClient from './axiosClient';

const playlistsApi = {
  getUserPlaylists: () => {
    const uri = `me/playlists`;
    return axiosClient.get(uri);
  },
  getPlaylist: (playlist_id) => {
    const uri = `playlists/${playlist_id}`;
    return axiosClient.get(uri);
  },
  getPlaylistItems: (playlist_id) => {
    const uri = `playlists/${playlist_id}/tracks`;
    return axiosClient.get(uri);
  },
};

export default playlistsApi;
