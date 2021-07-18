import { API, FAKE_STORE_API } from "./consts";
const axios = require("axios");

export const predictionClient = axios.create({
  baseURL: API,
});

export const storeClient = axios.create({
  baseURL: FAKE_STORE_API,
});
