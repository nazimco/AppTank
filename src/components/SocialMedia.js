import React, { Component } from 'react';
import '../css/testcss.css';

import { Timeline } from 'react-twitter-widgets'
// var Timeline = require('react-twitter-widgets').Timeline
 
// ReactDOM.render((
//   <Timeline
//     dataSource={{
//       sourceType: 'profile',
//       screenName: 'twitterdev'
//     }}
//     options={{
//       username: 'TwitterDev',
//       height: '400'
//     }}
//     onLoad={() => console.log('Timeline is loaded!')}
//   />
// ), document.getElementById('root'))



class SocialMedia extends Component {
  render() {
    return (
      <div id="socialmedia">
//   <Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: 'twitterdev'
    }}
    options={{
      username: 'DJKhaled',
      height: '400'
    }}
    onLoad={() => console.log('Timeline is loaded!')}
  />
       

      
        <div className="twitter">
          <h2> Twitter </h2>
        
          
        </div>

      </div>
    );
  }
}

export default SocialMedia;
