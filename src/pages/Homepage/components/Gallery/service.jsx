import myAxios from 'utils/myAxios';

// 获取 gallery 图片
const getPictures = (page = 1, pageSize = 10) => {
  return myAxios(`/api/pictures?page=${page}&per_page=${pageSize}`);
};

export default getPictures;
