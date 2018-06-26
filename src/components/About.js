import React, { Component } from "react";
import "../css/testcss.css";






const KHALEDPATH = [
  'https://i.imgur.com/2jSYK6H.jpg',
  'http://rocnation.com/wp-content/uploads/2016/02/DJ-Klahed-FINAL-1000X500.jpg',
  'https://i.imgur.com/JbcEnlb.jpg'
];

class About extends Component {

  constructor(props) {
    super(props);
    this.state = { currentKhaled: 0 };
    this.interval = null;
    this.nextKhaled = this.nextKhaled.bind(this);
  }

  nextKhaled() {
    let current = this.state.currentKhaled;
    let next = ++current % KHALEDPATH.length;
    this.setState({ currentKhaled: next });
  }

  componentDiDMount() {
    this.interval = setInterval(this.nextKhaled, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = KHALEDPATH[this.state.currentKhaled];
    return (
      <div id="about">
      <div className="bio">
      <div className="profile">
      <img className="headshot" src={src} alt="khaledd" ></img>
      <h1>" DJ Khaled "</h1>
            </div>
      <h3> " Biography " </h3>

      <p>`No overnight success, Khaled Mohamed Khaled toiled as a DJ for years
      prior to becoming an immensely successful, larger-than-life figure in rap
      music. During the latter half of the 2000s and throughout the following
       decade, surrounded by an ever-shifting cast of high-profile associates,
       Khaled factored into several of the rowdiest and most triumphant
       crossover rap hits. `</p>
       <p>`His first nine albums, released from 2006 through 2016,
       peaked within the Top Five of Billboards rap chart, supported by
       singles that often seemed like events. Many of the genres
       biggest names, including Rick Ross, Drake, and Jay-Z, eagerly took part.`</p>

  <p>`Cynics noted that Khaled rarely produced or wrote material and wondered
         if he did more than yell, self-promote, and flaunt. Meanwhile, others
         were having too good a time to care, charmed by Khaleds fun-loving
          spirit and or the well-placed talent that flanked him.`</p>

      </div>

      </div>
    );
  }
}

export default About;
