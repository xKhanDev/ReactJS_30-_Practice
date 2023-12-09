import React, { useState } from 'react'

const ColorPicker = () => {
    const [selectedColor, setSelectedColor] = useState("#000000")
    const [color, setColor] = React.useState(selectedColor);

    const handleColor = (e) => {
        setSelectedColor(e.target.value);
        const newColor = selectedColor;
        setColor(newColor);
    }
    return (
        <>
            <div className='w-screen h-screen flex flex-col justify-center items-center bg-yellow-600'>
                <input type="color" className='w-32 h-32 rounded outline-none cursor-pointer' onChange={handleColor} />
                <h2 className='mt-4 text-2xl font-extrabold' style={{color}}>
                    Selected Color
                </h2>
                <span className='mt-4 font-bold text-red-600'>{selectedColor}</span>
            </div>
        </>
    )
}

export default ColorPicker
