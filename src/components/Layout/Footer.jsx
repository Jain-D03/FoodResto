import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
    <>
     <Box sx={{textAlign:'center',bgcolor:'black',color:'white', p:2}}>
      <Box sx={{my:3,"& svg":{
        fontSize:"50px",
        cursor:"pointer",
        mr:2
      },
      "& svg:hover":{
        color:"goldenrod",
        tranform:"tranlate(5px)",
        transition:"all 400ms",
      }}}>
      <InstagramIcon/>
      <YouTubeIcon/>
      <TwitterIcon/>
      <FacebookIcon/>
      </Box>
      <Typography variant='h6'>
         All Right Reserved &copy; XYZ
      </Typography>
     </Box>
    </>
  )
}

export default Footer