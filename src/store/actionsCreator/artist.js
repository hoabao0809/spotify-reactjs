import { artistApi } from '~/api';
import { addArtistInfos } from '~/store/reducers/artist';

export const fetchFullDetailArtist = (id) => {
  return async (dispatch) => {
    const artist = await artistApi.getArtist(id);
    const albums = await artistApi.getArtistAlbums(id);
    const relatedArtists = await artistApi.getArtistRelatedArtists(id);
    const topTracks = await artistApi.getArtistTopTracks(id);

    if (!artist || !albums || !relatedArtists || !topTracks) return;

    dispatch(
      addArtistInfos({
        artist,
        albums,
        relatedArtists: relatedArtists.artists,
        topTracks: topTracks.tracks,
      })
    );
  };
};
