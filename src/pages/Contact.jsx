import React from 'react'
import Layout from '../components/Layout/Layout'
import ContactPageIcon from '@mui/icons-material/ContactPage';

import { Box, Typography } from '@mui/material';
import '../style/ContactStyle.css'


const Contact = () => {
  return (
    <Layout>
        <Box class="contact_container">
            <h1><ContactPageIcon/>
          Contact My Resturant
          </h1>
          <p style={{padding:'40px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat architecto magnam, eaque numquam corrupti optio et aperiam dolore possimus suscipit a tempora impedit natus omnis earum mollitia doloremque voluptatibus nobis?</p>
        
           <br /><br />
           <h2 style={{color:'red',fontSize:'30px'}}>Thanks For Connecting Us!!</h2>
             <hr />
            <br /><br />
              <ul className='contact_menu' style={{textAlign:'center', fontSize:'20px'}}>
                
                <li><b> Contact :</b> 001-0293-9239 </li>
                <li><b>Email : </b> xyz@gmail.com</li>
                <li><b>Address : </b> 445 Shivaji Nagar,Yavatmal, Maharastra,444555</li>
              </ul>
             
              <br />
              <br />
              <br /><br /><br /><br /><br />            
            <p></p>
            </Box>
            
       
        {/* 
          
            
         
         
</> */}
    </Layout>
  )
}

export default Contact