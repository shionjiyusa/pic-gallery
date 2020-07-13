import React, { Component } from 'react';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'yusa',
    };
  }

  render() {
    return (
      <div>
        <span>Homepage</span>
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default Homepage;
