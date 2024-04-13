import {api} from './instance'

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${useCookie('token')}`
  return config;
});

export default api;