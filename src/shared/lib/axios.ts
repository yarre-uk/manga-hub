import { default as _axios } from 'axios';

const BASE_URL = 'https://localhost:7142';

export const axios = _axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const axiosAuth = _axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});
