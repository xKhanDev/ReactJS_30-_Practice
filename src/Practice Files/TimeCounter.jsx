import React, { useEffect, useState } from 'react'

const TimeCounter = () => {
    const [time, setTime] = useState(0);
    const [input, setInput] = useState("");

    const setTimer = () => {
        setTime(input) ;
        setInput("") ;
    }


    useEffect(()=>{
        if(time > 0){
            const Timer = setTimeout(()=>setTime(time - 1),1000);
            return ()=>clearInterval(Timer)
        }
    },[time])

    return (
        <>
            <div className='flex flex-col bg-slate-600 text-white justify-center items-center w-screen h-screen'>
                <div className='flex flex-row gap-2'>
                    <input type="text" className='mt-3 text-black p-2 outline-none' onChange={(e)=>setInput(e.target.value)}/>
                    <button className='p-2 mt-3 border-spacing-3 bg-slate-500' onClick={setTimer}>Set Time</button>
                </div>
                <p className='mt-3'>
                    Time Left: {time} Sec
                </p>
            </div>
        </>
    )
}

export default TimeCounter
