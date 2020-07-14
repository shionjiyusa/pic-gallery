import React from 'react';
import { useParams } from 'react-router-dom';

function Picture() {
  const { pid } = useParams();
  return (
    <div>
      Picture
      <div>{pid}</div>
    </div>
  );
}

export default Picture;
