import axios from 'axios'


const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params['access-token'] = process.env.REACT_APP_API_TOKEN;
    return config;
});

export default axiosInstance