import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import getPictures from './service';
import './style.scss';

function Homepage() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    getPictures().then((res) => {
      setPictures(res.data);
    });
  }, []);

  return (
    <div className="gallery">
      <ul>
        {pictures.map((picture) => {
          const { _id: id, pic_dir: dir } = picture;
          return (
            <li key={id}>
              <Link to={`/picture/${id}`} key={id}>
                <img src={dir} alt={id} />
                <div className="card">{id}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Homepage;
