import React from 'react'
import './Landing.css'
import oplogo from '../assets/brand.png'
import oplogo1 from '../assets/oplogo.png'
import { CiMail } from 'react-icons/ci'
import Pickup from '../assets/Pickup_Illustration.png'
import axios from 'axios';
import { useEffect , useState } from 'react'
const Landing = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
   
        const handleSubmit = async (e) => {
            e.preventDefault();
        try{

            const res = await axios.post("https://openauto.onrender.com/", {name:name, email:email});
            
            console.log(res.data)}

            catch(error){
                console.log(error.response)
            }
        }

    
    return (
        <div className='landing'>
            <div className='navbar'>
                <div className='nav-left'>
                    <div className='brand'>
                    <img src={oplogo}></img></div>
                </div>
                <ul className='nav-right'>
                    <li className='nav-right-item'>+91 9894014102</li>
                    <li className='nav-right-item'><CiMail size={20} />  service@openauto.ca</li>
                    <li className='nav-right-item'><button className='download'>Download the mobile app</button></li>
                </ul>
            </div>
            <div className='landing-main'>
                <section className='landing-left'>
                    <div className='main-title'>
                        Vehicle Maintanace From The Comfort of Your Home
                    </div>
                    <div className='main-subtitle'>
                        Open Auto soothes the hazzle of maintaing your vehicle and helps you deal with unxepctd repairs worry-free
                    </div>
                    <form onSubmit={handleSubmit} >
                        <div className='name'>
                        <input type="text" id="fname" value={name} onChange={(e) => setName(e.target.value)} name="firstname" placeholder="Your Name"></input></div>

                        <div className='email'>
                        <input type="text" id="fname" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Your Email"></input>
                        </div>
                    <div className='submit'>
                        <button type = "submit" className='submit-form'>Submit</button>
                    </div>
                        </form>
                </section>
                <section className='landing-right'>
                    <img src={Pickup}></img>
                </section>
            </div>
            <div className='landing-footer'>
                <img src={oplogo1}></img>
            </div>
        </div>
    )
}

export default Landing