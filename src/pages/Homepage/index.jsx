import React from 'react';

import Audio from '../../components/Audio';
import Carousel from './components/Carousel';
import Gallery from './components/Gallery';

function Homepage() {
  return (
    <div className="homepage">
      <Carousel />
      {/* <Menu /> */}
      <Audio />
      <Gallery />
    </div>
  );
}

export default Homepage;
