import { default as _axios } from 'axios';

export const axios = _axios.create({
  // baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const axiosAuth = _axios.create({
  // baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});
