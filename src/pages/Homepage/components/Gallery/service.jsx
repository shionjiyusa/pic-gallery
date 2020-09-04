import myAxios from 'utils/myAxios';

// 获取 gallery 图片
const getPictures = () => {
  return myAxios('/api/pictures');
};

export default getPictures;
