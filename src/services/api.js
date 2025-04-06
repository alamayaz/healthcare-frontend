import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api/';

const API = axios.create({
  baseURL: API_URL,
  headers: {
    'ngrok-skip-browser-warning': 'true'
  }
});

// Add token to headers
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle expired token globally
API.interceptors.response.use(
  response => response,
  error => {
    const code = error?.response?.data?.code;
    const detail = error?.response?.data?.detail;

    // Token is expired or invalid
    if (
      error?.response?.status === 401 &&
      (code === 'token_not_valid' || detail === 'Given token not valid for any token type')
    ) {
        toast.error('Session expired. Please log in again.');

        // Clear token and redirect after short delay
        setTimeout(() => {
          localStorage.removeItem('access_token');
          window.location.href = '/';
        }, 2000);
    }

    return Promise.reject(error);
  }
);

export default API;
