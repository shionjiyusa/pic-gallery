import myAxios from 'utils/myAxios';

// 获取 gallery 图片
const getPictures = (limit = false, page = 1, pageSize = 20, orderType) => {
  return limit
    ? myAxios(`/api/pictures/limit?page=${page}&per_page=${pageSize}&order_type=${orderType}`)
    : myAxios(`/api/pictures?page=${page}&per_page=${pageSize}&order_type=${orderType}`);
};

export default getPictures;
