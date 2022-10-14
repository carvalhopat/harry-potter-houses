import axios from 'axios';

const isProd = process.env.NODE_ENV === 'production';

const api = axios.create({
  baseURL: isProd ? 'https://harry-potter-houses.vercel.app' : 'http://localhost:3000',
  timeout: 15000
});

export default api;
