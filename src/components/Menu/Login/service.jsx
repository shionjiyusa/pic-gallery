import myAxios from 'utils/myAxios';

async function login(email, password) {
  try {
    const res = await myAxios.post('api/users/login', { email, password });
    localStorage.setItem('token', res.data.token);
    return true;
  } catch (err) {
    return false;
  }
}

export default login;
