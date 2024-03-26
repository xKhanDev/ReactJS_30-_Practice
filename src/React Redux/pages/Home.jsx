import React from 'react'
import Products from "../components/Products"

const Home = () => {

  return (
    <div className='capitalize w-full'>
      <h3 className='font-bold text-xl text-center w-full mt-4'>Wellcome to react redux tool kit learning session</h3>
      <section>
        <h3 className='font-semibold text-lg ml-20 my-6'>Products</h3>
        <Products />
      </section>
    </div>
  )
}

export default Home