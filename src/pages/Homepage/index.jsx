import React, { Component } from 'react';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'yusa',
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <span>Homepage</span>
        <div>{name}</div>
      </div>
    );
  }
}

export default Homepage;
