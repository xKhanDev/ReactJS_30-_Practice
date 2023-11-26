import React, { useState } from 'react'

const TodoList = () => {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");

    const addItem = (e) => {
        e.preventDefault();
        if (input !== "") {
            setItems([...items, input]);
            setInput("");
        }
    }
    const removeItem = (id) => {
        const updatedItems = items.filter((curElem,index) => {
            return index !== id;
        });
        setItems(updatedItems)
    }    
    return (
        <>
            <div className='flex flex-col bg-slate-600 text-white justify-center items-center w-screen h-screen'>
                <form className="flex gap-2 bg-slate-900 rounded">
                    <input type="text" className='text-black p-3 w-72 shadow-lg outline-none shadow-orange-400' placeholder='Enter Task...' onChange={(e) => setInput(e.target.value)} />
                    <button className='p-3 ml-3 text-white' onClick={addItem}>Add Item</button>
                </form>
                <div className='mt-5 w-96 '>
                    <ul className='flex flex-col'>
                        {
                            items.map((item, index) => {
                                return (<div className='flex items-center mt-3  bg-slate-500' key={index}>
                                    <li className='w-96 p-2'>{item}</li>
                                    <button className='px-1 py-2 w-20 h-10 text-white bg-orange-600 rounded' onClick={()=>removeItem(index)}>Remove</button>
                                </div>)
                            })
                        }

                    </ul>
                </div>
            </div>
        </>
    )
}

export default TodoList
