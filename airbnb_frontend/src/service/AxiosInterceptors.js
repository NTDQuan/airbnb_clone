import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api'
});

const setAuthorizationHeader = (config) => {
    const token = localStorage.getItem('token');

    if (token && !config.url.includes('/public/')) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
};

const handleRequestError = (error) => {
    return Promise.reject(error);
};

axiosInstance.interceptors.request.use(setAuthorizationHeader, handleRequestError);

export default axiosInstance;