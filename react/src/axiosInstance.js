/* global window */
import axios from 'axios';
import { notification } from 'antd';

// init axios
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 60 * 1000,
  // headers: { Authorization: TOKEN },
});

axiosInstance.interceptors.response.use(config => config, (error) => {
  if (error.response && error.response.data.errors && error.response.data.errors[0]) {
    notification.error({
      message: error.response.data.errors[0].errorType,
      description: error.response.data.errors[0].message,
    });
  }
  return Promise.reject(error);
});

window.axiosInstance = axiosInstance;
// done
