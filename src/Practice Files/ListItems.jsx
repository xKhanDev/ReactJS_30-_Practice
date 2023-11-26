import React from 'react'

const ListItems = () => {
    const items = ['item1', 'item2', 'item3', 'item4', 'item5'];
  return (
    <>
      <div className='flex flex-col justify-center items-center w-screen h-screen bg-slate-500'>
        <h2 className='text-green text-3xl font-bold mb-2'> Generating List of Items from Array</h2>
        <ul className='flex flex-col'>
            {
                items.map((item,index)=>{
                    return <li key={index} className='text-white bg-gray-700 w-64 p-2 rounded-md mt-2'>{item}</li>
                })
            }
        </ul>
      </div>
    </>
  )
}

export default ListItems
