import React,{useState} from 'react'
import { AppBar, Box,Drawer,IconButton,Toolbar, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import '../../style/HeaderStyle.css';
import FastfoodIcon from '@mui/icons-material/Fastfood';


const Header = () => {
  const [mOpen,setOpen] = useState(false)

  const handleD = () =>{
    setOpen(!mOpen)
  }
  const drawer=(
    <Box onClick={handleD} sx={{textAlign:'center'}}>
       <Typography color={"goldenrod"} variant='h6' component='div' sx={{flexGrow:1, my:2}}>
       
            <FastfoodIcon></FastfoodIcon>
           </Typography>
          
            <ul className="mobile-navigation-menu"> 
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/menu'}>Menu</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
             
            </ul>
          
    </Box>
  )
  
  return (
    <>
   
       <Box>
        <AppBar component={"nav"} sx={{bgcolor:"black"}}>
          <Toolbar > 
           <IconButton color="inherit"  onClick={handleD} >
           
            <MenuOpenIcon/>
           </IconButton>
          <Typography color={"goldenrod"} component='div' sx={{flexGrow:1}}>
          <FastfoodIcon></FastfoodIcon>
             My Resturant
           </Typography>
           <Box sx={{display:{xs:"none",sm:"block"}}}>
            <ul className="navigation-menu"> 
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/menu'}>Menu</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
             
            </ul>
           </Box>
          </Toolbar>
        </AppBar>
         <Box component="nav">
            <Drawer variant='temporary' open={mOpen} onClose={handleD} sx={{diaplay:{xs:'block',sm:'none'}}}> 
              {drawer}
            </Drawer>
         </Box>
         <Box> 
            <Toolbar />
          </Box>
        
      </Box>
    </>
  )
}

export default Header;