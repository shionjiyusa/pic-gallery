import myAxios from 'utils/myAxios';

function getPicture(pid) {
  return myAxios(`/api/picture/${pid}`);
}

export default getPicture;
