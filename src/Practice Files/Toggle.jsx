import React from 'react'

const Toggle = () => {
    const [toggle, setToggle] = React.useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }
  return (
    <>
      <div className='flex flex-col justify-center items-center w-screen h-screen bg-slate-500 text-2xl'>
        <input type="checkbox" className='w-10 h-10 rounded' onChange={handleToggle}/>
        <p className=' mt-5 bg-amber-600 p-3'>{toggle ? "On" : "Off" }</p>
      </div>
    </>
  )
}

export default Toggle
