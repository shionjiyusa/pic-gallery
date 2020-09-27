export default function checkLoginStatus() {
  const token = localStorage.getItem('token') || '';
  if (token === '') {
    return false;
  }

  let userInfo64 = token.split('.')[1] || '';
  if (userInfo64 === '') {
    return false;
  }

  userInfo64 = userInfo64.replace(/(-|_)/g, '');
  // 解决中文乱码
  const userInfo = JSON.parse(decodeURIComponent(atob(userInfo64)));

  if (userInfo.exp && userInfo.exp < Math.floor(Date.now() / 1000)) {
    localStorage.setItem('token', '');
    return false;
  }
  return userInfo;
}
