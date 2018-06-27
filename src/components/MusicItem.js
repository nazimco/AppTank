import React, { Component } from 'react';
import '../css/testcss.css';
import '../css/explicit.css';

class MusicItem extends Component {

constructor(props) {
  super(props);
}

  render() {
    return (
      <li className={this.props.explicit}>{this.props.name}
        <ul>
          <li>{this.props.album}</li>
          <li>{this.props.release}</li>
          <li><a href={this.props.link}>Buy it on iTunes!</a></li>
        </ul>
      </li>
    )
  }
};

export default MusicItem;
