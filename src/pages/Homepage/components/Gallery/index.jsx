import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pagination, message } from 'antd';
import Nav from '../Nav';

import getPictures from './service';
import './style.scss';

function Homepage() {
  const [pictures, setPictures] = useState([]);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(false);

  const pageChange = (page, pageSize) => {
    getPictures(limit, page, pageSize)
      .then((res) => {
        if (res.status === 200) {
          setPictures(res.data.rows);
          setTotal(res.data.count);
        } else {
          message.error('加载失败');
        }
      })
      .catch((e) => {
        console.log(e);
        message.error('加载失败');
      });
  };

  useEffect(() => {
    pageChange();
  }, [limit]);

  // Nav 组件切换状态
  const limitHandle = (navLimit) => {
    setLimit(navLimit);
    setPictures([]);
  };

  return (
    <div>
      <Nav limitHandle={limitHandle} />
      <Pagination
        defaultCurrent={1}
        pageSize={10}
        total={total}
        onChange={(page, pageSize) => pageChange(page, pageSize)}
      />
      <ul className="gallery">
        {pictures.map((picture) => {
          const { picture_id: id, thumb_url: url, collection_count: star } = picture;
          return (
            <li key={id}>
              <Link to={limit ? `/picture/${id}/${limit}` : `/picture/${id}`} key={id}>
                <img src={url} alt={id} />
                <div className="card">{star}</div>
              </Link>
            </li>
          );
        })}
      </ul>
      <Pagination
        defaultCurrent={1}
        pageSize={10}
        total={total}
        onChange={(page, pageSize) => pageChange(page, pageSize)}
      />
    </div>
  );
}

export default Homepage;
