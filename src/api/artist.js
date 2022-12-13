import axiosClient from './axiosClient';

const artistApi = {
  getArtistTopTracks: (id) => {
    const uri = `artists/${id}/top-tracks?market=VN`;
    return axiosClient.get(uri);
  },
  getArtistRelatedArtists: (id) => {
    const uri = `artists/${id}/related-artists`;
    return axiosClient.get(uri);
  },
  getArtist: (id) => {
    const uri = `artists/${id}`;
    return axiosClient.get(uri);
  },
  getArtistAlbums: (id) => {
    const uri = `artists/${id}/albums?market=VN`;
    return axiosClient.get(uri);
  },
};

export default artistApi;
