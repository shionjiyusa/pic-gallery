import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';

import getPictures from './service';
import './style.scss';

function Homepage() {
  const [pictures, setPictures] = useState([]);
  const [total, setTotal] = useState(0);

  const pageChange = (page, pageSize) => {
    getPictures(page, pageSize).then((res) => {
      setPictures(res.data.rows);
      setTotal(res.data.count);
    });
  };

  useEffect(() => {
    pageChange();
  }, []);

  return (
    <div>
      <Pagination
        defaultCurrent={1}
        pageSize={10}
        total={total}
        onChange={(page, pageSize) => pageChange(page, pageSize)}
      />
      <ul className="gallery">
        {pictures.map((picture) => {
          const { picture_id: id, thumb_url: url } = picture;
          return (
            <li key={id}>
              <Link to={`/picture/${id}`} key={id}>
                <img src={url} alt={id} />
                <div className="card">{id}</div>
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
