import myAxios from 'utils/myAxios';

function uploadAvatar(uid, avatar) {
  const form = new FormData();
  form.append('newAvatar', avatar);
  const configs = {
    headers: { 'Content-Type': 'multipart/form-data' },
  };

  return myAxios.post(`/api/users/${uid}/avatar`, form, configs);
}

export default uploadAvatar;
