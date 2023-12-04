import React, { useEffect, useState } from 'react'

const WeatherApp = () => {
    const [weather,setWeather] = useState(null);

    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
               const latitude = position.coords.latitude;
               const longitude = position.coords.longitude;

               fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=223d8bdfa38bea93099cebffa099541a`)
               .then((response)=>response.json())
               .then((data)=>{
                return setWeather(data)})
            })
        }
    },[])
  return (
    <>
    <div className='w-screen h-screen flex justify-center items-center bg-yellow-500'>
        {weather ? (
            <div className='flex flex-col gap-8 p-8 bg-white w-1/3 h-1/2 justify-center rounded'>
                <h2 className='font-bold text-3xl text-center'>Current Weather</h2>
                <p className='font-bold text-xl'>Your Country: <span className='text-red-600'>{weather.sys.country}</span></p>
                <p className='font-bold text-xl'>Your Location: <span className='text-red-600'>{weather.name}</span></p>
                <p className='font-bold text-xl'>Weather Temprature: <span className='text-red-600'>{weather.main.temp}</span></p>
                <p className='font-bold text-xl'>Weather Description: <span className='text-red-600'>{weather.weather[0].description}</span></p>
            </div>
        ): (
            <p>Loading...</p>
        )}
    </div>
    </>
  )
}

export default WeatherApp
