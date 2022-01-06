import React from 'react';

import plain from './images/plain.jpg';
import pepperoni from './images/pepperoni.jpg';
import meatLover from './images/meat.jpg';
import veggie from './images/veggie.jpeg';
import hawaiian from './images/hawaiian.jpg';
import bbq from './images/bbq.jpg';
import Slice from './slice';
import './css/menu.css';

function Menu() {
  return(
    <div className='Menu container-fluid'>
      <h1 className='primary-text'>New York's World Famous</h1>
      <h1 className='secondary-text'>Pizza Menu</h1>
      <div className='row'>
        <Slice
        title="Plain"
        description="It's got cheese, it's got tomato sauce, and it's only a dollar! What more could you ask for?"
        img={plain}
        price="$1.00"
        />

       <Slice
        title="Pepperoni"
        description="A classic slice with cheese, sauce and guess what else... that's right, Pepperoni!"
        img={pepperoni}
        price="$1.00"
        />
        <Slice
        title="Hawaiian"
        description="We know, you think this is gross. But try this once and we swear you'll be hooked on this pineapple and ham pizza."
        img={hawaiian}
        price="$1.00"
        />
        <Slice
        title="Veggie"
        description="You're trying to be healthy but still can't resist pizza?! Then the Veggie slice is just for you! This is guilt-free pizza at its finest!"
        img={veggie}
        price="$1.00"
        />
        <Slice
        title="Meat-Lover"
        description="Pepperoni not enough meat for you?! Well this slice has peperoni, meatballs, and sausage!"
        img={meatLover}
        price="$1.00"
        />
        <Slice
        title="BBQ"
        description="Perhaps the most popular slice we offer. BBQ chicken over a delicious dollar pizza. What more could one want in life??"
        img={bbq}
        price="$1.00"
        />
        

                
    >
      </div>
    </div>
  );
}

export default Menu;
