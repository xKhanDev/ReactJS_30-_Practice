import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const items = useSelector((state)=>state.cart)
  return (
    <div className='w-full flex justify-between items-center px-6 h-12 bg-black/30'>
        <span className='font-bold text-2xl text-black/80 w-1/3'>Safeer Shop</span>
        <div className='flex justify-between w-1/2'>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <span>Cart Items: {items.length}</span>
        </div>
    </div>
  )
}

export default Navbar