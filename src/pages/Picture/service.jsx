import myAxios from 'utils/myAxios';

function getPicture(pid, limit) {
  return limit ? myAxios(`/api/pictures/${pid}/limit`) : myAxios(`/api/pictures/${pid}`);
}

function getTags(pid) {
  return myAxios(`/api/tags/picture/${pid}`);
}

function postScore(newScore, pid) {
  return myAxios.post(`/api/pictures/scores/${pid}`, { score: newScore });
}

function postTag(newTag, pid) {
  return myAxios.post(`/api/tags/${pid}`, { tag: newTag });
}

export { getPicture, getTags, postScore, postTag };
