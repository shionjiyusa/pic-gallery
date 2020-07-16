import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import getPictures from './service';
import './style.scss';

function Homepage() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    getPictures().then((res) => {
      setPictures(res.data.data.thumbs);
    });
    // return () => {
    //   // cleanup
    // };
  }, []);

  return (
    <div className="gallery">
      <ul>
        {pictures.map((picture) => (
          <li>
            <Link to={`/picture/${picture.picture_id}`} key={picture.picture_id}>
              <img src={picture.picture_dir} alt={picture.picture_id} />
              <div className="card">{picture.picture_id}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Homepage;
