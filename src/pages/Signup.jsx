import React, { useState } from 'react'

import { Link,useNavigate } from 'react-router-dom'
import { useUserAuth} from '../components/UserAuthContext.js'

export const Signup = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error,setError] = useState()

    const {signUp} = useUserAuth()
    const navigate = useNavigate()

    const handleClick = async(e)=>{
      e.preventDefault();
        setError("")
       try {
         await signUp(email,password)
         navigate("/")
       } catch (error) {
        console.log(error)
            setError(error)
       } 
    }

  return (
    <div className='flex justify-center h-screen  bg-bgGray '>
        <div className='border flex flex-col rounded-lg shadow-lg h-max bg-white px-5 py-5 items-center space-y-3 my-auto'>
            <h1 className='text-3xl text-gray-700 font-bold my-2'>Create account</h1>
           {error && <h1 className='border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700'>{error.message}</h1>}
            <input type="text" className='border border-gray-300 rounded-md px-3 py-2 w-80 focus:outline-none text-center text-gray-600 text-lg font-semibold' placeholder='username' onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" className='border border-gray-300 rounded-md px-3 py-2 w-80 focus:outline-none text-center text-gray-600 text-lg font-semibold' placeholder='password' onChange={(e)=> setPassword(e.target.value)}/>
            <button className='bg-btnBlue w-full py-2 px-3 rounded-md text-white font-bold' onClick={handleClick}>Sign up</button>
            {/* <hr class="w-full h-0.5  my-10 bg-gray-300 border-0 rounded "/> */}
            <div>
              <Link to="/">  <p className='text-sm my-2 underline cursor-pointer hover:text-btnBlue'>have you an account? Sign In  </p> </Link>
            </div>
            
        </div>
    </div>
  )
}
