import myAxios from 'utils/myAxios';

function getPicture(pid, limit) {
  return limit ? myAxios(`/api/pictures/${pid}/limit`) : myAxios(`/api/pictures/${pid}`);
}

function getCollectionState(pid) {
  return myAxios(`/api/pictures/collections/${pid}`);
}

function collect(pid) {
  return myAxios.put(`/api/pictures/collections/${pid}`);
}

function unCollect(pid) {
  return myAxios.delete(`/api/pictures/collections/${pid}`);
}

function getTags(pid) {
  return myAxios(`/api/tags/picture/${pid}`);
}

function postTag(newTag, pid) {
  return myAxios.post(`/api/tags/${pid}`, { tag: newTag });
}

function postScore(newScore, pid) {
  return myAxios.post(`/api/pictures/scores/${pid}`, { score: newScore });
}

function getComments(pid) {
  return myAxios.get(`/api/comments/picture/${pid}`);
}

function postComment(pid, comment) {
  return myAxios.post(`/api/comments/picture/${pid}`, { comment });
}

function deletePic(pid) {
  return myAxios.delete(`/api/pictures/${pid}`);
}

export {
  getPicture,
  getCollectionState,
  collect,
  unCollect,
  getTags,
  postScore,
  postTag,
  getComments,
  postComment,
  deletePic,
};
