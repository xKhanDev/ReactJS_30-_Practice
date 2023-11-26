import React from 'react'

const FetchData = () => {
    const [data, setData] = React.useState('');

    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=> res.json())
        .then(apiData => setData(apiData))
    },[])
  return (
    <>
      <div className='flex bg-slate-600 text-white justify-center items-center w-screen h-screen'>
        {
        data ? (
            <div>
                <h1 className='font-bold text-2xl'>{data.title}</h1>
                <p> {data.body} </p>
            </div>
        ) : (
            <p>Loading...</p>
        )
        }
      </div>
    </>
  )
}

export default FetchData
