import React from 'react'
import '../index.css';

const IncrDecr = () => {
  const [Incre, setIncre] = React.useState(0)
  
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
      <h2 className='text-bold text-5xl'>Incriment and Decriment</h2>
      <span className='text-green-900 text-3xl mt-4 bg-black w-48 rounded-sm text-center'> {Incre}</span>
      <div className='flex mt-4 text-white'>
        <button className='mt-1 p-2 bg-orange-600 rounded w-60' onClick={() => setIncre(Incre + 1)}>INCR</button>
        <button className='mt-1 p-2 bg-orange-600 rounded ml-8 w-60' onClick={() => setIncre(Incre > 0 ? Incre - 1 : 0)}>DECR</button>
      </div>
    </div>
  )
}

export default IncrDecr
