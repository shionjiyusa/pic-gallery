import myAxios from 'utils/myAxios';

// 获取跑马灯图片
const getCarousel = async () => {
  return myAxios('/api/pictureBox');
};

export default getCarousel;
