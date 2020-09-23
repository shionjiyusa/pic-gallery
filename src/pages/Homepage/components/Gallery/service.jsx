import myAxios from 'utils/myAxios';

// 获取 gallery 图片
const getPictures = (limit = false, page = 1, pageSize = 20) => {
  return limit
    ? myAxios(`/api/pictures/limit?page=${page}&per_page=${pageSize}`)
    : myAxios(`/api/pictures?page=${page}&per_page=${pageSize}`);
};

export default getPictures;
