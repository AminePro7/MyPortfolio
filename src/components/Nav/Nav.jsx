import React from 'react'
import './Nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { BiMessageSquareDetail } from "react-icons/bi"
import { useState } from 'react'
import { Link } from 'react-scroll'

const Nav = () => {
    const [activeNav, setActiveNav] = useState("header")
    return (
        <nav>
            <Link to="header" spy={true} smooth={true} offset={7} duration={500} className={activeNav === "header" ? 'active' : ""}><AiOutlineHome /></Link>
            <Link to="about" spy={true} smooth={true} offset={7} duration={500} onClick={() => setActiveNav('about')} className={activeNav === "about" ? 'active' : ""}><AiOutlineUser /></Link>
            <Link to="experience" spy={true} smooth={true} offset={7} duration={500} onClick={() => setActiveNav('experience')} className={activeNav === "experience" ? 'active' : ""}><BiBook /></Link>
            <Link to="services" spy={true} smooth={true} offset={7} duration={500} onClick={() => setActiveNav('services')} className={activeNav === "services" ? 'active' : ""}><RiServiceLine /></Link>
            <Link to="contact" spy={true} smooth={true} offset={7} duration={500} onClick={() => setActiveNav('contact')} className={activeNav === "contact" ? 'active' : ""}><BiMessageSquareDetail /></Link>
        </nav>

    )
}

export default Nav