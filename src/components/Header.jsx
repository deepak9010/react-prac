import React from 'react'
import { Link } from 'react-router-dom';


const Header2 = () => {
  return (
    <nav>
      <Link to ="/home">home</Link>
      <Link to ="/assignment">About</Link>
      <Link to ="/contact">contact</Link>
    </nav> 
  )
};

export default Header2  ;
