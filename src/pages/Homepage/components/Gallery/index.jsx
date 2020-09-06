import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import getPictures from './service';
import './style.scss';

function Homepage() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    getPictures().then((res) => {
      setPictures(res.data.rows);
    });
  }, []);

  return (
    <div className="gallery">
      <ul>
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
    </div>
  );
}

export default Homepage;
