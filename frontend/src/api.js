// frontend/src/api.js
import axios from 'axios';

// Base API configuration
const api = axios.create({
  //baseURL: '/api', Relative URL, Vite proxy will route this to Django if mentioned in vite.config.js
  baseURL: 'http://localhost:8000/api',
});

// Example API call to get a message from Django
export const getHelloMessage = async () => {
  const response = await api.get('/hello/');
  return response.data;
};
