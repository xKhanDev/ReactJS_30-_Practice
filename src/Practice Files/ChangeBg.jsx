import React from 'react'

const BackgroundChange = () => {
    const [backgroundColor, setbackgroundColor] = React.useState("purple");

    const changeBgColor = () =>{
        const newColor = backgroundColor === "purple" ? "blue" : "purple";
        setbackgroundColor(newColor);
    }
    return (
        <>
            <div style={{backgroundColor}} className='w-screen h-screen flex flex-col justify-center items-center'>
                <h2 className='text-2xl font-bold text-white mx-3'>
                    Click on Button to Change Background Color
                </h2>
                <button className='p-2 font-bold bg-red-600 text-white mt-2 rounded' onClick={changeBgColor}>
                    Change Background
                </button>
            </div>
        </>
    )
}

export default BackgroundChange ;