import myAxios from 'utils/myAxios';

function getPicture(pid) {
  return myAxios(`/api/pictures/${pid}`);
}

function getTags(pid) {
  return myAxios(`/api/tags/picture/${pid}`);
}

export { getPicture, getTags };
