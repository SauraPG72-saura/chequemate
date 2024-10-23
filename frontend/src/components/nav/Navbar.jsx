import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'


const Navbar = () => {

  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
        <img src={assets.logo} alt='' className='logo' />
        <ul className='nav-menu'>
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
            <li onClick={()=>setMenu("resources")} className={menu==="resources"?"active":""}>Resources</li>
            <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</li>
        </ul>
        <div className='nav-right'>
            <button>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar
