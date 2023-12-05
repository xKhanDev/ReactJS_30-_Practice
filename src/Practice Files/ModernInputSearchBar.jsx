import React, { useState } from 'react'

const ModernInputSearchBar = ({items}) => {
    const [searchItems, setSearchItems] = useState('');

    const filterItems = items.filter((item)=>{
        return item.toLowerCase().includes(searchItems.toLowerCase())
    })
  return (
    <>
      <div className='flex flex-col justify-center items-center w-screen h-screen bg-yellow-300 text-white'>
        <input type="text" className='outline-none p-2 w-1/2 text-black' placeholder='Search ...' onChange={(e)=>setSearchItems(e.target.value)}/>
        <ul className='text-left text-black mt-4'>
            {
                filterItems.map((item,index)=>{
                    return (<li key={index} className=' rounded bg-slate-500 p-4 w-44 my-2'>
                        {item}
                    </li>)
                })
            }
        </ul>
      </div>
    </>
  )
}

export default ModernInputSearchBar
