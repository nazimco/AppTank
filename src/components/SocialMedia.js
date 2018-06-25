import React, { Component } from 'react';
import '../css/testcss.css';



class SocialMedia extends Component {
  render() {
    return (
      <div id="socialmedia">

        <div className="instagram">
          <h2> Instagram </h2>
          

        </div>

        <div className="snapchat">
          <h2> Snapchat </h2>
        </div>

        <div className="twitter">
          <h2> Twitter </h2>
          <a class="twitter-timeline" href="https://twitter.com/djkhaled?ref_src=twsrc%5Etfw">
        Tweets by djkhaled</a>
          
        </div>

      </div>
    );
  }
}

export default SocialMedia;
