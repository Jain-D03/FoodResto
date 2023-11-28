import React,{useState} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const Cart = ({ cartItems }) => {

 
  let getTotalItems = () => cartItems.reduce((total, item) => total + item.quantity, 0);
  let getTotalPrice = () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <Box>
    <div className="cart"> 
      <h1 style={{textAlign:"center"}}> Cart  <ShoppingCartIcon></ShoppingCartIcon> </h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ol>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - {item.price} RS</li>
          ))}
        </ol>
      )}
      <div className="cartt">
          <p style={{color:"green"}} >Total Items: {getTotalItems()}</p>
         
          <p style={{color:"red"}}><b>Total Price: {getTotalPrice().toFixed(2)} RS</b></p>
        </div> 
      <button class="oderbtn"> ORDER NOW <RestaurantMenuIcon></RestaurantMenuIcon> </button>
     
         
      
    </div>
    </Box>
  );
};

export default Cart;
