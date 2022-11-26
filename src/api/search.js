import axiosClient from './axiosClient';

const searchApi = {
  getSearch: (q, type, market, limit) => {
    const uri = limit
      ? `search?q=${q}&type=${type}&market=${market}&limit=${limit}`
      : `search?q=${q}&type=${type}&market=${market}`;
    return axiosClient.get(uri);
  },
};

// type: album%2Cartist%2Cplaylist%2Ctrack%2Cshow%2Cepisode%2Caudiobook

export default searchApi;
