import myAxios from 'utils/myAxios';

function getUserInfo(uid = 1) {
  return myAxios.get(`/api/users/${uid}`);
}

export default getUserInfo;
