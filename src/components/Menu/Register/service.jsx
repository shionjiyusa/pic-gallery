import myAxios from 'utils/myAxios';

async function register(email, password) {
  try {
    const res = await myAxios.post('api/users', { email, password });
    if (res.status === 200) {
      return true;
    }
    return false;
  } catch (err) {
    switch (err.response.status) {
      case 409:
        return '用户已经被占用';
      case 422:
        return '邮箱格式不正确';
      default:
        return '网络错误';
    }
  }
}

export default register;
