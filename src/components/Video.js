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
           <img className="videoKhaled" src="https://i.imgur.com/1dpP2z7.jpg" alt=""></img>
             <iframe className="khaledvid1" width="750" height="500" src="https://www.youtube.com/embed/videoseries?list=PLXZwqjKREaTN6gighTdIbmwdeY8GTlQxB" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
             </iframe>
        </div>
          <footer>
          <img className="khaledmovie" src="https://i.imgur.com/zcZAQH3.png" alt="mov" />
          </footer>
       </div>
     )
   }
  }
export default Video;
