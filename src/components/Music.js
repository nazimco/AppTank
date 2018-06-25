import React, { Component } from 'react';
import '../css/testcss.css';
import axios from "axios";
import { Player } from 'video-react';
import YouTube from 'react-youtube';


class Music extends Component {
  state = {
     persons: {}
   }

   componentDidMount() {
     axios.get(`http://localhost:3000/profile/`)
       .then(res => {
         const persons = res.data;
         this.setState({ persons });
       })
   }


   render() {
     const opts = {
          height: '390',
          width: '640',
          playerVars: {
            autoplay: 1
          }
        };
     return (
       <div>
       <YouTube
            videoId="tcEpHnaZMgg"
            opts={opts}
            onReady={this._onReady}
          />
       </div>
     )
   }
 }

export default Music;
