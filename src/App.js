import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route,} from 'react-router-dom';
import {Button} from 'semantic-ui-react';

import Home from './components/Home';
import Instagram from './components/Instagram';
import Music from './components/Music';
import Shop from './components/Shop';
import Twitter from './components/Twitter';
import Video from './components/Video';



const App = () => {

    return (
      <Router>
      <div id="gify" className="App">
        <navigation className="NavBar">
        <Button primary ><Link to="/home">Home</Link></Button >
          <Button primary ><Link to="/music">Music</Link></Button >
          <Button primary ><Link to="/video">Video</Link></Button >
          <Button primary ><Link to="/instagram">Instagram</Link></Button >
          <Button primary ><Link to="/twitter">Twitter</Link></Button >
          <Button primary ><Link to="/shop">Shop</Link></Button >

          <Route path="/music" component={Music} />
          <Route path="/home" component={Home} />
          <Route path="/video" component={Video} />
          <Route path="/instagram" component={Instagram} />
          <Route path="/twitter" component={Twitter} />
          <Route path="/shop" component={Shop} />

        </navigation>
        <section className="Main">
        </section>

      <hr />
      </div>
    </Router>
    );

}

export default App;
