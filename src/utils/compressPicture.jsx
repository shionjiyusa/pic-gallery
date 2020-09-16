async function compressPicture(picture) {
  const MAX_SIZE = 400; // 压缩尺寸

  const canvas = document.getElementById('canvas');
  let ctx = null;
  // 处理浏览器不支持 canvas 的情况
  if (canvas.getContext) {
    ctx = canvas.getContext('2d');
  } else {
    return false;
  }

  const img = new Image();

  // 读取图片并转换成 base64 格式
  const fr = new FileReader();
  fr.readAsDataURL(picture);
  fr.addEventListener('load', () => {
    img.src = fr.result;
  });

  // 图片加载完成后进行压缩
  function getThumb() {
    // promise 解决异步未完成就返回 thumb 的问题
    return new Promise((resolve) => {
      img.onload = () => {
        const { width, height } = img;
        if (width < MAX_SIZE || height < MAX_SIZE) {
          // 图片尺寸太小不压缩
          return picture;
        }
        // 计算压缩比
        const ww = MAX_SIZE / width;
        const hh = MAX_SIZE / height;
        const rate = ww < hh ? ww : hh;
        // 重绘图片进行压缩
        canvas.width = width * rate;
        canvas.height = height * rate;
        ctx.drawImage(img, 0, 0, width * rate, height * rate);
        // 转换成 base64
        resolve(canvas.toDataURL('image/jpeg', 0.7));
        return null;
      };
    });
  }

  const thumb = await getThumb();
  return thumb;
}

export default compressPicture;
