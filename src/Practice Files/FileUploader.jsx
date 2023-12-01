import React, { useState } from 'react'

const FileUploader = () => {
    const [file, setFile] = useState(null);

    const handleSelectedImg =(e)=>{
        const selectedFile = e.target.files[0];
        setFile(selectedFile)
    }

  return (
    <>
      <div className='flex flex-col gap-4 justify-center items-center w-screen h-9 bg-slate-700'>
        <input type="file" accept='image/*' className='text-center' onChange={handleSelectedImg}/>
      </div>
      <span>{file && <img src={URL.createObjectURL(file)} alt='Image uploaded' className='w-1/3 h-auto text-center' />}</span>
    </>
  )
}

export default FileUploader
