import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import MenuItem from './MenuItem';
import Cart from './Cart.jsx';
import '../style/MenuStyle.css';

function Menu(){
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  
  
  return (
    <Layout>
       <div className="App">
      <h1>Welcome to Our Restaurant</h1>
      
      <div className="content-container">
        <MenuItem addToCart={addToCart} />
        
        <Cart cartItems={cartItems} />
        
         
      </div>
    </div>
    </Layout>

  );
};
  

export default Menu;





 




