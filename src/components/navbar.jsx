import React from 'react';
import {Link} from "react-router-dom";
import {ShoppingCart} from "phosphor-react"
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to ="/">Shop</Link>
        <Link to = "/cart"><ShoppingCart size={32}/></Link>
        <Link to="/account">Login</Link>
        <Link to="/edit-profile">Edit Profile</Link>
      </div>
    </div>
  );
};

export default Navbar;