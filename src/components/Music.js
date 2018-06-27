import React, { Component } from 'react';
import '../css/testcss.css';
import axios from "axios";
import YouTube from 'react-youtube';




class Music extends Component {



   render() {


     return (
       <div className="musicMain">

  <div className="musicBackground">
    <img className="musicLogo" src="http://www.stickpng.com/assets/images/59b5bb466dbe923c39853e00.png" alt="musiclogo"></img>

    <h1 className="musicText">
      Top 50 Tracks of All Times
    </h1>


<iframe className="spotify" src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DZ06evO0rer1m" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<img className="musicKhaled" src="https://wallpapersfit.com/wp-content/uploads/data/2017/11/26/DJ-Khaled-Wallpapers-HD-In-High-Definition-1WC200955.jpg" alt="key" />

</div>


       </div>
     )
   }
 }



export default Music;
