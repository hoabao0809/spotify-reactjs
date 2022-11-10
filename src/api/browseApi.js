import axiosClient from './axiosClient';

const browseApi = {
  getNewReleases: (countryCode, limit) => {
    const uri = `browse/new-releases?country=${countryCode}&limit=${limit}`;
    return axiosClient.get(uri);
  },
  getCategories: (countryCode, limit) => {
    const uri = `browse/categories?country=${countryCode}&limit=${limit}`;
    return axiosClient.get(uri);
  },
};

export default browseApi;

