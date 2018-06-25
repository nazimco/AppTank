import React, { Component } from 'react';
import '../css/testcss.css';
import axios from "axios";
import { Player } from 'video-react';
import YouTube from 'react-youtube';


class Video extends Component {
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
     const opts2 = {
          height: '390',
          width: '640',
          playerVars: {
            autoplay: 1
          }
        };
     return (
       <div className="vidMain">
         <div className="vid1">
       <YouTube className="khaledvid1"
            videoId={this.state.persons.khaled1}
            opts={opts}
            onReady={this._onReady}
          />
        </div>
          <footer>
          <img className="khaledmovie" src="https://i.imgur.com/zcZAQH3.png" alt="mov" />
          </footer>
       </div>
     )
   }
  }
export default Video;
