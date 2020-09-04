import myAxios from 'utils/myAxios';

function getPicture(pid) {
  return myAxios(`/api/pictures/${pid}`);
}

export default getPicture;
