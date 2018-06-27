
  import React, { Component } from 'react';
import '../css/componentcss.css';
import '../css/Music.css';
import axios from "axios";
import YouTube from 'react-youtube';




class Music extends Component {

    state = {
       persons: {},
     }

     // componentDidMount() {
     //   axios.get(`http://localhost:3000/dj/`)
     //     .then(res => {
     //       const persons = res.data;
     //       this.setState({ persons });
     //     })
     // }
     componentDidMount() {
       axios.get(`/dj`)
         .then(res => {
           console.log(res);
           const persons = res;
           this.setState({ persons });
         })
     }



   render() {
     let src = this.state.persons.data;
     console.log(src)
     return (
       <div className="musicMain">

    <div className="spotifyMain">
      <div className="spotifyLogoMain">
        <img className="musicLogo" src="http://www.stickpng.com/assets/images/59b5bb466dbe923c39853e00.png" alt="musiclogo"></img>
        </div>
    <iframe className="spotify" src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DZ06evO0rer1m" width="550" height="350" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <div className="youtubeMain">
        <div className="youtubeLogoMain">
  <img className="youtubeLogo" src="https://static.wixstatic.com/media/f5fa78_13ce7301b332499abc0811ecc4d1d1d7.png" alt="youtubelogo"></img>
  </div>
  <iframe className="youtubeKhaled" width="550" height="350" src={src} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
</div>

     )
   }
 }



export default Music;
