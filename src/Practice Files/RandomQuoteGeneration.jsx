import React, { useEffect, useState } from 'react'

const RandomQuoteGeneration = () => {
    const [data, setData] = useState({text: '', author: ''});

    useEffect(() => {
        fetch('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(data => {
            const randomQuote = data[Math.floor(Math.random() * data.length)];
            setData(randomQuote);
        })
    }, []);

    return (
        <>
        <div className='w-screen h-screen bg-red-700 flex flex-col justify-center items-center'>
            <h2 className='text-white font-extrabold text-2xl'>{data.author} Said:</h2>
            <p className='text-xl mt-3 text-yellow-400'>{data.text}</p>
        </div>
        </>
    )
}

export default RandomQuoteGeneration
