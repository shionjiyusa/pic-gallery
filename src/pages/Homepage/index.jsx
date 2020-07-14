import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { getPictures, getCarousel } from './service';
import Audio from '../../components/Audio';
import './style.scss';

class Homepage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pictures: ['yusa', 'name'],
      carousel: [],
    };
  }

  componentDidMount() {
    const pictures = getPictures() || [];
    const carousel = getCarousel() || [];
    this.setState({ pictures, carousel });
  }

  render() {
    const { pictures, carousel } = this.state;
    return (
      <div className="homepage">
        {/* <Carousel /> */}
        <div>{carousel}</div>
        {/* <Menu /> */}
        <Audio />
        <div className="gallery">
          {pictures.map((picture) => (
            <Link to={`/picture/${picture}`}>
              <div className="card">{picture}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Homepage;
