import React from 'react';

import Audio from '../../components/Audio';
import Gallery from './components/Gallery';
import Menu from '../../components/Menu';
import Nav from './components/Nav';
import Footer from '../../components/Footer';
import './style.scss';

function Homepage() {
  return (
    <>
      <Menu />
      <div className="homepage">
        <Nav />
        <Audio />
        <Gallery />
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
