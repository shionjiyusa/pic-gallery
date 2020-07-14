import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import getPictures from './service';
import './style.scss';

class Homepage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
    };
  }

  componentDidMount() {
    getPictures().then((res) => {
      this.setState({ pictures: res.data.data.thumbs });
    });
  }

  render() {
    const { pictures } = this.state;
    return (
      <div className="gallery">
        {pictures.map((picture) => (
          <Link to={`/picture/${picture.picture_id}`} key={picture.picture_id}>
            <div className="card">{picture.picture_id}</div>
          </Link>
        ))}
      </div>
    );
  }
}

export default Homepage;
