// // import axios from 'axios';

// // const axiosClient = axios.create({
// //   baseURL: 'https://api.spotify.com/v1/',
// // });

// export const Spotify = {
//   authOptions: {
//     url: 'https://accounts.spotify.com/api/token',
//     headers: {
//       Authorization:
//         'Basic ' +
//         new Buffer(
//           process.env.SPOTIFY_CLIENT_ID +
//             ':' +
//             process.env.SPOTIFY_CLIENT_SECRET
//         ).toString('base64'),
//     },
//     form: {
//       grant_type: 'client_credentials',
//     },
//     json: true,
//   },
//   getAccessToken: async function () {
//     let accessToken;
//     const response = await fetch(this.authOptions.url, {
//       method: 'POST',
//       ...this.authOptions,
//     });

//     response.json().then((data) => {
//       accessToken = data;
//     });
//     return accessToken;
//   },
// };

// // axiosClient.interceptors.request
// //   .use(
// //     function (config) {
// //       // Do something before request is sent

// //       config = { ...config, ...authOptions };

// //       return config;
// //     },
// //     function (error) {
// //       // Do something with request error
// //       return Promise.reject(error);
// //     }
// //   )
// //   .then((result) => result.json())
// //   .then((data) => console.log(data.access._token));

// // // Add a response interceptor
// // axiosClient.interceptors.response.use(
// //   function (response) {
// //     // Any status code that lie within the range of 2xx cause this function to trigger
// //     // Do something with response data
// //     if (response && response.data) {
// //       console.log('data: ', response.data);
// //       return response.data;
// //     }

// //     console.log('response ', response);

// //     return response;
// //   },
// //   function (error) {
// //     // Any status codes that falls outside the range of 2xx cause this function to trigger
// //     // Do something with response error
// //     return Promise.reject(error);
// //   }
// // );

// // export default axiosClient;
