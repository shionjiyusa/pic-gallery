import myAxios from 'utils/myAxios';

// 获取 gallery 图片
const getPictures = () => {
  return myAxios('/api/thumb');
};

// 获取跑马灯图片
const getCarousel = () => {
  return myAxios('/api/carousel');
};

export { getPictures, getCarousel };
