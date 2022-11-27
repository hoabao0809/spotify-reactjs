import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});

axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      let parsedToken = JSON.parse(accessToken).access_token;
      config.headers['Authorization'] = `Bearer ${parsedToken}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
