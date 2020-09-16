import myAxios from 'utils/myAxios';

async function uploadPicture(uploadPic, uploadThumb, limit) {
  // 发送 ajax 上传
  const forms = new FormData();
  const configs = {
    headers: { 'Content-Type': 'multipart/form-data' },
  };
  forms.append('uploadPic', uploadPic);
  forms.append('uploadThumb', uploadThumb);

  const res = await myAxios.post(`/api/pictures`, forms, configs);
  const { picture_id: pid, picture_url, thumb_url } = res.data;
  return myAxios.patch(`/api/pictures/${pid}`, { picture_url, thumb_url, limit });
}

export default uploadPicture;
