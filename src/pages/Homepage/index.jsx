import React from 'react';

import Audio from '../../components/Audio';
import Carousel from './components/Carousel';
import Gallery from './components/Gallery';
import Footer from '../../components/Footer';
import './style.scss';

function Homepage() {
  return (
    <>
      <div className="homepage">
        <Carousel />
        {/* <Menu /> */}
        <Audio />
        <Gallery />
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
