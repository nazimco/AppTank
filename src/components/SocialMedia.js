import React, { Component } from 'react';
import '../css/componentcss.css';
import '../css/SocialMedia.css';
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
        <p>
        "You smart"
      </p>
      <p>
        "You loyal"
        </p>
      <p>
        "I appreciate that"
        </p>
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
