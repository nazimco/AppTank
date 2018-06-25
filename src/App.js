import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route,} from 'react-router-dom';
import {Button} from 'semantic-ui-react';

import Home from './components/Home';
import SocialMedia from './components/SocialMedia';
import Music from './components/Music';
import Shop from './components/Shop';
import About from './components/About';
import Video from './components/Video';



const App = () => {

    return (
      <Router>
      <div id="gify" className="App">
        <navigation className="NavBar">
        <Link to="/home"><Button primary >Home</Button ></Link>
        <Link to="/about"><Button primary >About</Button ></Link>
          <Link to="/music"><Button primary >Music</Button ></Link>
          <Link to="/video"><Button primary >Video</Button></Link>
          <Link to="/socialmedia"><Button primary>Connect</Button ></Link>
          <Link to="/shop"><Button primary >Shop</Button ></Link>

          <Route path="/music" component={Music} />
          <Route path="/home" component={Home} />
          <Route path="/video" component={Video} />
          <Route path="/socialmedia" component={SocialMedia} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />

        </navigation>


      </div>
    </Router>
    );

}

export default App;
