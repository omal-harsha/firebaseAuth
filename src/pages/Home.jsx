import React from 'react'
import { useUserAuth } from '../components/UserAuthContext'

export const Home = () => {

    let {user, logout} = useUserAuth()

    const handleLogOut = async() => {

        try {
            await logout()
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
    <div className='flex justify-center flex-col items-center h-screen bg-gradient-to-r from-purple-500 to-pink-500'>
    {/* <p>{user && <h1>{user}</h1>}</p> */}
    <p className='text-white text-xl font-bold'>--- {user.email} ---</p>
        <h1 className='text-6xl text-white font-bold  px-3 py-2 rounded-2xl'>
        Welcome to Home page
        </h1>
        <button className='bg-btnBlue mt-5 py-2 hover:scale-105 duration-300 px-3 rounded-md text-white font-bold' onClick={handleLogOut}>Log Out</button>
    </div>
  )
}
