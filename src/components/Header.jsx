import React from 'react'
import logo from "../assets/logo.webp"
import search from "../assets/search.svg"
import cart from "../assets/cart.svg"
import hamburger from "../assets/hamburger.svg"
const Header = () => {
  return (
    <div className='header'>
      
      <img  className="logo" src={logo} alt="" />
      <ul>
        <li>HOME<span>+</span></li>
        <li>PAGES<span>+</span></li>
        <li>PORTFOLIO<span>+</span></li>
        <li>BLOG<span>+</span></li>
        <li>SHOP<span>+</span></li>
        <li>CONTACT<span>+</span></li>
      </ul>
<div className="right">
  <img className='search' src={search} alt="" />
  <img className='cart' src={cart} alt="" />
  <img className='hamburger' src={hamburger} alt="" />
</div>
    </div>
  )
}

export default Header
