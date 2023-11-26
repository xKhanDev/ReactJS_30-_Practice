import React from 'react'

const Form = () => {
    const[Iinput , setInput] = React.useState('')

    const addItem = (e) =>{
        e.preventDefault ();
    }

  return (
    <>
      <div className='bg-slate-800 flex flex-col justify-center items-center w-screen h-screen'>
        <form className='flex text-white'>
            <input type="text" 
            className='w-60 rounded-sm border-none outline-none text-black p-2'
            onChange={(e)=>setInput(e.target.value)}
            />
            <button className='w-32 p-3 bg-blue-600 rounded' onClick={addItem}>Add</button>
        </form>
        <p className='text-xl text-center mt-5 text-yellow-200'>{Iinput}</p>
      </div>
    </>
  )
}

export default Form
