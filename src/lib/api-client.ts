import { useNotifications } from '@/components/ui/notifications/notifications-store';
import Axios, { InternalAxiosRequestConfig } from 'axios';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = 'application/json';
  }

  config.withCredentials = true;
  return config;
}

export const api = Axios.create();

// api.interceptors.request.use(authRequestInterceptor);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message;

    // Add notification

    useNotifications.getState().addNotification({
      type: 'error',
      title: 'Error',
      message,
    });
    // Add 401

    return Promise.reject(error);
  },
);
