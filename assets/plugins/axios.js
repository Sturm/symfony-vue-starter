import axios from 'axios';
import router from '../router';

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    const modifiedConfig = { ...config };

    modifiedConfig.headers = {
      ...modifiedConfig.headers,
      Authorization: `Bearer ${token}`,
    };

    return modifiedConfig;
  }
  localStorage.removeItem('token');
  // If there's no token, redirect user to the login page
  router.push('/login');

  return config;
}, (error) => {
  Promise.reject(error);
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;
    if (status === 401) {
      router.push('/login');
    }
    router.push('/login');
    return Promise.reject(error);
  },
);

export default axios;
