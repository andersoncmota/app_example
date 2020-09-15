import axios from 'axios';

export const baseURL = 'https://server.adekz.com/web/metaanderson/rest/v1/rfc';

const api = axios.create({
  baseURL,
  // timeout: 30000,
});

export default api;
