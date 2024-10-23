import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/header'
import LoginSignup from '../../components/login-signup/LoginSignup'

export const Home = () => {

    const [category, setCatergory] = useState("All")

  return (
    <div>
        <Header/>
        <LoginSignup/>
    </div>
  )
}

export default Home