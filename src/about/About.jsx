import React from 'react'
import './About.css'
import pick from '../assets/picku service.png'
import brand from '../assets/brand.png'
import{TbPhone} from 'react-icons/tb'
import { CiMail } from 'react-icons/ci' 
import {FaFacebookF ,FaInstagram, FaTwitter, FaYoutube ,FaLinkedin} from 'react-icons/fa'
const About = () => {
  return (
    <div className='about'>
        <div className='about-sections'>
            <section className='about-left'>
                <img src={pick}></img>
            </section>
            <section className='about-right'>
            <div className='main-title'>
                       Focused on Time Saving
                    </div>
                    <div className='main-subtitle'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione saepe assumenda impedit explicabo corrupti ex id ut deserunt corporis beatae dolorum sed, dignissimos architecto quam sapiente suscipit rem nobis!
                    </div>
                    <div className='download-app'><button className='download'>Downlod the mobile app</button></div>
            </section>
        </div>
        <div className='footer'>
            <div className='row1'>
                <div className='brand'>

<img src={brand}></img>
                </div>
                <div className='info'>
                    <div className='number'><TbPhone/>+91 98940 14102</div>
                    <div className='mail'><CiMail/>service@openauto.ca</div>
                </div>
            </div>
            <div className='row2'>
                <div className='rights'>open auto @ all rights reserved</div>
                <div className='handles'><FaFacebookF size={22}/> <FaTwitter size={22}/> <FaYoutube size={22}/> <FaLinkedin size={22}/> <FaInstagram size={22}/> </div>
            </div>
        </div>
    </div>
  )
}

export default About