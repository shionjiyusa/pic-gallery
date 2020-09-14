import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../../components/Menu';
import Score from './components/Score';
import Tag from './components/Tag';
import { getPicture } from './service';
import './style.scss';

function Picture() {
  const { pid, limit = false } = useParams(); // 获取路由 params
  const [pic, setPic] = useState({});

  useEffect(() => {
    getPicture(pid, limit).then((res) => {
      setPic(res.data);
    });
  }, []);

  // 判断对象是否为空，解决空对象属性引用报错
  if (JSON.stringify(pic) === '{}') {
    return null;
  }

  const { picture_url: url, created_at: createdAt, scores } = pic;
  // 处理时间表示方法
  const time = createdAt.split(/T|\./);

  return (
    <>
      <Menu />
      <div className="picture-wrapper">
        <div className="pic">
          <img src={url} alt={pid} />
        </div>
        <Score scores={scores} pid={pid} />
        <Tag pid={pid} />
        <div className="foot">
          <span>
            投稿时间：
            {/* {Moment(Number(`${created_at}000`)).format('YYYY-MM-DD')} */}
            {`${time[0]} ${time[1]}`}
          </span>
          <div>投稿人：</div>
        </div>
      </div>
    </>
  );
}

export default Picture;
