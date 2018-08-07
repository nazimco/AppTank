import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route,} from 'react-router-dom';

import Home from './components/Home';
import SocialMedia from './components/SocialMedia';
import Music from './components/Music';
import Shop from './components/Shop';
import About from './components/About';
import Itunes from './components/Itunes';



class App extends React.Component {

constructor(){
  super();
  this.state = {
    nolineHome: "line",
    nolineAbout: "noline",
    nolineMusic: "noline",
    nolineItunes: "noline",
    nolineTwitter: "noline",
    nolineShop: "noline",
  }
}

handleClickHome() {
this.toggleMenu("nolineHome")
}
handleClickAbout() {
  this.toggleMenu("nolineAbout")
}
handleClickMusic() {
  this.toggleMenu("nolineMusic")
}
handleClickItunes() {
  this.toggleMenu("nolineItunes")
}
handleClickTwitter() {
  this.toggleMenu("nolineTwitter")
}
handleClickShop() {
  this.toggleMenu("nolineShop")
}

toggleMenu(item){
  let collection = {
    nolineHome: "noline",
    nolineAbout: "noline",
    nolineMusic: "noline",
    nolineItunes: "noline",
    nolineTwitter: "noline",
    nolineShop: "noline",
  };
  collection[item] = "line";
  this.setState(collection)
}




  render() {

// let line_class_home = this.state.nolineHome ? "noline" : "line";
// let line_class_about = this.state.nolineAbout ? "noline" : "line";
// let line_class_music = this.state.nolineMusic ? "noline" : "line";
// let line_class_itunes = this.state.nolineItunes ? "noline" : "line";
// let line_class_twitter = this.state.nolineTwitter ? "noline" : "line";
// let line_class_shop = this.state.nolineShop ? "noline" : "line";

    return (
      <Router>
      <div id="gify" className="App">
        <div className="NavBar">
          <Link className={this.state.nolineHome} onClick={this.handleClickHome.bind(this)}   to="/home">Home</Link>
          <Link className={this.state.nolineAbout} onClick={this.handleClickAbout.bind(this)} to="/about">About</Link>
          <Link className={this.state.nolineMusic}  onClick={this.handleClickMusic.bind(this)} to="/music">Stream Music</Link>
          <Link  className={this.state.nolineItunes}   onClick={this.handleClickItunes.bind(this)} to="/itunes">Buy Music</Link>
          <Link className={this.state.nolineTwitter}   onClick={this.handleClickTwitter.bind(this)} to="/socialmedia">Twitter</Link>
          <Link  className={this.state.nolineShop}  onClick={this.handleClickShop.bind(this)}  to="/shop">Shop</Link>
        </div>
        <div className="Router">

          <Route path="/music" component={Music} />
          <Route exact path="/" component={Home} />
          <Route path="/itunes" component={Itunes} />
          <Route path="/socialmedia" component={SocialMedia} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />

        </div>

        </div>
    </Router>
    );

}
}
export default App;
