// src/app/api.ts

import axios from 'axios';
import config from './config';

const apiClient = axios.create({
  baseURL: config.BACKEND_URL
});

export const getPokemon = async () => {
  const response = await apiClient.get('/pokemon/1');
  return response.data;
};
