import myAxios from 'utils/myAxios';

function updateProfile(uid, newUserInfo) {
  return myAxios.patch(`/api/users/${uid}`, newUserInfo);
}

export default updateProfile;
