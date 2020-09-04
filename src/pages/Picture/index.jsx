import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Score from './components/Score';
import Tag from './components/Tag';
import getPicture from './service';
import './style.scss';

function Picture() {
  const { pid } = useParams(); // 获取路由 params
  const [pic, setPic] = useState({});

  useEffect(() => {
    getPicture(pid).then((res) => {
      setPic(res.data);
    });
  }, []);

  // 判断对象是否为空，解决空对象属性引用报错
  if (JSON.stringify(pic) === '{}') {
    return null;
  }

  const { pic_dir, tags } = pic;
  return (
    <div className="picture-wrapper">
      <div className="pic">
        <img src={pic_dir} alt={pid} />
      </div>
      {/* <Score scores={scores} /> */}
      {/* <Tag tags={tags} /> */}
    </div>
  );
}

export default Picture;
