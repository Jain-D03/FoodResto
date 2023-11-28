import React from 'react';
import MenuItem2 from './MenuItem2';



const dishes = [
  { id: 1, name: 'Pizza', price: 160, specialOffer: 'Free Drink with Every Order' ,image:'Pizza.png' },
  { id: 2, name: 'French Fries', price: 90, specialOffer: 'Buy 2 Get 1 Free', image:'French-fries.png' },
  { id: 3, name: 'Burger', price: 60, specialOffer: 'Special Combo Price',image:'Burger.png' },
  { id: 4, name: 'Noodles', price: 120, specialOffer: 'Buy 1 Get 1 Free' ,image:'Noodles.png'},
  { id: 5, name: 'Paratha',price :150,specialOffer:'Closed', image:'Paratha.png'},
  { id: 6, name: 'Chole Batore',price :60 , specialOffer:'Closed',image:'CholeBature.png'},
  { id: 7, name: 'Pav Bhaji',price :50 ,specialOffer:'Closed', image:'PavBhaji.png'},
  { id: 8, name: 'Ice-Cream',price :200 ,specialOffer:'Closed',image:'Icecream.png' }
  

  // Add more dishes as needed
];

const MenuItem = ({ addToCart }) => {
  return (
    <div>
      <h2>Menu</h2>
      <marquee>Order Please</marquee>
      <div className="menu-container">
        {dishes.map((dish) => (
          <MenuItem2 key={dish.id} dish={dish} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default MenuItem;


