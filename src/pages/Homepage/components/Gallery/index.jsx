import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pagination, message } from 'antd';
import Nav from '../Nav';

import getPictures from './service';
import './style.scss';

function Homepage() {
  const [pictures, setPictures] = useState([]);
  const [total, setTotal] = useState(1);
  const [orderType, setOrderType] = useState('');
  const [limit, setLimit] = useState(false);

  const pageChange = (page, pageSize) => {
    getPictures(limit, page, pageSize, orderType)
      .then((res) => {
        if (res.status === 200) {
          setPictures(res.data.rows);
          setTotal(res.data.count);
        } else {
          message.error('加载失败');
        }
      })
      .catch(() => {
        message.error('加载失败');
      });
  };

  useEffect(() => {
    pageChange();
  }, [limit, orderType]);

  const setOrder = (type) => {
    setOrderType(type);
  };

  // Nav 组件切换状态
  const limitHandle = (navLimit) => {
    setLimit(navLimit);
    setPictures([]);
  };

  return (
    <div className="gallery-wrapper">
      <Nav limitHandle={limitHandle} setOrder={setOrder} />
      <ul className="gallery">
        {pictures.map((picture) => {
          const { picture_id: id, thumb_url: url, collection_count: star } = picture;
          return (
            <Link to={limit ? `/picture/${id}/${limit}` : `/picture/${id}`} key={id}>
              <li key={id} data-collection={star}>
                <img src={url} alt={id} />
              </li>
            </Link>
          );
        })}
      </ul>
      <Pagination
        defaultCurrent={1}
        pageSize={20}
        total={total}
        onChange={(page, pageSize) => pageChange(page, pageSize)}
      />
    </div>
  );
}

export default Homepage;
