import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../components/UserAuthContext'

export const PhoneSignUp = () => {

    const [number, setNumber] = useState()
    const [error,setError] = useState()
    const [otp,setOtp] = useState()
    const [flag,setFlag] = useState(true)
    const [confrimObj,setConfirmObj] = useState("")

    const {setUpRecaptcha} = useUserAuth()
    const navigate = useNavigate()

    const getOtp = async(e) => {
        setError("")
        e.preventDefault()
        if(number === "" || number === undefined) return setError("Please enter valid Phone number")

        try {
            const response = await setUpRecaptcha(number)
            console.log(response)
            setConfirmObj(response)
            setFlag(false)
        } catch (error) {
            console.log(error)
        }
        console.log(number)

    }

    const verifyOtp = async(e) => {
        e.preventDefault()
        console.log(otp)
        if(otp === "" || otp === null) return setError("Please enter vaild OTP")
        try {
            setError("")
            await confrimObj.confirm(otp)
            navigate("/home")
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='flex justify-center h-screen  bg-bgGray '>
        <div className='border flex flex-col rounded-lg shadow-lg h-max bg-white px-5 py-5 items-center space-y-4 my-auto'>
            <h1 className='text-3xl text-gray-700 font-bold my-2'>Firebase Phone Auth</h1>

                {/* Phone number enter section */}
                {flag ? (<div className='flex flex-col space-y-4  items-center'>
                    {error && <h1 className='border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700'>{error.message}</h1>}
                    <div className='border px-4 py-2 rounded-md'>
                    <PhoneInput
                        defaultCountry='LK'
                        value={number}
                        onChange={setNumber}
                        placeholder="Enter Phone number"
                        className={"input-phone-number"}
                    />
                    </div>
                    <div id='recaptcha-container'/>
                    <div className='space-x-5 '>
                        <Link to="/">
                            <button className='bg-gray-500 text-white px-3 py-2 rounded-md font-semibold'>Cancel</button>
                        </Link>
                        <button className='bg-blue-600 text-white px-3 py-2 rounded-md font-semibold' onClick={getOtp}>Send OTP</button>
                    </div>
                </div>)
                :(
                <div className='flex flex-col space-y-4  items-center'>
                    <input type="email"  className='border border-gray-300 rounded-md px-3 py-2 w-80 focus:outline-none text-center text-gray-600  ' placeholder='Enter OTP' onChange={(e)=> setOtp(e.target.value)}/>
                    <div className='space-x-5 '>
                        <Link to="/">
                            <button className='bg-gray-500 text-white px-3 py-2 rounded-md font-semibold'>Cancel</button>
                        </Link>
                        <button className='bg-blue-600 text-white px-3 py-2 rounded-md font-semibold' onClick={verifyOtp}>Verify OTP</button>
                    </div>
                </div>)}
        </div>
    </div>
  )
}
