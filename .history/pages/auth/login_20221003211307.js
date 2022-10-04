import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'

export default function () {
  return (
    <div>
        <h2>Join us today</h2>
        <div>
            <p>Select Provider</p>
            <div className='flex p-4 flex-col w-50 justify-center align-middle'>
                <button className='bg-gray-700 text-white flex'>
                    <FcGoogle></FcGoogle>
                    Sign In with Google</button>
                <button className='bg-gray-700 text-white mt-5 flex align-middle justify-center p-2'>
                    <AiFillFacebook className='text-blue-400'></AiFillFacebook>
                    Sign In with Google</button>
            </div>
        </div>
    </div>
  )
}
