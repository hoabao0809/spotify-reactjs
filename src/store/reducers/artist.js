const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  artist: null,
  albums: null,
  relatedArtists: null,
  topTracks: null,
};

const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    addArtistInfos: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const selectArtist = (state) => state.artist;
export const { addArtistInfos } = artistSlice.actions;

export default artistSlice.reducer;
