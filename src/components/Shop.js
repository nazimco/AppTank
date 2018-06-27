import React, { Component } from 'react';
import '../css/Shop.css';


export default class Shop extends Component {
  render() {
    return (
<div id="shop">

      {/* Nav Bar Logo - We the Best */}
      <div class="divlogo">
      <img class="logo" src={'http://zeus.cooltext.com/images/972/9726cad4c04a62e50c369da52c0fb8b4dcbdd729.gif'} alt='icon'  />
      </div>

      {/* Nav Bar */}
      <div class="bar">
          <div className="barText">Men</div>
          <div className="barText">Women</div>
          <div className="barText">Accessories</div>
          <div className="barText">The Keys</div>
          <div className="barText"><img class="icon" src={'https://cdn4.iconfinder.com/data/icons/gnome-desktop-icons-png/PNG/64/Gnome-Stock-Person-64.png'} alt='icon'  /></div>
          <div className="barText"><img class="shoppingcart" src={'https://cdn4.iconfinder.com/data/icons/Primo_Icons/PNG/128x128/shopping_bag.png'} alt='shoppingcart'  /></div>
      </div>

      {/* Item Boxes 1st Row */}
    <div class="box">
      <div class="one">
        <img class="imageone" src={'https://cdn.shopify.com/s/files/1/1055/0970/products/DJK_4165_They_Block_grande.png?v=1481222658'} alt='cocobutter'  />
        <h3>DJ Khaled - Special Edition</h3>
        <h3>Palmer's Cocoa Butter THEY BLOCK</h3>
        <h3>13.5oz - $7.95</h3>
        </div>
      <div class="two">
        <img class="imagetwo" src={'https://slack-imgs.com/?c=1&url=https%3A%2F%2Fi.imgur.com%2FkTeINvR.png'} alt='pin'  />
        <h3>DJ Khaled - Key to Success Pin</h3>
        <h3>1 inch Pin</h3>
        <h3>$20</h3>
      </div>
      <div class="three">
        <img class="imagethree" src={'https://i.imgur.com/RVp3B2z.png'} alt='shirt'  />
        <h3>Women's Blue Secure The Bag</h3>
        <h3>Jersey V-Neck</h3>
        <h3>$30</h3>
      </div>
    </div>
      {/* Item Boxes 2nd Row */}
      <div class="box">
      <div class="one">
        <img class="imagefour" src={'https://i.imgur.com/Q3VoB3y.png'} alt='mens shirt'  />
        <h3>Dj Khaled - I Like That</h3>
        <h3>All Sizes</h3>
        <h3>$30</h3>
        </div>
      <div class="two">
        <img class="imagefive" src={'https://i.imgur.com/E7Yapcw.png'} alt='mens shirt'  />
        <h3>DJ Khaled - Keys Open Doors</h3>
        <h3>All Sizes</h3>
        <h3>$30</h3>
      </div>
      <div class="three">
        <img class="imagesix" src={'https://cdn.shopify.com/s/files/1/1055/0970/files/The_Keys_-_FINAL_COVER_TO_USE_d7076b78-f9a8-4001-86e7-d3365c1b88bb_grande.jpg?v=1474910517'} alt='book'  />
        <h3>DJ Khaled - The Keys Book</h3>
        <h3>Get the key to success</h3>
        <h3>$20</h3>
      </div>
    </div>
      {/* Item Boxes 3rd Row */}
      <div class="box">
      <div class="one">
        <img class="imageseven" src={'https://i.imgur.com/FtLV9yH.png'} alt='hoodie'  />
        <h3>Khaled - "Grateful" Digital Album</h3>
        <h3>Grey CLOTH TALK Hoodie + DJ</h3>
        <h3>$73</h3>
        </div>
      <div class="two">
        <img class="imageeight" src={'https://i.imgur.com/o7mL9rB.png'} alt='charger'  />
        <h3>BLESS UP Battery Phone Charger</h3>
        <h3>Charge your phone</h3>
        <h3>$50</h3>
      </div>
      <div class="three">
        <img class="imagenine" src={'https://i.imgur.com/jRMsVU0.png'} alt='cocobutter'  />
        <h3>DJ Khaled - Special "T"</h3>
        <h3>White HOLY KEY</h3>
        <h3>$30</h3>
      </div>
    </div>






</div>




    );
  }
}
