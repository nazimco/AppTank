import React, { Component } from 'react';
import '../css/componentcss.css';
import axios from "axios";
import YouTube from 'react-youtube';




class Music extends Component {

    state = {
       persons: {},
     }

     componentDidMount() {
       axios.get(`http://localhost:3000/dj/`)
         .then(res => {
           const persons = res.data;
           this.setState({ persons });
         })
     }



   render() {
     let src = this.state.persons.youtube;

     return (
       <div className="musicMain">

  <div className="musicBackground">
    <img className="musicLogo" src="http://www.stickpng.com/assets/images/59b5bb466dbe923c39853e00.png" alt="musiclogo"></img>
    <iframe className="spotify" src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DZ06evO0rer1m" width="250" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
         
    <img className="youtubeLogo" src="https://static.wixstatic.com/media/f5fa78_13ce7301b332499abc0811ecc4d1d1d7.png" alt="youtubelogo"></img>
    <iframe className="youtubeKhaled" width="600" height="350" src={this.state.persons.youtube} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

    <img className="musicKhaled" src="https://wallpapersfit.com/wp-content/uploads/data/2017/11/26/DJ-Khaled-Wallpapers-HD-In-High-Definition-1WC200955.jpg" alt="key" />

</div>


       </div>
     )
   }
 }



export default Music;
