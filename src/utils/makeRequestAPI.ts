import axios from "axios";
import baseUrl from "./baseUrl";

// Create an Axios instance with the base URL/ common settings fixes all call/configurations
const makeRequestAPI = axios.create({
  baseURL: baseUrl,
  // headers: {
  //   Authorization: "bearer " + process.env.REACT_APP_API_TOKEN, //Some synonyms for word bearer in English are holder, or carrier.
  // },
});

export default makeRequestAPI;


// makeRequestAPI.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );
// makeRequestAPI.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       console.log("Unauthorized - redirect to login");
//     }
//     return Promise.reject(error);
//   }
// );
