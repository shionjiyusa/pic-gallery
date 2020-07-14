import React from 'react';
import { useLocation } from 'react-router-dom';

import './style.scss';

const NotFound = (msg) => {
  const location = useLocation();

  return (
    <h3>
      {msg}
      not found
      {location.pathname}
    </h3>
  );
};

export default NotFound;
