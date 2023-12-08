import React, { useState } from 'react'

// program for (how much items we want to show on each page)
const PaginationComp = ({ items, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage; // 2*2 = 4 is last items index
    // console.log(`indexOfLastItem ${indexOfLastItem}`);

    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // 4-2 = 2
    // console.log(`indexOfFirstItem ${indexOfFirstItem}`);

    const currentItem = items.slice(indexOfFirstItem, indexOfLastItem);
    // console.log(`currentItem ${currentItem}`);

    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(items.length / itemsPerPage); i++) {
        pageNumbers.push(i);

    }
    return (
        <>
            <div className='w-screen h-screen flex flex-col justify-center items-center bg-yellow-600'>
                <ul className='bg-slate-500 rounded flex justify-center items-center flex-col'>
                    {
                        currentItem.map((item, index) => {
                            return <li key={index} className='w-32 text-center text-white font-bold text-xl mt-4'> {item} </li>
                        })
                    }
                </ul>
                {
                    pageNumbers.map((number)=>{
                        return <li key={number} onClick={()=>setCurrentPage(number)} className='w-20 cursor-pointer rounded text-white font-bold text-xl mt-2 bg-black'>
                            {number }
                        </li>
                    })
                }
            </div>
        </>
    )
}

export default PaginationComp
