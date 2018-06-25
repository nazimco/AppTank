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
       <div className="musicMain">
          <div className="bio">
          <p> Dj Khaled </p>
          <p> Genre </p>
          <p> Lorem </p>
          </div>
       <div className="songList">
       <select  id="selectBar">
         <option value="Song1">
           Song1
         </option>

         <option value="Song2">
           Song2
         </option>

         <option value="Song3">
           Song3
         </option>
       </select>
       </div>
       <div className="nowPlaying">
       <h3 className="songText1">Now Playing:</h3>

       <h3 className="songText2">Song1</h3>
       </div>
       <div className="song">
       <YouTube className="khaledvid3"
            videoId={this.state.persons.khaled1}
            opts={opts}
            onReady={this._onReady}
          />
          </div>


       </div>
     )
   }
 }

export default Music;
