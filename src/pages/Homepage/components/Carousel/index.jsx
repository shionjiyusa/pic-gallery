import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
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
    return (
      <div className="carousel">
        {pictures.map((pic) => (
          <Link to={`/picture/${pic.picture_id}`} key={pic.picture_id}>
            <img src={pic.picture_dir} alt={pic.picture_id} />
          </Link>
        ))}
      </div>
    );
  }
}

export default Carousel;
