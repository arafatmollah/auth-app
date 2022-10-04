import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'

export default function () {
  return (
    <div>
        <h2>Join us today</h2>
        <div>
            <p>Select Provider</p>
            <div className='flex p-4 flex-col w-30 justify-center align-middle'>
                <button className='bg-gray-700 text-white w-full flex align-middle gap-2 p-4 rounded-lg'>
                    <FcGoogle className='text-2xl'></FcGoogle>
                    Sign In with Google</button>
                <button className='bg-gray-700 text-white mt-5'>
                    <AiFillFacebook className='text-blue-400 mx-5'></AiFillFacebook>
                    Sign In with Google</button>
            </div>
        </div>
    </div>
  )
}
