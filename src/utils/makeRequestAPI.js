import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

const makeRequestAPI = axios.create({
  baseURL: baseUrl,
  // headers: {
  //   Authorization: "bearer " + process.env.REACT_APP_API_TOKEN, //Some synonyms for word bearer in English are holder, or carrier.
  // },
});

export default makeRequestAPI;
