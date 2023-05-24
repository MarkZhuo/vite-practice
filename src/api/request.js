import axios from 'axios';
import router from '../router';

const service = axios.create({
  baseURL: '',
  headers: {
    ContentType: 'application/json',
    Authorization: ''
  },
  timeout: 10000
});

export default service.request;
