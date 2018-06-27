import React, { Component } from 'react';
import '../css/componentcss.css';
import axios from 'axios'
import { Timeline } from 'react-twitter-widgets'
// Timeline = require('react-twitter-widgets').Timeline



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


      </div>
    );
  }
}
export default SocialMedia;
