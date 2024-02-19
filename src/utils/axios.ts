import { default as _axios } from 'axios';

import { API_URL } from '@/constants';

export const axios = _axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const axiosAuth = _axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
