import React from 'react';

import Audio from '../../components/Audio';
import Carousel from './components/Carousel';
import Gallery from './components/Gallery';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import './style.scss';

function Homepage() {
  return (
    <>
      <Menu />
      <div className="homepage">
        <Carousel />
        <Audio />
        <Gallery />
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
