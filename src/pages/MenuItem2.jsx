import React, { useState } from 'react';

const MenuItem2 = ({ dish, addToCart }) => {
  const[quantity,setQuantity]=useState(1);

  const handleAddToCart = () => {
    addToCart({ ...dish, quantity });
    setQuantity(1); // Reset quantity after adding to cart
  };
  return (
    <div className="menu-item">
      <h3>{dish.name}</h3>
      
      <p>Price: {dish.price}RS</p>
      <img src={`images/${dish.image}`} alt={dish.name} />
      <p>Special Offer: {dish.specialOffer}</p>
      
      <button class="addCartbtn" onClick={handleAddToCart}><span>Add to Cart</span></button>
    </div>
  );
};

export default MenuItem2;
