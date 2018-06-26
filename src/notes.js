//rotating images


const GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

export class GuineaPigs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = GUINEAPATHS[this.state.currentGP];
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}



//Change display upon input

import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = { userInput: '' }
    this.handleUserInput = this.handleUserInput.bind(this)
  }

  handleUserInput(e) {
    this.setState({
      userInput: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input value={this.state.userInput} onChange={this.handleUserInput} type="text" />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);


//express


const express = require('express');
const app = express();

const { getElementById, getIndexById, updateElement,
  seedElements, createElement } = require('./utils');

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

const expressions = [];
seedElements(expressions, 'expressions');
const animals = [];
seedElements(animals, 'animals');

// Get all expressions
app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

// Get a single expression
app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression);
  } else {
    res.status(404).send();
  }
});

// Update an expression
app.put('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});

// Create an expression
app.post('/expressions', (req, res, next) => {
  const receivedExpression = createElement('expressions', req.query);
  if (receivedExpression) {
    expressions.push(receivedExpression);
    res.status(201).send(receivedExpression);
  } else {
    res.status(400).send();
  }
});

// Delete an expression
app.delete('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    expressions.splice(expressionIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

// Get all animals
app.get('/animals', (req, res, next) => {
  res.send(animals);
});

// Get a single animal
app.get('/animals/:id', (req, res, next) => {
  const animal = getElementById(req.params.id, animals);
  if (animal) {
    res.send(animal);
  } else {
    res.status(404).send();
  }
});

// Create an animal
app.post('/animals', (req, res, next) => {
  const receivedAnimal = createElement('animals', req.query);
  if (receivedAnimal) {
    animals.push(receivedAnimal);
    res.status(201).send(receivedAnimal);
  } else {
    res.status(400).send();
  }
});

// Update an animal
app.put('/animals/:id', (req, res, next) => {
  const animalIndex = getIndexById(req.params.id, animals);
  if (animalIndex !== -1) {
    updateElement(req.params.id, req.query, animals);
    res.send(animals[animalIndex]);
  } else {
    res.status(404).send();
  }
});

// Delete a single animal
app.delete('/animals/:id', (req, res, next) => {
  const animalIndex = getIndexById(req.params.id, animals);
  if (animalIndex !== -1) {
    animals.splice(animalIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});




// BOOTSTRAP



@-webkit-keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
.ticker-wrap {
  position: fixed;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  height: 4rem;
  background-color: rgba(0, 0, 0, 0.9);

  box-sizing: content-box;
}
.ticker-wrap .ticker {
  display: inline-block;
  height: 4rem;
  line-height: 4rem;
  white-space: nowrap;
  box-sizing: content-box;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-name: ticker;
  animation-name: ticker;
  -webkit-animation-duration: 30s;
  animation-duration: 30s;
}
.ticker-wrap .ticker__item {
  display: inline-block;
  padding: 0 2rem;
  font-size: 2rem;
  color: white;
}



//ROUTERS

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default BasicExample;



//MEDIA ROULETTE


import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MusicPage from './components/MusicPage';
import MoviePage from './components/MoviePage';
import Home from './components/Home';


const MusicImage = [
  'https://www.apple.com/v/music/g/images/shared/og_image_family.png?201806011154',
  'https://coosbaydowntown.org/wp-content/uploads/2017/06/Music-music-32070905-1440-900.jpg',
  'https://archive.org/download/dark-music-wallpaper/dark-music-wallpaper.jpg',
  'https://denelecampbell.files.wordpress.com/2018/02/o-music-heart-facebook.jpg'
];

const MovieImage = [
  'https://media.wired.com/photos/59de99f39db9cf4266631b87/master/w_1440,c_limit/Movies-TopArt.jpg',
  'https://www.ivacy.com/blog/wp-content/uploads/2016/02/Movies-releasing-this-year-Banner.jpg',
  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lead-teenmovies2018-1515442632.jpg?crop=1.00xw:1.00xh;0,0&resize=768:*',
  'https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/12/04/best-sports-movies-ever-box-office-money.jpg'
]




class App extends Component {

  constructor(props) {
    super(props);

    this.state = { currentMI: 0,
                   currentMI2: 0
                 };

    this.interval = null;

    this.nextMI = this.nextMI.bind(this);
  }

  nextMI() {
    let current = this.state.currentMI;
    let current2 = this.state.currentMI2;
    let next = ++current % MusicImage.length;
    let next2 = ++current2 % MovieImage.length;
    this.setState({ currentMI: next,
                    currentMI2: next2
                  });

  }

  componentDidMount() {
    this.interval = setInterval(this.nextMI, 5000);
    this.interval2 = setInterval(this.nextMI2, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.interval2);
  }

  render() {
      let src = MusicImage[this.state.currentMI];
      let src2 = MovieImage[this.state.currentMI2]
    return (
      <Router>
      <div className="App">
        <header>
          <Link to="/home">MEDIA ROULETTE</Link>
          <Route path="/home" component={Home} />

      </header>
        <div className="Media">
        <section className="Movies">
              <Link to="/moviepage">MOVIES</Link>
              <Route path="/moviepage" component={MoviePage} />
          <img className="Movie-Logo" src={src2} alt="movie"></img>

        </section>
        <section className="Music">
          <div className="Music-Logo-Div">
                <Link to="/musicpage">MUSIC</Link>
                <Route path="/musicpage" component={MusicPage} />
          <img className="Music-Logo" src={src} alt="music"></img>
          </div>
        </section>
      </div>
      <section className="bootstrap">
      <div className="ticker-wrap">
        <div className="ticker">
          <div className="ticker__item">Can't decide what to watch or listen to? Give Media Roulette a spin!</div>
      </div>
    </div>
    </section>
    <hr />
  </div>
</Router>
    );
  }
}

export default App;



//OLD Music

import React, { Component } from 'react';
import '../css/testcss.css';
import axios from "axios";
import YouTube from 'react-youtube';




class Music extends Component {




   render() {


     return (
       <div className="musicMain">

  <div className="musicBackground">


<iframe className="spotify" src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DZ06evO0rer1m" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
<img className="musicKhaled" src="https://wallpapersfit.com/wp-content/uploads/data/2017/11/26/DJ-Khaled-Wallpapers-HD-In-High-Definition-1WC200955.jpg" alt="key" />

</div>


       </div>
     )
   }
 }



export default Music;


//OLD SOCIAL Media

import React, { Component } from 'react';
import '../css/testcss.css';



class SocialMedia extends Component {
  constructor() {
    super();
    this.state = {
      persons: {}
    }
  }

   componentDidMount() {
     axios.get(`http://localhost:3000/dj/`)
       .then(res => {
         const persons = res.data;
         this.setState({ persons });
       })
   }

  render() {
    return (
      <div id="socialmedia">



        <div className="twitter">
          <a className= "feed" class="twitter-timeline" href={this.state.persons.twitter1}>
      </a>

        </div>

      </div>
    );
  }
}

export default SocialMedia;
