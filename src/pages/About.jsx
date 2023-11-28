import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material';
import '../style/AboutStyle.css';

const About = () => {
  return (
    <Layout>
     <Box class="aboutresto" >
      <Typography> <h1>Welcome to My Resturant</h1></Typography>
      <h3>ABOUT SECTION</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum ullam ipsa repudiandae quibusdam mollitia amet ipsam expedita rerum dolorum aperiam laborum, dolore culpa commodi aliquam impedit? Eum, minima magnam!Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur beatae ducimus similique nam perspiciatis, quam fugiat quas excepturi officiis necessitatibus facilis deserunt officia sequi inventore maiores corrupti exercitationem temporibus incidunt? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates fugit assumenda neque illo at autem, quis sint, eius quae possimus eligendi accusantium! Porro, quasi temporibus. Asperiores aut quasi impedit alias?</p><br/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minus odit velit laudantium blanditiis, architecto unde quod quasi pariatur? Iusto, dolores vitae. Atque repellat explicabo at et accusamus, reiciendis</p>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quas debitis sapiente voluptatibus, quaerat ex repellat. Sapiente provident ipsa reiciendis facilis unde maiores, eaque animi est magni, quaerat facere praesentium?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa earum enim est at nisi reprehenderit, id magnam doloribus excepturi ex, maiores perspiciatis voluptatum quisquam nesciunt. Minus provident facere sequi Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam tempora asperiores sequi perferendis nulla fugit doloremque, debitis in, eligendi deserunt minima eveniet itaque veniam pariatur, sed blanditiis! Laboriosam, temporibus corporis.</p><br/>
      </Box> 
    </Layout>
  )
}

export default About;