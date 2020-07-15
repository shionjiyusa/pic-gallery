import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Flickity from 'react-flickity-component';
import getCarousel from './service';
import './style.scss';

class Carousel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
    };
  }

  componentDidMount() {
    getCarousel().then((res) => {
      this.setState({ pictures: res.data.data });
    });
  }

  render() {
    const { pictures } = this.state;
    const flickityOptions = { initialIndex: 2 };
    return (
      <div className="carousel">
        <Flickity options={flickityOptions}>
          {pictures.map((pic) => (
            <Link to={`/picture/${pic.picture_id}`} key={pic.picture_id}>
              <img src={pic.picture_dir} alt={pic.picture_id} />
            </Link>
          ))}
        </Flickity>
      </div>
    );
  }
}

export default Carousel;
