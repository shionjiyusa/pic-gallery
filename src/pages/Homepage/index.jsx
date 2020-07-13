import React, { PureComponent } from 'react';
import './style.scss';

class Homepage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: 'yusa',
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div className="gallery">
        <div>{name}</div>
      </div>
    );
  }
}

export default Homepage;
