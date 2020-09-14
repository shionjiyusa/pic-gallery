import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../../components/Menu';
import Score from './components/Score';
import Tag from './components/Tag';
import { getPicture } from './service';
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

  const { picture_id: id, picture_url: url, created_at: time, scores } = pic;
  return (
    <>
      <Menu />
      <div className="picture-wrapper">
        <div className="pic">
          <img src={url} alt={id} />
        </div>
        <Score scores={scores} />
        <Tag pid={pid} />
        <div className="foot">
          <span>
            投稿时间：
            {/* {Moment(Number(`${created_at}000`)).format('YYYY-MM-DD')} */}
            {time}
          </span>
          <div>投稿人：</div>
        </div>
      </div>
    </>
  );
}

export default Picture;
