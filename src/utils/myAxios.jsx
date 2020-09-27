import axios from 'axios';
import baseUrl from '../../base-url';

const token = localStorage.getItem('token') || '';

const headers = {
  'X-Requested-With': 'XMLHttpRequest',
  Authorization: token === '' ? '' : `Bearer ${token}`,
};

const myAxios = axios.create({
  baseURL: baseUrl,
  timeout: 1000000,
  headers,
});

// myAxios.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     console.log(err);
//   }
// );

export default myAxios;
