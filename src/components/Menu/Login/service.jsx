import myAxios from 'utils/myAxios';

async function login(email, password) {
  try {
    const res = await myAxios.post('api/users/login', { email, password });
    if (res.status === 200) {
      localStorage.setItem('token', res.data.token);
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
}

export default login;
