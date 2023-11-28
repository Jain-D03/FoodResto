import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom';
import '../style/HomeStyle.css';
const Home = () => {
  return (
    <Layout>
      <div className="home"> 
        <div className="header_containe">
          <h1>Welcome to Our Restaurant</h1>
          <p>Best Food In India</p>
          <Link to='/menu'>
            <button class="btn">ORDER NOW</button> 
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home