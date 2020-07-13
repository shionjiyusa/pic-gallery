import axios from 'axios';
import cookie from 'react-cookies';
import baseUrl from '../../base-url';

const token = cookie.load('userToken');
const myAxios = axios.create({
  baseURL: baseUrl,
  timeout: 1000000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: `Bearer ${token}`,
  },
});

export default myAxios;
