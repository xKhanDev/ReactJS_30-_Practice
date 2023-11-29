import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from "./forRoutingPractice/Home"
import About from './forRoutingPractice/About'
import ContactUs from './forRoutingPractice/ContactUs'

const RoutingSetup = () => {
  return (
    <BrowserRouter>
    <nav className='w-screen h-12 flex justify-around items-center bg-orange-600 text-white'>
        <Link to='/' className='hover:text-blue-500'>Home</Link>
        <Link to='/About' className='hover:text-blue-500'>About</Link>
        <Link to='/ContactUs' className='hover:text-blue-500'>Contact Us</Link>
    </nav>
    <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path='/About' element={ <About />}/>
        <Route path='/ContactUs' element={ <ContactUs />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default RoutingSetup
