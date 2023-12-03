import React, { useState } from 'react'

const AuthenForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [users, setUsers] = useState([]);

    const handleAuthen = () => {
        if(isRegistered){
            const user = users.find(user => user.email === email && user.password === password);
            if(user){
                setisLoggedIn(true);
            }
            else{
                window.alert("please Register First")
            }
        }
        else{
            const newUser = {email,password};
            setUsers([...users,newUser])
            localStorage.setItem("users ",JSON.stringify([...users,newUser]))
            setisLoggedIn(true)
        }
    }

    const handleLogOut = () => {
        setisLoggedIn(false)
    }

    return (
        <>
            <div className='w-screen h-screen bg-blue-400 text-white flex justify-center items-center'>
                {isLoggedIn ? (
                    <div>
                        <h2>
                            Welcome Sir, {name}
                        </h2>
                        <button className='p-2 text-center bg-orange-400 mt-2' onClick={handleLogOut}>
                            LogOut
                        </button>
                    </div>
                ) : (
                    <div className='flex justify-center items-center bg-blue-400 text-white flex-col'>
                        <h2 className='font-bold text-3xl text-orange-800'>
                            {isRegistered ? "Login" : "Register"}
                        </h2>
                        <form className='flex flex-col text-center'>
                            {!isRegistered ? <input type="text" placeholder='Enter Your Name...' className='mt-2 p-2 outline-none w-96 text-black' onChange={(e) => { setName(e.target.value) }} /> : false}
                            <input type="email" required placeholder='Enter your E-mail...' className='mt-2 p-2 outline-none w-96 text-black' onChange={(e) => { setEmail(e.target.value) }} />
                            <input type="password" required placeholder='Enter your Password' className='mt-2 p-2 outline-none w-96 text-black' onChange={(e) => { setPassword(e.target.value) }} />
                            <button className='p-2 text-center bg-orange-400 mt-2' onClick={handleAuthen}>
                                {(isRegistered ? "Login" : "Register")}
                            </button>
                        </form>
                        <p className='mt-2'>
                            {isRegistered ? "Don't have account please Register !" : "Already have account please Login !"}
                        </p>
                        <button className='p-2 text-center bg-orange-400 mt-2' onClick={() => setIsRegistered(!isRegistered)}>
                            {isRegistered ? "Register" : "Login"}
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default AuthenForm
