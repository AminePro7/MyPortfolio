import React from 'react'
import "./Footer.css"
import { FaFacebook } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { AiFillTwitterCircle } from "react-icons/ai"

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>AMX</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#testimonials'>Testimonials</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href='https://facebook.com'><FaFacebook /></a>
                <a href='https://instagram.com'><RiInstagramFill /></a>
                <a href='https://twitter  .com'><AiFillTwitterCircle /></a>
            </div>


            <div className="footer__copyright">
                <small>All rights Reserved</small>
            </div>
        </footer>)
}

export default Footer