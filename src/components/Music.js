import React, { Component } from 'react';
import '../css/testcss.css';
import axios from "axios";
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
         <div className="nowPlaying">
         <h3 className="songText1">"Now Playing: Im The One"</h3>
         </div>
       <div className="song">


       <YouTube className="khaledvid3"
            videoId={this.state.persons.khaled2}
            opts={opts}
            onReady={this._onReady}
          />
          </div>
          <div className="background-wrap">
          <div className="nowPlaying">

          <h3 className="songText2">"Artist: Dj Khaled"</h3>
          <h3 className="songText3">"Latest Album: Grateful"</h3>
          <h3 className="songText4">"Released: 2017"</h3>
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
       </div>



       </div>
     )
   }
 }

export default Music;
