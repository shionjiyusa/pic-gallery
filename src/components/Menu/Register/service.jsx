import myAxios from 'utils/myAxios';

async function register(email, password) {
  try {
    await myAxios.post('api/users', { email, password });
    return true;
  } catch (err) {
    return false;
  }
}

export default register;
