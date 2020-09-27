import myAxios from 'utils/myAxios';

async function uploadPicture(uploadPic, uploadThumb, limit, setProgress) {
  // 发送 ajax 上传
  const forms = new FormData();
  const configs = {
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress: (e) => {
      const percentCompleted = Math.round((e.loaded * 100) / e.total);
      setProgress(percentCompleted);
    },
  };
  forms.append('uploadPic', uploadPic);
  forms.append('uploadThumb', uploadThumb);

  const res = await myAxios.post(`/api/pictures`, forms, configs);
  // eslint-disable-next-line camelcase
  const { picture_id: pid, picture_url, thumb_url } = res.data;
  return myAxios.patch(`/api/pictures/${pid}`, { picture_url, thumb_url, limit });
}

export default uploadPicture;
