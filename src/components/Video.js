import React, { Component } from 'react';
import '../css/testcss.css';
import axios from "axios";
import { Player } from 'video-react';
import YouTube from 'react-youtube';


// class Container extends React.Component {
//   constructor(props) {
//     super(props);
//
//     // Don't forget to bind the handler to the correct context
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick(sort) {
//     this.setState({sort: sort});
//   }
//
//   render() {
//     return (
//       <Button handleClick={this.handleClick} />
//       <List sort={this.state.sort} />
//     )
//   }
// }

class Video extends Component {

//   constructor(props) {
//     super(props);
//   }
//
// onClick(videoId) {
// this.setState({videoId: this.state.persons.khaled2});



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
     const opts = {
          height: '390',
          width: '640',
          playerVars: {
            autoplay: 0
          }
        };
     const opts2 = {
          height: '390',
          width: '640',
          playerVars: {
            autoplay: 0
          }
        };

     return (
       <div className="vidMain">
         <div className="vid1">
        <img className="leftArrow" src="https://i.imgur.com/3ZOLCql.png" alt="" />
        <img className="rightArrow" src="https://i.imgur.com/3ZOLCql.png" alt="" />
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
