import React, { Component } from 'react';
import '../css/testcss.css';
import axios from 'axios'
import { Timeline } from 'react-twitter-widgets'
// Timeline = require('react-twitter-widgets').Timeline

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
  constructor() {
    super();
    this.state = {
      persons: {}
    }
  }

   componentDidMount() {
     axios.get(`http://localhost:3000/dj/`)
       .then(res => {
         const persons = res.data;
         this.setState({ persons });
       })
   }

  render() {
    return (
      <div id="socialmedia">
<<<<<<< HEAD
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
=======
        <img className="socialKhaled" src="http://wallsdesk.com/wp-content/uploads/2016/10/DJ-Khaled-Background-.jpg" alt=""></img>
        <div className="feed">
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'djkhaled'
          }}
          options={{
            username: 'djkhaled',
            height: '730'
          }}
          onLoad={() => console.log('Timeline is loaded!')}
        />
        </div>

>>>>>>> d4853ae4919577c11ea01ca9c87735cfb9527ef1

      </div>
    );
  }
}
export default SocialMedia;
