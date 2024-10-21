import React from 'react'
import logo from "../assets/logo.webp"
import location from "../assets/location.svg"
import email from "../assets/email.svg"
import call from "../assets/call.svg"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import printest from "../assets/printest.svg"
import snapchat from "../assets/snapchat.svg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="links">
            <div className="flogo">
                <img src={logo} alt="" />
                <p>Phasellus vitae purus ac urna consequat facilisis a vel leo.</p>
            </div>
            <div className="li_blocka">
                <h3>Services</h3>
                <ul>
                    <li>Trend Haircut</li>
                    <li>Hair Washing</li>
                    <li>Hair Coloring</li>
                    <li>Facial hair Trim</li>
                </ul>
            </div>
            <div className="li_blocka"><h3 className='hthree'>Contact Us</h3>
            <ul>
                <li><img src={location} alt="" />PV3M+X68 Welshpool United Kingdom</li>
                <li><img src={call} alt="" />+125 (895) 658 568</li>
                <li><img src={email} alt="" />
                info.help@gmail.com</li>
            </ul></div>
            <div className="li_blocka">
                <h3 className='hfour'>Follow Us</h3>
                <div className="images">
                    <img src={facebook}alt="" />
                    <img src={twitter} alt="" />
                    <img src={snapchat} alt="" />
                    <img src={printest} alt="" />
                </div>
            </div>






        </div>
        <div className="copyright">
            <h4>Copyright &copy; 2022 <span>ThemeOri </span>Website by Barbex</h4>
        </div>
      
    </div>
  )
}

export default Footer
