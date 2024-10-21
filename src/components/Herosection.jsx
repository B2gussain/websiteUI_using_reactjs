import React from 'react'
import bg from "../assets/banner-bg-3.webp"
import bgman from "../assets/banner-3.webp"
const Herosection = () => {
  return (
    <div className='hero' >
        <div className="herocontent">
            <p className='p1'>Welcome to Our Barbex</p>
            <h1>Best Haircut Salon<br/>in the City</h1>
            <p className='p2'>Phasellus vitae purus ac urna consequat facilisis a vel leo. Maecenas hendrerit lacinia mollis.</p>
            <img className='bgman' src={bgman} alt="" />
            <button className='readmorebtn'>READ MORE</button>
        </div>
    </div>
  )
}

export default Herosection
